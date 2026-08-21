import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SiteShell } from "../../components/SiteShell";
import { ProductCard } from "../../components/ProductCard";
import { productsByCategory, shopCategories } from "../../data/tara";

export function generateStaticParams() {
  return shopCategories.map((c) => ({ category: c.slug }));
}

export default function ShopCategoryScreen() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const cat = shopCategories.find((c) => c.slug === category);
  const list = productsByCategory(category ?? "");

  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-12 items-center">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50">
          Shop
        </Text>
        <Text className="text-4xl italic text-charcoal mt-2">
          {cat?.label ?? category}
        </Text>
      </View>
      <View className="px-4 md:px-8 pb-16 flex-row flex-wrap justify-center gap-4">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </View>
    </SiteShell>
  );
}
