import { Text, View } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { SiteShell } from "../../components/SiteShell";
import { ProductCard } from "../../components/ProductCard";
import {
  collections,
  getCollection,
  productsByCollection,
} from "../../data/tara";
import { getTaraImage } from "../../data/images";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default function CollectionScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const collection = getCollection(slug ?? "");
  const list = productsByCollection(slug ?? "");

  if (!collection) {
    return (
      <SiteShell>
        <Text className="p-8 text-center">Collection not found.</Text>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <View className="h-72 relative">
        <Image
          source={getTaraImage(collection.imageKey)}
          style={{ width: "100%", height: "100%", position: "absolute" }}
          contentFit="cover"
        />
        <View className="absolute inset-0 bg-black/30 items-center justify-center px-4">
          <Text className="text-cream text-4xl italic text-center">
            {collection.title}
          </Text>
        </View>
      </View>
      <Text className="text-center text-charcoal/70 px-6 py-8 max-w-2xl self-center">
        {collection.description}
      </Text>
      <View className="px-4 md:px-8 pb-16 flex-row flex-wrap justify-center gap-4">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </View>
    </SiteShell>
  );
}
