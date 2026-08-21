/**
 * Tara catalog data.
 * Image keys map to files under src/images/tara/ (via data/images.ts).
 */

import type { TaraImageKey } from "./images";

export const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"] as const;

export type ProductCategory =
  | "dresses"
  | "knitwear"
  | "tops"
  | "bottoms"
  | "finishing-touches";

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  category: ProductCategory;
  description: string;
  details: string;
  sizeFit: string;
  imageKey: TaraImageKey;
  collectionSlugs?: string[];
  completeTheLook?: string[];
};

export const shopCategories = [
  { slug: "dresses", label: "Dresses", href: "/shop/dresses" },
  { slug: "knitwear", label: "Knitwear", href: "/shop/knitwear" },
  { slug: "tops", label: "Tops", href: "/shop/tops" },
  { slug: "bottoms", label: "Bottoms", href: "/shop/bottoms" },
  {
    slug: "finishing-touches",
    label: "Finishing Touches",
    href: "/shop/finishing-touches",
  },
] as const;

export const products: Product[] = [
  {
    slug: "marin-dress",
    name: "Marin Dress",
    subtitle: "Ivory Lace Trim",
    price: 498,
    category: "dresses",
    description:
      "A softly structured midi with lace-trimmed bodice and fluid skirt. Cut from washed cotton for ease from morning through evening.",
    details:
      "100% cotton. Lined bodice. Hidden back zip. Dry clean recommended. Made with care.",
    sizeFit:
      "Fits true to size. Model is 5'9\" and wears S. Midi length hits mid-calf.",
    imageKey: "product-marin",
    collectionSlugs: ["fall-chapter-one"],
    completeTheLook: ["darcy-cardigan", "silk-scarf"],
  },
  {
    slug: "julitta-dress",
    name: "Julitta Dress",
    subtitle: "Equestrian Brown with Cream Lace",
    price: 698,
    category: "dresses",
    description:
      "An heirloom silhouette with cream lace collar and fitted waist. Designed for occasions that linger.",
    details: "Cotton blend with lace. Dry clean recommended.",
    sizeFit:
      "Slightly fitted through the waist. Size up for a more relaxed fit. Model wears S.",
    imageKey: "product-julitta",
    collectionSlugs: ["fall-chapter-one"],
    completeTheLook: ["cashmere-wrap", "marina-skirt"],
  },
  {
    slug: "eloise-dress",
    name: "Eloise Dress",
    subtitle: "Soft Daylight Cotton",
    price: 548,
    category: "dresses",
    description:
      "A gathered bodice and easy skirt in washed cotton. Light enough for warm afternoons, polished enough for evening.",
    details: "100% cotton. Side zip. Machine wash cold, hang dry.",
    sizeFit: "Relaxed through the torso. Model is 5'8\" and wears S.",
    imageKey: "category-dresses",
    collectionSlugs: ["summer-chapter-two"],
    completeTheLook: ["celeste-blouse", "linen-trouser"],
  },
  {
    slug: "darcy-cardigan",
    name: "Darcy Cardigan",
    subtitle: "Charcoal Melange",
    price: 358,
    category: "knitwear",
    description:
      "A relaxed open-front cardigan in a fine merino blend. Soft shoulders and a gentle drape for layering through the season.",
    details: "70% merino wool, 30% nylon. Hand wash cold. Dry flat.",
    sizeFit: "Oversized fit. Size down for a closer silhouette. Model wears S.",
    imageKey: "product-darcy",
    collectionSlugs: ["fall-chapter-one"],
    completeTheLook: ["marin-dress", "linen-trouser"],
  },
  {
    slug: "willow-sweater",
    name: "Willow Sweater",
    subtitle: "Cream Rib",
    price: 328,
    category: "knitwear",
    description:
      "A fine-rib crewneck with a soft hand and clean line. Meant for layering under coats or wearing alone.",
    details: "80% wool, 20% cashmere. Hand wash cold. Dry flat.",
    sizeFit: "True to size with a gentle stretch. Model wears S.",
    imageKey: "category-knitwear",
    collectionSlugs: ["fall-chapter-one"],
    completeTheLook: ["marina-skirt", "silk-scarf"],
  },
  {
    slug: "cashmere-wrap",
    name: "Cashmere Wrap",
    subtitle: "Heather Grey",
    price: 428,
    category: "knitwear",
    description:
      "A long wrap in pure cashmere—light enough to travel, warm enough for cool evenings.",
    details: "100% cashmere. Dry clean only.",
    sizeFit: "One generous size. Drapes easily over shoulders.",
    imageKey: "hero-knitwear",
    collectionSlugs: ["fall-chapter-one", "summer-chapter-two"],
    completeTheLook: ["julitta-dress", "hardy-top"],
  },
  {
    slug: "hardy-top",
    name: "Hardy Top",
    subtitle: "Crème Windswept Meadow",
    price: 298,
    category: "tops",
    description:
      "A delicate blouse with gathered yoke and mother-of-pearl buttons. Lightweight and luminous against skin.",
    details: "100% silk. Dry clean only.",
    sizeFit: "Fitted through the shoulders. Model wears S.",
    imageKey: "product-hardy",
    collectionSlugs: ["summer-chapter-two"],
    completeTheLook: ["marina-skirt", "silk-scarf"],
  },
  {
    slug: "celeste-blouse",
    name: "Celeste Blouse",
    subtitle: "Ivory Poplin",
    price: 268,
    category: "tops",
    description:
      "Crisp cotton poplin with a softly gathered neckline. Everyday polish without effort.",
    details: "100% cotton. Machine wash cold. Press lightly.",
    sizeFit: "Relaxed fit. Model is 5'9\" and wears S.",
    imageKey: "category-tops",
    collectionSlugs: ["summer-chapter-two"],
    completeTheLook: ["linen-trouser", "darcy-cardigan"],
  },
  {
    slug: "linen-trouser",
    name: "Linen Trouser",
    subtitle: "Sand Wash",
    price: 318,
    category: "bottoms",
    description:
      "Wide-leg linen trousers with a soft crease and easy rise. Cool and unfussy for warmer days.",
    details: "100% linen. Dry clean recommended. Softens with wear.",
    sizeFit: "High rise, wide leg. Model wears S. Inseam approximately 30\".",
    imageKey: "hero-dresses",
    collectionSlugs: ["summer-chapter-two"],
    completeTheLook: ["celeste-blouse", "hardy-top"],
  },
  {
    slug: "marina-skirt",
    name: "Marina Skirt",
    subtitle: "Soft Plum Wool",
    price: 348,
    category: "bottoms",
    description:
      "A midi A-line skirt with quiet structure. Pairs as easily with knits as with silk blouses.",
    details: "Wool blend. Hidden side zip. Dry clean only.",
    sizeFit: "Fitted at the waist, flares gently. Model wears S.",
    imageKey: "collection-strip",
    collectionSlugs: ["fall-chapter-one"],
    completeTheLook: ["willow-sweater", "hardy-top"],
  },
  {
    slug: "silk-scarf",
    name: "Silk Scarf",
    subtitle: "Garden Print",
    price: 148,
    category: "finishing-touches",
    description:
      "A lightweight silk square with a muted garden print. Tie at the neck, bag, or hair.",
    details: "100% silk. Hand wash cold. Press on low.",
    sizeFit: "Approximately 90 × 90 cm. One size.",
    imageKey: "category-tops",
    collectionSlugs: ["summer-chapter-two"],
    completeTheLook: ["marin-dress", "hardy-top"],
  },
  {
    slug: "pearl-clip",
    name: "Pearl Clip",
    subtitle: "Cream Baroque",
    price: 88,
    category: "finishing-touches",
    description:
      "A single baroque pearl on a slim gold-tone clip. A small finishing note for evening or day.",
    details: "Gold-tone metal, faux pearl. Wipe clean.",
    sizeFit: "One size. Secure on hair or lapel.",
    imageKey: "category-dresses",
    collectionSlugs: ["fall-chapter-one", "summer-chapter-two"],
    completeTheLook: ["julitta-dress", "eloise-dress"],
  },
];

