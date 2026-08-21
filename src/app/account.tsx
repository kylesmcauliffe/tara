import { Text, TextInput, View } from "react-native";
import { SiteShell } from "../components/SiteShell";
import { FramedButton } from "../components/FramedButton";

export default function AccountScreen() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-16 max-w-md self-center w-full items-center">
        <Text className="text-4xl italic text-charcoal mb-2">Account</Text>
        <Text className="text-charcoal/60 text-center mb-8">
          Sign in to view orders and saved addresses.
        </Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#8a8174"
          className="w-full border border-charcoal/30 px-4 py-3 mb-3 text-charcoal"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#8a8174"
          secureTextEntry
          className="w-full border border-charcoal/30 px-4 py-3 mb-6 text-charcoal"
        />
        <FramedButton>Sign In</FramedButton>
        <Text className="text-charcoal/50 text-xs mt-6 text-center">
          Identity placeholder — connect Netlify Identity when ready.
        </Text>
      </View>
    </SiteShell>
  );
}
