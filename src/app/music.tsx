import { Text, View } from "react-native";
import { Image } from "expo-image";
import { SiteShell } from "../components/SiteShell";
import { ExternalLink } from "../components/ExternalLink";
import { releases } from "../data/tara";
import { getTaraImage } from "../data/images";

export default function MusicScreen() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-14 items-center">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50 mb-2">
          Discography
        </Text>
        <Text className="text-4xl italic text-charcoal mb-12">Music</Text>

        <View className="flex-row flex-wrap justify-center gap-8 max-w-5xl w-full">
          {releases.map((r) => (
            <View key={r.slug} className="w-[260px] items-center">
              <View className="w-full aspect-square bg-taupe overflow-hidden mb-4">
                <Image
                  source={getTaraImage(r.imageKey)}
                  style={{ width: "100%", height: "100%" }}
                  contentFit="cover"
                />
              </View>
              <Text className="text-[10px] tracking-[2px] uppercase text-charcoal/50 mb-1">
                {r.type} · {r.year}
              </Text>
              <Text className="text-lg text-charcoal mb-4 text-center tracking-[1px]">
                {r.title}
              </Text>
              <ExternalLink href={r.listenUrl}>
                <View className="border border-charcoal px-4 py-2.5">
                  <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
                    Stream / Download
                  </Text>
                </View>
              </ExternalLink>
            </View>
          ))}
        </View>
      </View>
    </SiteShell>
  );
}