export const collections = [
  {
    slug: "fall-chapter-one",
    title: "Fall Chapter One",
    description:
      "Soft structure, quiet color, and pieces meant to be worn often—knits, dresses, and finishing notes for cooler mornings.",
    imageKey: "collection-strip" as TaraImageKey,
  },
  {
    slug: "summer-chapter-two",
    title: "Summer Chapter Two",
    description:
      "Lighter hands and open days—cotton dresses, silk tops, linen trousers, and the small pieces that finish a look.",
    imageKey: "hero-dresses" as TaraImageKey,
  },
] as const;

export const shops = [
  {
    slug: "los-angeles",
    city: "Los Angeles",
    name: "Brentwood Country Mart",
    address: "225 26TH STREET",
    cityLine: "SANTA MONICA, CA 90402",
    hours: "MON–SAT 10–6 · SUN 11–5",
    phone: "(310) 555-0142",
    email: "la@tara.example",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=225+26th+Street+Santa+Monica+CA",
    imageKey: "shop-la" as const,
  },
  {
    slug: "marin",
    city: "Marin",
    name: "Marin Country Mart",
    address: "2255 BRIDGEWAY",
    cityLine: "SAUSALITO, CA 94965",
    hours: "MON–SAT 10–6 · SUN 11–5",
    phone: "(415) 555-0198",
    email: "marin@tara.example",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=2255+Bridgeway+Sausalito+CA",
    imageKey: "shop-marin" as const,
  },
  {
    slug: "newport",
    city: "Newport",
    name: "Lido Marina Village",
    address: "3400 VIA OPORTÓ",
    cityLine: "NEWPORT BEACH, CA 92663",
    hours: "MON–SAT 10–6 · SUN 11–5",
    phone: "(949) 555-0176",
    email: "newport@tara.example",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=3400+Via+Oporto+Newport+Beach+CA",
    imageKey: "shop-newport" as const,
  },
] as const;

export const giftCards = [
  {
    slug: "digital-100",
    name: "Digital Gift Card",
    amount: 100,
    type: "digital" as const,
    description: "Delivered by email. Redeemable online and in our shops.",
  },
  {
    slug: "digital-250",
    name: "Digital Gift Card",
    amount: 250,
    type: "digital" as const,
    description: "Delivered by email. Redeemable online and in our shops.",
  },
  {
    slug: "physical",
    name: "Physical Gift Card",
    amount: 150,
    type: "physical" as const,
    description:
      "A letterpressed card in a cream envelope. Ships free within the US.",
  },
] as const;

export function formatPrice(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getShop(slug: string) {
  return shops.find((s) => s.slug === slug);
}

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function productsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function productsByCollection(slug: string) {
  return products.filter((p) => p.collectionSlugs?.includes(slug));
}
