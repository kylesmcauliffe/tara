import { Text, TextInput, View } from "react-native";
import { SiteShell } from "../components/SiteShell";
import { FramedButton } from "../components/FramedButton";

export default function TrackOrderScreen() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-16 max-w-md self-center w-full items-center">
        <Text className="text-4xl italic text-charcoal mb-3">Track Order</Text>
        <Text className="text-charcoal/60 text-center mb-8">
          Enter your order number and email to see shipping status.
        </Text>
        <TextInput
          placeholder="Order number"
          placeholderTextColor="#8a8174"
          className="w-full border border-charcoal/30 px-4 py-3 mb-3 text-charcoal"
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#8a8174"
          className="w-full border border-charcoal/30 px-4 py-3 mb-6 text-charcoal"
        />
        <FramedButton>Track</FramedButton>
      </View>
    </SiteShell>
  );
}
