import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { formatPrice, type Product } from "../data/tara";
import { getTaraImage } from "../data/images";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} asChild>
      <Pressable className="flex-1 mb-8" style={{ minWidth: "45%", maxWidth: 320 }}>
        <View className="aspect-[3/4] bg-taupe overflow-hidden mb-3">
          <Image
            source={getTaraImage(product.imageKey)}
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
        </View>
        <Text className="text-[11px] tracking-[2px] uppercase text-charcoal text-center">
          {product.name}
        </Text>
        <Text className="text-[11px] text-charcoal/60 text-center mt-1 italic">
          {product.subtitle}
        </Text>
        <Text className="text-sm text-charcoal text-center mt-1">
          {formatPrice(product.price)}
        </Text>
      </Pressable>
    </Link>
  );
}
