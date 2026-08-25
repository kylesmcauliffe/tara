#!/usr/bin/env node
/**
 * Design-reference scrape for shopdoen.com.
 * Outputs HTML, screenshots, computed tokens, and linked CSS/JS/fonts.
 * For visual inspection only — never ship scraped assets to production.
 *
 * Usage:
 *   node scripts/scrape-shopdoen.mjs
 *   node scripts/scrape-shopdoen.mjs --headed
 */
import { chromium } from "playwright";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, extname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "reference", "shopdoen");
const HEADED = process.argv.includes("--headed");
const SLOW = HEADED ? 250 : 0;
const NAV_TIMEOUT = HEADED ? 120_000 : 90_000;

const START_URL = "https://www.shopdoen.com/";

function slugFromUrl(url) {
  const u = new URL(url);
  const path = u.pathname.replace(/\/+/g, "/").replace(/\/$/, "") || "home";
  return path
    .replace(/^\//, "")
    .replace(/[^a-zA-Z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80) || "home";
}

async function ensureDir(p) {
  await mkdir(p, { recursive: true });
}

async function extractTokens(page) {
  return page.evaluate(() => {
    const pick = (el) => {
      if (!el) return null;
      const s = getComputedStyle(el);
      return {
        tag: el.tagName.toLowerCase(),
        className: typeof el.className === "string" ? el.className.slice(0, 200) : "",
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        lineHeight: s.lineHeight,
        letterSpacing: s.letterSpacing,
        color: s.color,
        backgroundColor: s.backgroundColor,
        padding: s.padding,
        margin: s.margin,
        gap: s.gap,
        maxWidth: s.maxWidth,
        borderColor: s.borderColor,
        borderWidth: s.borderWidth,
      };
    };

    const body = document.body;
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const nav = document.querySelector("header, nav, [role='navigation']");
    const links = [...document.querySelectorAll("a")].slice(0, 8).map(pick);
    const buttons = [...document.querySelectorAll("button, a[class*='btn'], [class*='button']")]
      .slice(0, 6)
      .map(pick);

    const colors = new Set();
    const fonts = new Set();
    document.querySelectorAll("body, body *").forEach((el, i) => {
      if (i > 400) return;
      const s = getComputedStyle(el);
      if (s.color) colors.add(s.color);
      if (s.backgroundColor && s.backgroundColor !== "rgba(0, 0, 0, 0)") {
        colors.add(s.backgroundColor);
      }
      if (s.fontFamily) fonts.add(s.fontFamily);
    });

    return {
      viewport: { width: window.innerWidth, height: window.innerHeight },
      title: document.title,
      body: pick(body),
      h1: pick(h1),
      h2: pick(h2),
      nav: pick(nav),
      sampleLinks: links,
      sampleButtons: buttons,
      uniqueColors: [...colors].slice(0, 40),
      uniqueFonts: [...fonts].slice(0, 20),
      breakpointsHint: {
        width: window.innerWidth,
        documentWidth: document.documentElement.scrollWidth,
      },
    };
  });
}

async function downloadAssets(page, pageDir) {
  const urls = await page.evaluate(() => {
    const hrefs = new Set();
    document.querySelectorAll('link[rel="stylesheet"], link[as="style"]').forEach((l) => {
      if (l.href) hrefs.add(l.href);
    });
    document.querySelectorAll("script[src]").forEach((s) => {
      if (s.src && !s.src.includes("googletag") && !s.src.includes("facebook")) {
        hrefs.add(s.src);
      }
    });
    document.querySelectorAll('link[rel*="font"], link[as="font"]').forEach((l) => {
      if (l.href) hrefs.add(l.href);
    });
    return [...hrefs].slice(0, 40);
  });

  const assetsDir = join(pageDir, "assets");
  await ensureDir(assetsDir);
  const manifest = [];

  for (const url of urls) {
    try {
      const res = await page.request.get(url, { timeout: 30_000 });
      if (!res.ok()) continue;
      const buf = Buffer.from(await res.body());
      const hash = createHash("sha1").update(buf).digest("hex").slice(0, 10);
      let ext = extname(new URL(url).pathname) || "";
      if (!ext || ext.length > 6) {
        const ct = res.headers()["content-type"] || "";
        if (ct.includes("css")) ext = ".css";
        else if (ct.includes("javascript")) ext = ".js";
        else if (ct.includes("woff2")) ext = ".woff2";
        else if (ct.includes("woff")) ext = ".woff";
        else ext = ".bin";
      }
      const name = `${basename(new URL(url).pathname).slice(0, 40) || "asset"}-${hash}${ext}`;
      const dest = join(assetsDir, name.replace(/[^a-zA-Z0-9._-]/g, "_"));
      await writeFile(dest, buf);
      manifest.push({ url, file: `assets/${basename(dest)}`, bytes: buf.length });
    } catch {
      /* skip failed asset */
    }
  }
  await writeFile(join(pageDir, "assets-manifest.json"), JSON.stringify(manifest, null, 2));
}

async function scrapePage(page, url, label) {
  const slug = label || slugFromUrl(url);
  const pageDir = join(OUT, "pages", slug);
  await ensureDir(pageDir);
  await ensureDir(join(pageDir, "tokens"));
  await ensureDir(join(pageDir, "screenshots"));

  console.log(`\n→ Scraping ${url} → pages/${slug}`);

  let response;
  try {
    response = await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: NAV_TIMEOUT,
    });
  } catch (err) {
    console.warn(`  navigation error: ${err.message}`);
  }

  await page.waitForTimeout(HEADED ? 4000 : 2500);

  const html = await page.content();
  const blocked =
    /attention required|just a moment|cf-browser-verification|challenge-platform|access denied/i.test(
      html
    ) || (html.length < 8000 && !html.includes("doen"));

  if (blocked) {
    console.warn("  possible bot block / empty shell detected");
    await writeFile(join(pageDir, "BLOCKED.txt"), `Blocked or thin HTML for ${url}\n`);
  }

  await writeFile(join(pageDir, "page.html"), html);
  await writeFile(
    join(pageDir, "meta.json"),
    JSON.stringify(
      {
        url,
        finalUrl: page.url(),
        status: response?.status?.() ?? null,
        title: await page.title(),
        scrapedAt: new Date().toISOString(),
        headed: HEADED,
        blocked,
      },
      null,
      2
    )
  );

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(800);
  await page.screenshot({
    path: join(pageDir, "screenshots", "desktop-1440.png"),
    fullPage: true,
  });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(800);
  await page.screenshot({
    path: join(pageDir, "screenshots", "mobile-390.png"),
    fullPage: true,
  });

  await page.setViewportSize({ width: 1440, height: 900 });
  const tokens = await extractTokens(page);
  await writeFile(join(pageDir, "tokens", "computed.json"), JSON.stringify(tokens, null, 2));

  await downloadAssets(page, pageDir);
  console.log(`  done (${html.length} bytes html)`);
  return { url: page.url(), slug, blocked, htmlLength: html.length };
}

