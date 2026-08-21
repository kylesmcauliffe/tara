import { useState } from "react";
import { Link } from "expo-router";
import { Pressable, Text, View, useWindowDimensions } from "react-native";
import { shopCategories } from "../data/tara";
import { getCartCount, subscribeCart } from "../lib/cart";
import { useEffect } from "react";

type Props = {
  onOpenCart: () => void;
};

export function Header({ onOpenCart }: Props) {
  const { width } = useWindowDimensions();
  const desktop = width >= 1024;
  const [menuOpen, setMenuOpen] = useState(false);
  const [count, setCount] = useState(getCartCount());

  useEffect(() => subscribeCart((items) => setCount(getCartCount(items))), []);

  const NavLink = ({
    href,
    label,
  }: {
    href: string;
    label: string;
  }) => (
    <Link href={href as any} asChild>
      <Pressable className="px-2 py-2">
        <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
          {label}
        </Text>
      </Pressable>
    </Link>
  );

  return (
    <View className="border-b border-taupe bg-cream/95 z-50">
      <View className="flex-row items-center justify-between px-4 md:px-8 py-4 max-w-6xl w-full self-center">
        {desktop ? (
          <View className="flex-row items-center gap-2 flex-1">
            <NavLink href="/collections" label="New" />
            <NavLink href="/shop" label="Shop" />
            <NavLink href="/collections" label="Collections" />
            <NavLink href="/shops" label="Discover" />
          </View>
        ) : (
          <Pressable onPress={() => setMenuOpen((v) => !v)} className="flex-1">
            <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
              {menuOpen ? "Close" : "Menu"}
            </Text>
          </Pressable>
        )}

        <Link href="/" asChild>
          <Pressable>
            <Text className="text-2xl tracking-[8px] uppercase text-charcoal font-medium">
              Tara
            </Text>
          </Pressable>
        </Link>

        <View className="flex-row items-center justify-end gap-2 flex-1">
          {desktop ? (
            <>
              <NavLink href="/account" label="Account" />
              <NavLink href="/assistance" label="Assistance" />
            </>
          ) : null}
          <Pressable onPress={onOpenCart} className="px-2 py-2">
            <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
              Bag{count > 0 ? ` (${count})` : ""}
            </Text>
          </Pressable>
        </View>
      </View>

      {!desktop && menuOpen ? (
        <View className="px-4 pb-6 border-t border-taupe gap-2">
          <NavLink href="/shop" label="Shop" />
          {shopCategories.map((c) => (
            <NavLink key={c.slug} href={c.href} label={c.label} />
          ))}
          <NavLink href="/collections" label="Collections" />
          <NavLink href="/shops" label="Our Shops" />
          <NavLink href="/journal" label="Journal" />
          <NavLink href="/gift-cards" label="Gift Cards" />
          <NavLink href="/account" label="Account" />
          <NavLink href="/assistance" label="Assistance" />
        </View>
      ) : null}

      {desktop ? (
        <View className="hidden" />
      ) : null}
    </View>
  );
}
