import { Text, View } from "react-native";
import { SiteShell } from "../../components/SiteShell";
import { FramedButton } from "../../components/FramedButton";

export default function CheckoutSuccess() {
  return (
    <SiteShell>
      <View className="px-4 py-20 items-center">
        <Text className="text-4xl italic text-charcoal mb-3">Thank You</Text>
        <Text className="text-charcoal/70 text-center mb-8 max-w-md">
          Your order is confirmed. A receipt is on its way to your email.
        </Text>
        <FramedButton href="/shop">Continue Shopping</FramedButton>
      </View>
    </SiteShell>
  );
}
