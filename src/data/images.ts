import type { ImageSourcePropType } from "react-native";
import type { TaraImageKey } from "./tara";

export const taraImages: Record<TaraImageKey, ImageSourcePropType> = {
  "hero-dresses": require("../../assets/tara/hero-dresses.png"),
  "hero-knitwear": require("../../assets/tara/hero-knitwear.png"),
  "collection-strip": require("../../assets/tara/collection-strip.png"),
  "product-marin": require("../../assets/tara/product-marin.png"),
  "product-darcy": require("../../assets/tara/product-darcy.png"),
  "product-hardy": require("../../assets/tara/product-hardy.png"),
  "product-julitta": require("../../assets/tara/product-julitta.png"),
  "shop-la": require("../../assets/tara/shop-la.png"),
  "shop-marin": require("../../assets/tara/shop-marin.png"),
  "shop-newport": require("../../assets/tara/shop-newport.png"),
  "category-dresses": require("../../assets/tara/category-dresses.png"),
  "category-knitwear": require("../../assets/tara/category-knitwear.png"),
  "category-tops": require("../../assets/tara/category-tops.png"),
};

export function getTaraImage(key: TaraImageKey): ImageSourcePropType {
  return taraImages[key];
}
