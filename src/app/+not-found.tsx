import { Text, View } from "react-native";
import { SiteShell } from "../components/SiteShell";
import { FramedButton } from "../components/FramedButton";

export default function NotFound() {
  return (
    <SiteShell>
      <View className="px-4 py-20 items-center">
        <Text className="text-4xl italic text-charcoal mb-3">Page Not Found</Text>
        <FramedButton href="/">Return Home</FramedButton>
      </View>
    </SiteShell>
  );
}
