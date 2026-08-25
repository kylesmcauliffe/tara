import { Text, View } from "react-native";
import { Image } from "expo-image";
import { SiteShell } from "../components/SiteShell";
import { FramedButton } from "../components/FramedButton";
import { artist } from "../data/tara";
import { getTaraImage } from "../data/images";

export default function InfoScreen() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-14 items-center">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50 mb-2">
          About
        </Text>
        <Text className="text-4xl italic text-charcoal mb-12">Info</Text>

        <View className="flex-row flex-wrap justify-center gap-10 max-w-4xl w-full mb-12">
          {(["portrait-smile", "portrait-joy", "portrait-veil"] as const).map(
            (key) => (
              <View
                key={key}
                className="w-[200px] aspect-[3/4] bg-taupe overflow-hidden"
              >
                <Image
                  source={getTaraImage(key)}
                  style={{ width: "100%", height: "100%" }}
                  contentFit="cover"
                />
              </View>
            ),
          )}
        </View>

        <Text className="text-2xl tracking-[4px] uppercase text-charcoal mb-6">
          {artist.fullName}
        </Text>
        <Text className="text-[15px] leading-7 text-charcoal/80 text-center max-w-xl mb-10">
          {artist.bio}
        </Text>

        <View className="flex-row flex-wrap gap-3 justify-center">
          <FramedButton href="/newsletter">Sign Up</FramedButton>
          <FramedButton href="/contact">Contact / Booking</FramedButton>
        </View>
      </View>
    </SiteShell>
  );
}
