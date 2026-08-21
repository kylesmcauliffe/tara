import { Text, View } from "react-native";
import { SiteShell } from "../components/SiteShell";
import { FramedButton } from "../components/FramedButton";
import { giftCards, formatPrice } from "../data/tara";
import { addToCart } from "../lib/cart";

export default function GiftCardsScreen() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-12 items-center">
        <Text className="text-4xl italic text-charcoal">Gift Cards</Text>
        <Text className="text-charcoal/60 mt-3 text-center max-w-md">
          Digital or letterpressed—redeemable online and in our shops.
        </Text>
      </View>
      <View className="px-4 md:px-8 pb-16 flex-row flex-wrap justify-center gap-6">
        {giftCards.map((card) => (
          <View
            key={card.slug}
            className="border border-taupe p-8 w-full max-w-xs items-center"
          >
            <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
              {card.type}
            </Text>
            <Text className="text-2xl text-charcoal mt-3">{card.name}</Text>
            <Text className="text-xl mt-2 text-charcoal">
              {formatPrice(card.amount)}
            </Text>
            <Text className="text-charcoal/60 text-center mt-3 mb-6 text-sm">
              {card.description}
            </Text>
            <FramedButton
              onPress={() =>
                addToCart({
                  slug: card.slug,
                  name: card.name,
                  price: card.amount,
                  size: "OS",
                  imageKey: "category-tops",
                })
              }
            >
              Add to Bag
            </FramedButton>
          </View>
        ))}
      </View>
    </SiteShell>
  );
}
