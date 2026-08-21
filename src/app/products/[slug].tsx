import { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { SiteShell } from "../../components/SiteShell";
import { FramedButton } from "../../components/FramedButton";
import { ProductCard } from "../../components/ProductCard";
import {
  getProduct,
  products,
  sizes,
  formatPrice,
} from "../../data/tara";
import { getTaraImage } from "../../data/images";
import { addToCart } from "../../lib/cart";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const product = getProduct(slug ?? "");
  const [size, setSize] = useState<string | null>(null);
  const [tab, setTab] = useState<"description" | "details" | "sizeFit">(
    "description",
  );
  const [added, setAdded] = useState(false);

  const look = useMemo(
    () =>
      (product?.completeTheLook ?? [])
        .map((s) => getProduct(s))
        .filter(Boolean),
    [product],
  );

  if (!product) {
    return (
      <SiteShell>
        <Text className="p-8 text-center text-charcoal">Product not found.</Text>
      </SiteShell>
    );
  }

  function onAdd() {
    if (!size || !product) return;
    addToCart({
      slug: product.slug,
      name: product.name,
      price: product.price,
      size,
      imageKey: product.imageKey,
    });
    setAdded(true);
  }

  const tabCopy =
    tab === "description"
      ? product.description
      : tab === "details"
        ? product.details
        : product.sizeFit;

  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-10 md:flex-row gap-10 max-w-6xl self-center w-full">
        <View className="flex-1 aspect-[3/4] bg-taupe overflow-hidden">
          <Image
            source={getTaraImage(product.imageKey)}
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
        </View>

        <View className="flex-1 md:pt-6">
          <Text className="text-[11px] tracking-[2px] uppercase text-charcoal/55">
            {product.subtitle}
          </Text>
          <Text className="text-3xl text-charcoal mt-2 tracking-wide">
            {product.name}
          </Text>
          <Text className="text-lg text-charcoal/80 mt-2">
            {formatPrice(product.price)}
          </Text>

          <Text className="text-[11px] tracking-[2px] uppercase text-charcoal/55 mt-8 mb-3">
            Select Size
          </Text>
          <View className="flex-row flex-wrap gap-2 mb-6">
            {sizes.map((s) => (
              <Pressable
                key={s}
                onPress={() => setSize(s)}
                className={`min-w-11 h-11 px-2 border items-center justify-center ${
                  size === s
                    ? "border-charcoal bg-charcoal"
                    : "border-charcoal/25"
                }`}
              >
                <Text
                  className={`text-[11px] tracking-wider ${
                    size === s ? "text-cream" : "text-charcoal"
                  }`}
                >
                  {s}
                </Text>
              </Pressable>
            ))}
          </View>

          <FramedButton onPress={size ? onAdd : undefined}>
            {added ? "Added to Bag" : size ? "Add to Bag" : "Select Size"}
          </FramedButton>

          <View className="flex-row gap-4 mt-10 mb-4">
            {(
              [
                ["description", "Description"],
                ["details", "Details"],
                ["sizeFit", "Size & Fit"],
              ] as const
            ).map(([key, label]) => (
              <Pressable key={key} onPress={() => setTab(key)}>
                <Text
                  className={`text-[11px] tracking-[2px] uppercase ${
                    tab === key ? "text-charcoal" : "text-charcoal/40"
                  }`}
                >
                  {label}
                </Text>
              </Pressable>
            ))}
          </View>
          <Text className="text-charcoal/80 leading-6">{tabCopy}</Text>
        </View>
      </View>

      {look.length > 0 ? (
        <View className="px-4 md:px-8 pb-16">
          <Text className="text-center text-3xl italic text-charcoal mb-8">
            Complete the Look
          </Text>
          <View className="flex-row flex-wrap justify-center gap-4">
            {look.map((p) => p && <ProductCard key={p.slug} product={p} />)}
          </View>
        </View>
      ) : null}
    </SiteShell>
  );
}
