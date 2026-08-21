import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartDrawer } from "./CartDrawer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <View className="flex-1 bg-cream">
      <Header onOpenCart={() => setCartOpen(true)} />
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1">{children}</View>
        <Footer />
      </ScrollView>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </View>
  );
}
