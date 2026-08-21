import { Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { SiteShell } from "../../components/SiteShell";
import { ProductCard } from "../../components/ProductCard";
import { products, shopCategories, type TaraImageKey } from "../../data/tara";
import { getTaraImage } from "../../data/images";

const categoryImages: Record<string, TaraImageKey> = {
  dresses: "category-dresses",
  knitwear: "category-knitwear",
  tops: "category-tops",
  bottoms: "category-dresses",
  "finishing-touches": "category-tops",
};

export default function ShopIndex() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 pt-12 pb-6 items-center">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50">
          Shop
        </Text>
        <Text className="text-4xl italic text-charcoal mt-2">Clothing</Text>
      </View>

      <View className="px-4 md:px-8 pb-12 flex-row flex-wrap gap-4 justify-center">
        {shopCategories.map((cat) => (
          <Link key={cat.slug} href={`/shop/${cat.slug}`} asChild>
            <Pressable className="w-full max-w-xs aspect-[4/5] relative overflow-hidden">
              <Image
                source={getTaraImage(categoryImages[cat.slug] ?? "category-dresses")}
                style={{ width: "100%", height: "100%", position: "absolute" }}
                contentFit="cover"
              />
              <View className="absolute inset-0 bg-black/25 items-center justify-center">
                <Text className="text-cream text-3xl italic">{cat.label}</Text>
              </View>
            </Pressable>
          </Link>
        ))}
      </View>

      <View className="px-4 md:px-8 pb-16">
        <Text className="text-center text-3xl italic text-charcoal mb-10">
          All Pieces
        </Text>
        <View className="flex-row flex-wrap justify-center gap-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </View>
      </View>
    </SiteShell>
  );
}
