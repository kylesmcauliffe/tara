import { Text, View } from "react-native";
import { Image } from "expo-image";
import { SiteShell } from "../components/SiteShell";
import { ExternalLink } from "../components/ExternalLink";
import { videos } from "../data/tara";
import { getTaraImage } from "../data/images";

export default function VideosScreen() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-14 items-center">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50 mb-2">
          Watch
        </Text>
        <Text className="text-4xl italic text-charcoal mb-12">Videos</Text>

        <View className="flex-row flex-wrap justify-center gap-6 max-w-5xl w-full">
          {videos.map((v) => (
            <ExternalLink key={v.slug} href={v.url} className="w-[300px]">
              <View className="w-full">
                <View className="w-full aspect-video bg-taupe overflow-hidden relative mb-3">
                  <Image
                    source={getTaraImage(v.imageKey)}
                    style={{ width: "100%", height: "100%" }}
                    contentFit="cover"
                  />
                  <View className="absolute inset-0 items-center justify-center bg-black/20">
                    <View className="w-12 h-12 rounded-full border border-cream items-center justify-center">
                      <Text className="text-cream text-lg ml-0.5">▶</Text>
                    </View>
                  </View>
                </View>
                <Text className="text-[12px] tracking-[2px] uppercase text-charcoal text-center">
                  {v.title}
                </Text>
                {v.subtitle ? (
                  <Text className="text-[10px] tracking-[1px] uppercase text-charcoal/50 text-center mt-1">
                    {v.subtitle}
                  </Text>
                ) : null}
              </View>
            </ExternalLink>
          ))}
        </View>
      </View>
    </SiteShell>
  );
}
