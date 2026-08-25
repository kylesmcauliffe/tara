import { Text, View, useWindowDimensions, Pressable } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { SiteShell } from "../components/SiteShell";
import { FramedButton } from "../components/FramedButton";
import { ExternalLink } from "../components/ExternalLink";
import { artist, featuredRelease } from "../data/tara";
import { getTaraImage } from "../data/images";

export default function HomeScreen() {
  const { height } = useWindowDimensions();
  const heroH = Math.max(520, Math.min(height * 0.85, 780));

  return (
    <SiteShell>
      <View className="relative w-full overflow-hidden bg-taupe" style={{ height: heroH }}>
        <Image
          source={getTaraImage("portrait-veil")}
          style={{ width: "100%", height: "100%", position: "absolute" }}
          contentFit="cover"
        />
        <View className="absolute inset-0 bg-black/30" />
        <View className="absolute inset-0 items-center justify-end pb-16 px-6">
          <Text className="text-cream text-[11px] tracking-[4px] uppercase mb-3">
            {featuredRelease.type} · {featuredRelease.year}
          </Text>
          <Text className="text-cream text-4xl md:text-5xl tracking-[4px] uppercase text-center mb-2 font-medium">
            {featuredRelease.title}
          </Text>
          <Text className="text-cream/90 text-lg italic text-center mb-8 max-w-md">
            {artist.tagline}
          </Text>
          <ExternalLink href={featuredRelease.listenUrl}>
            <View className="border border-cream px-6 py-3">
              <Text className="text-[11px] tracking-[2px] uppercase text-cream">
                Listen Now
              </Text>
            </View>
          </ExternalLink>
          <View className="mt-4">
            <Link href="/tour" asChild>
              <Pressable>
                <View className="border border-cream/80 px-6 py-3">
                  <Text className="text-[11px] tracking-[2px] uppercase text-cream">
                    Tour Dates
                  </Text>
                </View>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>

      <View className="px-4 md:px-8 py-20 items-center">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50 mb-3">
          Featured
        </Text>
        <Text className="text-3xl italic text-charcoal mb-4 text-center">
          {featuredRelease.title}
        </Text>
        <Text className="text-[13px] tracking-[1px] text-charcoal/70 text-center max-w-lg mb-8 leading-6">
          Stream the latest chapter—then find a night on the road.
        </Text>
        <View className="flex-row flex-wrap gap-3 justify-center">
          <ExternalLink href={featuredRelease.listenUrl}>
            <View className="border border-charcoal px-5 py-3">
              <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
                Stream / Download
              </Text>
            </View>
          </ExternalLink>
          <FramedButton href="/music">All Music</FramedButton>
        </View>
      </View>
    </SiteShell>
  );
}
