import { Text, View, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { SiteShell } from "../components/SiteShell";
import { galleryImages } from "../data/tara";
import { getTaraImage } from "../data/images";

export default function GalleryScreen() {
  const { width } = useWindowDimensions();
  const cols = width >= 1024 ? 3 : width >= 640 ? 2 : 1;
  const gap = 12;
  const pad = width >= 768 ? 32 : 16;
  const colW = (width - pad * 2 - gap * (cols - 1)) / cols;

  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-14 items-center">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50 mb-2">
          Stills
        </Text>
        <Text className="text-4xl italic text-charcoal mb-12">Gallery</Text>

        <View
          className="flex-row flex-wrap w-full max-w-5xl"
          style={{ gap }}
        >
          {galleryImages.map((item, i) => {
            const tall = i % 5 === 0 || i % 5 === 3;
            return (
              <View
                key={`${item.key}-${i}`}
                className="bg-taupe overflow-hidden"
                style={{
                  width: colW,
                  height: tall ? colW * 1.35 : colW * 0.95,
                }}
              >
                <Image
                  source={getTaraImage(item.key)}
                  style={{ width: "100%", height: "100%" }}
                  contentFit="cover"
                  accessibilityLabel={item.alt}
                />
              </View>
            );
          })}
        </View>
      </View>
    </SiteShell>
  );
}
