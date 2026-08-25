import { ScrollView, View } from "react-native";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1 bg-cream">
      <Header />
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1">{children}</View>
        <Footer />
      </ScrollView>
    </View>
  );
}
