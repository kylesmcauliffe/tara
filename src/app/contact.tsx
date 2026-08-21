import { Text, TextInput, View } from "react-native";
import { SiteShell } from "../components/SiteShell";
import { FramedButton } from "../components/FramedButton";

export default function ContactScreen() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-16 max-w-md self-center w-full">
        <Text className="text-4xl italic text-charcoal text-center mb-3">
          Contact
        </Text>
        <Text className="text-charcoal/60 text-center mb-8">
          hello@tara.example · We reply within one business day.
        </Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#8a8174"
          className="border border-charcoal/30 px-4 py-3 mb-3 text-charcoal"
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#8a8174"
          className="border border-charcoal/30 px-4 py-3 mb-3 text-charcoal"
        />
        <TextInput
          placeholder="Message"
          placeholderTextColor="#8a8174"
          multiline
          numberOfLines={5}
          className="border border-charcoal/30 px-4 py-3 mb-6 text-charcoal min-h-[120px]"
        />
        <FramedButton>Send</FramedButton>
      </View>
    </SiteShell>
  );
}
