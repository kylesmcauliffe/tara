import "../global.css";

import { useFonts, CormorantGaramond_400Regular, CormorantGaramond_500Medium, CormorantGaramond_400Regular_Italic } from "@expo-google-fonts/cormorant-garamond";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export default function RootLayout() {
  const [loaded] = useFonts({
    CormorantGaramond_400Regular,
    CormorantGaramond_500Medium,
    CormorantGaramond_400Regular_Italic,
  });

  if (!loaded) {
    return (
      <View className="flex-1 bg-cream items-center justify-center">
        <Text className="tracking-[4px] uppercase text-charcoal">Tara</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#f7f4ee" },
        }}
      />
    </>
  );
}
