import { Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { SiteShell } from "../../components/SiteShell";
import { FramedButton } from "../../components/FramedButton";
import { shops } from "../../data/tara";
import { getTaraImage } from "../../data/images";

export default function ShopsIndex() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-12 items-center">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50">
          Discover
        </Text>
        <Text className="text-4xl italic text-charcoal mt-2">Our Shops</Text>
      </View>
      <View className="px-4 md:px-8 pb-16 flex-row flex-wrap justify-center gap-8">
        {shops.map((shop) => (
          <View key={shop.slug} className="w-full max-w-sm items-center">
            <Link href={`/shops/${shop.slug}`} asChild>
              <Pressable className="w-full aspect-[3/4] bg-taupe overflow-hidden mb-4">
                <Image
                  source={getTaraImage(shop.imageKey)}
                  style={{ width: "100%", height: "100%" }}
                  contentFit="cover"
                />
              </Pressable>
            </Link>
            <Text className="text-2xl italic text-charcoal">{shop.city}</Text>
            <Text className="text-charcoal/40 my-2">◆ ◆ ◆</Text>
            <Text className="text-[11px] tracking-[2px] uppercase text-charcoal text-center">
              {shop.name}
            </Text>
            <Text className="text-[11px] tracking-[1px] uppercase text-charcoal/70 text-center mt-1">
              {shop.address}
            </Text>
            <Text className="text-[11px] tracking-[1px] uppercase text-charcoal/70 text-center">
              {shop.cityLine}
            </Text>
            <View className="mt-4">
              <FramedButton href={`/shops/${shop.slug}`}>Store Details</FramedButton>
            </View>
          </View>
        ))}
      </View>
    </SiteShell>
  );
}
