import { Link } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

const columns = [
  {
    title: "Help",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Shipping & Returns", href: "/returns" },
      { label: "FAQ", href: "/faq" },
      { label: "Track Order", href: "/track-order" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Shops", href: "/shops" },
      { label: "Journal", href: "/journal" },
      { label: "Gift Cards", href: "/gift-cards" },
      { label: "Assistance", href: "/assistance" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/assistance" },
      { label: "Terms", href: "/assistance" },
      { label: "Accessibility", href: "/assistance" },
    ],
  },
];

export function Footer() {
  return (
    <View className="mt-auto border-t border-taupe bg-cream px-4 md:px-8 py-16">
      <View className="max-w-md self-center w-full items-center mb-16">
        <Text className="text-3xl italic text-charcoal mb-3">Stay in Touch</Text>
        <Text className="text-[11px] tracking-[2px] uppercase text-charcoal/60 text-center mb-6">
          Notes on new arrivals, shops, and seasonal chapters.
        </Text>
        <View className="flex-row w-full gap-2">
          <TextInput
            placeholder="Email address"
            placeholderTextColor="#8a8174"
            className="flex-1 border border-charcoal/40 px-4 py-3 text-charcoal"
          />
          <Pressable className="border border-charcoal px-4 py-3 justify-center">
            <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
              Subscribe
            </Text>
          </Pressable>
        </View>
      </View>

      <View className="flex-row flex-wrap justify-center gap-10 mb-16">
        {columns.map((col) => (
          <View key={col.title} className="min-w-[140px]">
            <Text className="text-[10px] tracking-[2px] uppercase text-charcoal/50 mb-3">
              {col.title}
            </Text>
            {col.links.map((link) => (
              <Link key={link.href + link.label} href={link.href as any} asChild>
                <Pressable className="py-1">
                  <Text className="text-[12px] tracking-[1px] uppercase text-charcoal">
                    {link.label}
                  </Text>
                </Pressable>
              </Link>
            ))}
          </View>
        ))}
      </View>

      <View className="items-center gap-2">
        <Text className="text-xl tracking-[6px] uppercase text-charcoal/80">
          Tara
        </Text>
        <Text className="text-[10px] tracking-[2px] uppercase text-charcoal/40">
          © {new Date().getFullYear()} Tara
        </Text>
      </View>
    </View>
  );
}
