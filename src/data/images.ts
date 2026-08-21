import type { ImageMetadata } from "astro";

import heroDresses from "@/images/tara/hero-dresses.png";
import heroKnitwear from "@/images/tara/hero-knitwear.png";
import collectionStrip from "@/images/tara/collection-strip.png";
import productMarin from "@/images/tara/product-marin.png";
import productDarcy from "@/images/tara/product-darcy.png";
import productHardy from "@/images/tara/product-hardy.png";
import productJulitta from "@/images/tara/product-julitta.png";
import shopLa from "@/images/tara/shop-la.png";
import shopMarin from "@/images/tara/shop-marin.png";
import shopNewport from "@/images/tara/shop-newport.png";
import categoryDresses from "@/images/tara/category-dresses.png";
import categoryKnitwear from "@/images/tara/category-knitwear.png";
import categoryTops from "@/images/tara/category-tops.png";

/** Swap these for Higgsfield JPG/PNG assets when ready (same keys). */
export const taraImages = {
  "hero-dresses": heroDresses,
  "hero-knitwear": heroKnitwear,
  "collection-strip": collectionStrip,
  "product-marin": productMarin,
  "product-darcy": productDarcy,
  "product-hardy": productHardy,
  "product-julitta": productJulitta,
  "shop-la": shopLa,
  "shop-marin": shopMarin,
  "shop-newport": shopNewport,
  "category-dresses": categoryDresses,
  "category-knitwear": categoryKnitwear,
  "category-tops": categoryTops,
} as const satisfies Record<string, ImageMetadata>;

export type TaraImageKey = keyof typeof taraImages;

export function getTaraImage(key: TaraImageKey): ImageMetadata {
  return taraImages[key];
}
