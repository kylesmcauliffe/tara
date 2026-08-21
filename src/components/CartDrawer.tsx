import { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Image } from "expo-image";
import {
  getCart,
  getCartTotal,
  removeFromCart,
  subscribeCart,
  updateQty,
  type CartItem,
} from "../lib/cart";
import { formatPrice, type TaraImageKey } from "../data/tara";
import { getTaraImage } from "../data/images";
import { FramedButton } from "./FramedButton";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function CartDrawer({ open, onClose }: Props) {
  const [items, setItems] = useState<CartItem[]>(getCart());
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { width } = useWindowDimensions();
  const drawerWidth = Math.min(420, width);

  useEffect(() => subscribeCart(setItems), []);

  async function checkout() {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/.netlify/functions/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout failed");
      }
      if (typeof window !== "undefined") {
        window.location.href = data.url;
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Checkout failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Modal visible={open} transparent animationType="fade" onRequestClose={onClose}>
      <View className="flex-1 flex-row justify-end bg-black/40">
        <Pressable className="flex-1" onPress={onClose} />
        <View
          className="bg-cream h-full border-l border-taupe"
          style={{ width: drawerWidth }}
        >
          <View className="flex-row items-center justify-between px-5 py-5 border-b border-taupe">
            <Text className="text-[12px] tracking-[3px] uppercase text-charcoal">
              Your Bag
            </Text>
            <Pressable onPress={onClose}>
              <Text className="text-charcoal text-lg">×</Text>
            </Pressable>
          </View>

          <ScrollView className="flex-1 px-5 py-4">
            {items.length === 0 ? (
              <Text className="text-charcoal/60 italic mt-8 text-center">
                Your bag is empty.
              </Text>
            ) : (
              items.map((item) => (
                <View
                  key={`${item.slug}-${item.size}`}
                  className="flex-row gap-3 mb-5 pb-5 border-b border-taupe"
                >
                  <Image
                    source={getTaraImage(item.imageKey as TaraImageKey)}
                    style={{ width: 72, height: 96 }}
                    contentFit="cover"
                  />
                  <View className="flex-1">
                    <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
                      {item.name}
                    </Text>
                    <Text className="text-xs text-charcoal/60 mt-1">
                      Size {item.size}
                    </Text>
                    <Text className="text-sm mt-1 text-charcoal">
                      {formatPrice(item.price)}
                    </Text>
                    <View className="flex-row items-center gap-3 mt-2">
                      <Pressable
                        onPress={() =>
                          updateQty(item.slug, item.size, item.qty - 1)
                        }
                      >
                        <Text className="text-charcoal px-2">−</Text>
                      </Pressable>
                      <Text className="text-charcoal">{item.qty}</Text>
                      <Pressable
                        onPress={() =>
                          updateQty(item.slug, item.size, item.qty + 1)
                        }
                      >
                        <Text className="text-charcoal px-2">+</Text>
                      </Pressable>
                      <Pressable
                        onPress={() => removeFromCart(item.slug, item.size)}
                      >
                        <Text className="text-charcoal/50 text-xs ml-2">
                          Remove
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              ))
            )}
          </ScrollView>

          <View className="px-5 py-5 border-t border-taupe">
            <View className="flex-row justify-between mb-4">
              <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
                Subtotal
              </Text>
              <Text className="text-charcoal">{formatPrice(getCartTotal(items))}</Text>
            </View>
            {error ? (
              <Text className="text-red-700 text-xs mb-3">{error}</Text>
            ) : null}
            <FramedButton onPress={items.length && !busy ? checkout : undefined}>
              {busy ? "Redirecting…" : "Checkout"}
            </FramedButton>
          </View>
        </View>
      </View>
    </Modal>
  );
}
