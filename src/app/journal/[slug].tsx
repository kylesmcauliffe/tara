import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SiteShell } from "../../components/SiteShell";
import { getJournalPost, journalPosts } from "../../data/journal";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export default function JournalPostScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const post = getJournalPost(slug ?? "");

  if (!post) {
    return (
      <SiteShell>
        <Text className="p-8 text-center">Post not found.</Text>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-16 max-w-2xl self-center w-full">
        <Text className="text-[10px] tracking-[2px] uppercase text-charcoal/50 text-center">
          {post.pubDate}
        </Text>
        <Text className="text-4xl italic text-charcoal text-center mt-3 mb-8">
          {post.title}
        </Text>
        <Text className="text-charcoal/80 leading-7 whitespace-pre-line">
          {post.body}
        </Text>
      </View>
    </SiteShell>
  );
}
