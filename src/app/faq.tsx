import { Text, View } from "react-native";
import { SiteShell } from "../components/SiteShell";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Standard US shipping is 3–5 business days. Express options are available at checkout.",
  },
  {
    q: "What is your return policy?",
    a: "Unworn items with tags may be returned within 30 days. Visit Returns to start a return.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes—duties and taxes may apply depending on destination.",
  },
];

export default function FaqScreen() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-16 max-w-2xl self-center w-full">
        <Text className="text-4xl italic text-charcoal text-center mb-10">FAQ</Text>
        {faqs.map((f) => (
          <View key={f.q} className="mb-8 border-b border-taupe pb-6">
            <Text className="text-[12px] tracking-[2px] uppercase text-charcoal mb-2">
              {f.q}
            </Text>
            <Text className="text-charcoal/70 leading-6">{f.a}</Text>
          </View>
        ))}
      </View>
    </SiteShell>
  );
}
