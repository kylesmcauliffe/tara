import { Text, View } from "react-native";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { Image } from "expo-image";
import { SiteShell } from "../components/SiteShell";
import { HeroSplit } from "../components/HeroSplit";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/tara";
import { getTaraImage } from "../data/images";

export default function HomeScreen() {
  const featured = products.slice(0, 4);

  return (
    <SiteShell>
      <HeroSplit
        left={{
          title: "Dresses",
          href: "/shop/dresses",
          imageKey: "hero-dresses",
        }}
        right={{
          title: "Knitwear",
          href: "/shop/knitwear",
          imageKey: "hero-knitwear",
        }}
      />

      <Link href="/collections/fall-chapter-one" asChild>
        <Pressable className="relative h-64 md:h-80 overflow-hidden">
          <Image
            source={getTaraImage("collection-strip")}
            style={{ width: "100%", height: "100%", position: "absolute" }}
            contentFit="cover"
          />
          <View className="absolute inset-0 bg-black/25 items-center justify-center">
            <Text className="text-cream text-3xl italic mb-2">Fall Chapter One</Text>
            <Text className="text-cream text-[11px] tracking-[3px] uppercase">
              Shop the Collection
            </Text>
          </View>
        </Pressable>
      </Link>

      <View className="px-4 md:px-8 py-16">
        <Text className="text-center text-[11px] tracking-[3px] uppercase text-charcoal/50 mb-2">
          New Arrivals
        </Text>
        <Text className="text-center text-3xl italic text-charcoal mb-10">
          Soft Structure
        </Text>
        <View className="flex-row flex-wrap justify-center gap-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </View>
      </View>
    </SiteShell>
  );
}
