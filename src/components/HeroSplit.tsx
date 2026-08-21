import { Text, View, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { getTaraImage } from "../data/images";
import type { TaraImageKey } from "../data/tara";

type Panel = {
  title: string;
  href: string;
  imageKey: TaraImageKey;
};

export function HeroSplit({ left, right }: { left: Panel; right: Panel }) {
  const { width } = useWindowDimensions();
  const stacked = width < 768;

  const PanelView = ({ panel }: { panel: Panel }) => (
    <Link href={panel.href as any} asChild>
      <Pressable className="relative overflow-hidden" style={{ flex: 1, minHeight: stacked ? 360 : 560 }}>
        <Image
          source={getTaraImage(panel.imageKey)}
          style={{ width: "100%", height: "100%", position: "absolute" }}
          contentFit="cover"
        />
        <View className="absolute inset-0 bg-black/20 items-center justify-center">
          <View className="border border-cream px-8 py-3">
            <Text className="text-cream text-[12px] tracking-[3px] uppercase">
              {panel.title}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );

  return (
    <View className={stacked ? "flex-col" : "flex-row"} style={{ width: "100%" }}>
      <PanelView panel={left} />
      <PanelView panel={right} />
    </View>
  );
}
