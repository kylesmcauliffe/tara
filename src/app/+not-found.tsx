import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Not found" }} />
      <View className="flex-1 bg-cream items-center justify-center px-6">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50 mb-2">
          404
        </Text>
        <Text className="text-3xl italic text-charcoal mb-8">Page not found</Text>
        <Link href="/" asChild>
          <Pressable className="border border-charcoal px-5 py-3">
            <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
              Home
            </Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}
