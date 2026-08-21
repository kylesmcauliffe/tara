import { Text, View, Linking } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { SiteShell } from "../../components/SiteShell";
import { FramedButton } from "../../components/FramedButton";
import { getShop, shops } from "../../data/tara";
import { getTaraImage } from "../../data/images";

export function generateStaticParams() {
  return shops.map((s) => ({ slug: s.slug }));
}

export default function ShopDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const shop = getShop(slug ?? "");

  if (!shop) {
    return (
      <SiteShell>
        <Text className="p-8 text-center">Shop not found.</Text>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <View className="md:flex-row min-h-[70vh]">
        <View className="flex-1 min-h-[360px]">
          <Image
            source={getTaraImage(shop.imageKey)}
            style={{ width: "100%", height: "100%", minHeight: 360 }}
            contentFit="cover"
          />
        </View>
        <View className="flex-1 bg-cream items-center justify-center px-8 py-16">
          <Text className="text-4xl italic text-charcoal">{shop.city}</Text>
          <Text className="text-charcoal/40 my-3">◆ ◆ ◆</Text>
          <Text className="text-[11px] tracking-[2px] uppercase text-charcoal text-center">
            {shop.name}
          </Text>
          <Text className="text-[11px] tracking-[2px] uppercase text-charcoal/70 text-center mt-2">
            {shop.address}
          </Text>
          <Text className="text-[11px] tracking-[2px] uppercase text-charcoal/70 text-center">
            {shop.cityLine}
          </Text>
          <Text className="text-[11px] tracking-[2px] uppercase text-charcoal mt-6">
            {shop.hours}
          </Text>
          <Text className="text-[11px] tracking-[2px] uppercase text-charcoal/70 mt-2">
            {shop.email}
          </Text>
          <Text className="text-[11px] tracking-[2px] uppercase text-charcoal/70">
            {shop.phone}
          </Text>
          <View className="mt-8">
            <FramedButton onPress={() => Linking.openURL(shop.mapsUrl)}>
              Get Directions
            </FramedButton>
          </View>
        </View>
      </View>
    </SiteShell>
  );
}
