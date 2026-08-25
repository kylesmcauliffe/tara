import type { ImageSourcePropType } from "react-native";
import type { TaraImageKey } from "./tara";

export const taraImages: Record<TaraImageKey, ImageSourcePropType> = {
  "hero-dresses": require("../../assets/tara/hero-dresses.webp"),
  "hero-knitwear": require("../../assets/tara/hero-knitwear.webp"),
  "collection-strip": require("../../assets/tara/collection-strip.webp"),
  "product-marin": require("../../assets/tara/product-marin.webp"),
  "product-darcy": require("../../assets/tara/product-darcy.webp"),
  "product-hardy": require("../../assets/tara/product-hardy.webp"),
  "product-julitta": require("../../assets/tara/product-julitta.webp"),
  "shop-la": require("../../assets/tara/shop-la.webp"),
  "shop-marin": require("../../assets/tara/shop-marin.webp"),
  "shop-newport": require("../../assets/tara/shop-newport.webp"),
  "category-dresses": require("../../assets/tara/category-dresses.webp"),
  "category-knitwear": require("../../assets/tara/category-knitwear.webp"),
  "category-tops": require("../../assets/tara/category-tops.webp"),
  "portrait-joy": require("../../assets/tara/portrait-joy.webp"),
  "portrait-smile": require("../../assets/tara/portrait-smile.webp"),
  "portrait-veil": require("../../assets/tara/portrait-veil.webp"),
};

export function getTaraImage(key: TaraImageKey): ImageSourcePropType {
  return taraImages[key];
}
