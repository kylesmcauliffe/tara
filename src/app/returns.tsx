import { Text, View } from "react-native";
import { SiteShell } from "../components/SiteShell";
import { FramedButton } from "../components/FramedButton";

export default function ReturnsScreen() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-16 max-w-xl self-center w-full items-center">
        <Text className="text-4xl italic text-charcoal mb-3">Returns</Text>
        <Text className="text-charcoal/70 text-center leading-6 mb-8">
          Unworn pieces with tags may be returned within 30 days of delivery.
          Final sale and personalized items are excluded. Start a return with
          your order number and we’ll email a prepaid label when eligible.
        </Text>
        <FramedButton href="/contact">Start a Return</FramedButton>
      </View>
    </SiteShell>
  );
}
