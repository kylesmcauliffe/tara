# Tara

DÔEN-inspired fashion boutique for **Tara** — Astro site with shop, collections, PDP, shops, journal, gift cards, account/assistance flows, bag drawer, and Stripe Checkout.

## Brand hubs

- **Notion:** [Tara — Brand & Site Hub](https://app.notion.com/p/3c393b93b7b7815aa7d0e632d2b294f3)
- **Figma:** [Tara — Fashion Boutique](https://www.figma.com/design/g6Wvrl22i5jwNU5J3ibT3J)
- **Canva logo:** [edit](https://www.canva.com/d/a2WNoLZSdg6Mee_)
- **Canva Instagram:** [edit](https://www.canva.com/d/e5cA0FWdyyPUdMR)
- **Higgsfield prompts:** [`docs/higgsfield-prompts.md`](docs/higgsfield-prompts.md) (re-auth Higgsfield MCP, then regenerate into `src/images/tara/`)

## Requirements

- Node.js 18 or 20 (LTS recommended)
- npm

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Astro local server |
| `npx netlify dev` | Astro + Netlify functions (needed for Stripe checkout) |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build |

## Environment variables

Copy `.env.example` → `.env`:

```bash
STRIPE_SECRET_KEY=sk_test_...
PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

Checkout posts cart items to `/.netlify/functions/create-checkout`.

## Routes

`/`, `/shop`, `/shop/[category]`, `/collections`, `/collections/[slug]`, `/products/[slug]`, `/shops`, `/shops/[slug]`, `/journal`, `/gift-cards`, `/account`, `/assistance`, `/faq`, `/contact`, `/track-order`, `/returns`, `/checkout/success`, `/checkout/cancel`

## Content

Journal markdown: `src/content/journal/` · Catalog: `src/data/tara.ts` · Images: `src/images/tara/`
