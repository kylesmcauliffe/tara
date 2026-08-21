import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { SiteShell } from "../components/SiteShell";

const links = [
  { href: "/track-order", label: "Track Your Order" },
  { href: "/returns", label: "Start a Return" },
  { href: "/gift-cards", label: "Gift Cards" },
  { href: "/shops", label: "Find a Shop" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export default function AssistanceScreen() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-16 items-center">
        <Text className="text-4xl italic text-charcoal mb-10">Assistance</Text>
        <View className="gap-3 items-center">
          {links.map((l) => (
            <Link key={l.href} href={l.href as any} asChild>
              <Pressable>
                <Text className="text-xl italic text-charcoal">{l.label}</Text>
              </Pressable>
            </Link>
          ))}
        </View>
      </View>
    </SiteShell>
  );
}
