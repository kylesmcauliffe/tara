import { Text, View } from "react-native";
import { SiteShell } from "../../components/SiteShell";
import { FramedButton } from "../../components/FramedButton";

export default function CheckoutCancel() {
  return (
    <SiteShell>
      <View className="px-4 py-20 items-center">
        <Text className="text-4xl italic text-charcoal mb-3">Checkout Canceled</Text>
        <Text className="text-charcoal/70 text-center mb-8 max-w-md">
          No charge was made. Your bag is still waiting when you’re ready.
        </Text>
        <FramedButton href="/shop">Return to Shop</FramedButton>
      </View>
    </SiteShell>
  );
}