async function discoverUrls(page) {
  const links = await page.evaluate(() => {
    const abs = (href) => {
      try {
        return new URL(href, location.origin).href;
      } catch {
        return null;
      }
    };
    const all = [...document.querySelectorAll("a[href]")]
      .map((a) => abs(a.getAttribute("href")))
      .filter(Boolean)
      .filter((h) => h.startsWith(location.origin));

    const collections = all.filter((h) => /\/collections\//i.test(h));
    const products = all.filter((h) => /\/products\//i.test(h));
    const shopLandings = all.filter(
      (h) => /\/collections\/all|\/pages\/|shop|clothing|new/i.test(h) && !/\/products\//i.test(h)
    );

    return {
      collections: [...new Set(collections)].slice(0, 12),
      products: [...new Set(products)].slice(0, 12),
      shopLandings: [...new Set(shopLandings)].slice(0, 12),
    };
  });
  return links;
}

async function main() {
  await ensureDir(OUT);
  console.log(`Output: ${OUT}`);
  console.log(`Mode: ${HEADED ? "headed (slow)" : "headless"}`);

  const browser = await chromium.launch({
    headless: !HEADED,
    slowMo: SLOW,
  });

  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    locale: "en-US",
    viewport: { width: 1440, height: 900 },
  });

  const page = await context.newPage();
  const results = [];

  try {
    const home = await scrapePage(page, START_URL, "home");
    results.push(home);

    if (home.blocked && !HEADED) {
      console.warn(
        "\nHome looks blocked in headless. Re-run with: node scripts/scrape-shopdoen.mjs --headed"
      );
    }

    const discovered = await discoverUrls(page);
    await writeFile(join(OUT, "discovered-urls.json"), JSON.stringify(discovered, null, 2));

    const shopUrl =
      discovered.shopLandings.find((u) => /collections\/all|new-arrivals|clothing/i.test(u)) ||
      discovered.collections[0] ||
      `${START_URL}collections/all`;
    const collectionUrl = discovered.collections[0] || shopUrl;
    let productUrl = discovered.products[0];

    results.push(await scrapePage(page, shopUrl, "shop-landing"));
    results.push(await scrapePage(page, collectionUrl, "collection"));

    if (!productUrl) {
      await page.goto(collectionUrl, { waitUntil: "domcontentloaded", timeout: NAV_TIMEOUT });
      await page.waitForTimeout(2000);
      const more = await discoverUrls(page);
      productUrl = more.products[0];
    }

    if (productUrl) {
      results.push(await scrapePage(page, productUrl, "pdp"));
    } else {
      console.warn("No PDP URL discovered — skipping PDP scrape");
    }

    await writeFile(join(OUT, "scrape-index.json"), JSON.stringify({ results, headed: HEADED }, null, 2));
    console.log("\nScrape complete.");
    console.log(JSON.stringify(results, null, 2));
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
