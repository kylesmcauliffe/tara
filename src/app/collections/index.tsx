import { Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { SiteShell } from "../../components/SiteShell";
import { collections } from "../../data/tara";
import { getTaraImage } from "../../data/images";

export default function CollectionsIndex() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-12 items-center">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50">
          Collections
        </Text>
        <Text className="text-4xl italic text-charcoal mt-2">Library</Text>
      </View>
      <View className="px-4 md:px-8 pb-16 gap-8 max-w-4xl self-center w-full">
        {collections.map((c) => (
          <Link key={c.slug} href={`/collections/${c.slug}`} asChild>
            <Pressable className="overflow-hidden">
              <View className="h-56 bg-taupe">
                <Image
                  source={getTaraImage(c.imageKey)}
                  style={{ width: "100%", height: "100%" }}
                  contentFit="cover"
                />
              </View>
              <Text className="text-2xl italic text-charcoal mt-4 text-center">
                {c.title}
              </Text>
              <Text className="text-charcoal/70 text-center mt-2 px-4">
                {c.description}
              </Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </SiteShell>
  );
}
