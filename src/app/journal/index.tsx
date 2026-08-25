import { Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { SiteShell } from "../../components/SiteShell";
import { journalPosts } from "../../data/journal";
import { getTaraImage } from "../../data/images";

export default function JournalIndex() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-12 items-center">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50">
          Discover
        </Text>
        <Text className="text-4xl italic text-charcoal mt-2">Journal</Text>
      </View>
      <View className="px-4 md:px-8 pb-16 max-w-3xl self-center w-full gap-10">
        {journalPosts.map((post) => (
          <Link key={post.slug} href={`/journal/${post.slug}`} asChild>
            <Pressable className="border-b border-taupe pb-10">
              <View className="w-full aspect-[4/5] max-h-[420px] bg-taupe overflow-hidden mb-5">
                <Image
                  source={getTaraImage(post.imageKey)}
                  style={{ width: "100%", height: "100%" }}
                  contentFit="cover"
                />
              </View>
              <Text className="text-[10px] tracking-[2px] uppercase text-charcoal/50">
                {post.pubDate}
              </Text>
              <Text className="text-2xl italic text-charcoal mt-2">
                {post.title}
              </Text>
              <Text className="text-charcoal/70 mt-2">{post.description}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </SiteShell>
  );
}
