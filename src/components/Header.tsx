import { useState } from "react";
import { Link } from "expo-router";
import { Pressable, Text, View, useWindowDimensions } from "react-native";
import { navLeft, navRight, socials } from "../data/tara";
import { ExternalLink } from "./ExternalLink";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href as any} asChild>
      <Pressable className="px-2 py-2">
        <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
          {label}
        </Text>
      </Pressable>
    </Link>
  );
}

function SocialCluster() {
  return (
    <View className="flex-row items-center gap-1">
      {socials.map((s) => (
        <ExternalLink key={s.id} href={s.href} className="px-1.5 py-2">
          <Text className="text-[10px] tracking-[1px] uppercase text-charcoal/70">
            {s.label.slice(0, 2)}
          </Text>
        </ExternalLink>
      ))}
    </View>
  );
}

export function Header() {
  const { width } = useWindowDimensions();
  const desktop = width >= 1024;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View className="border-b border-taupe bg-cream/95 z-50">
      <View className="flex-row items-center justify-between px-4 md:px-8 py-4 max-w-6xl w-full self-center">
        {desktop ? (
          <View className="flex-row items-center gap-1 flex-1 flex-wrap">
            {navLeft.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
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

        <View className="flex-row items-center justify-end gap-1 flex-1">
          {desktop ? (
            <>
              {navRight.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
              <SocialCluster />
            </>
          ) : (
            <SocialCluster />
          )}
        </View>
      </View>

      {!desktop && menuOpen ? (
        <View className="px-4 pb-6 border-t border-taupe gap-1">
          {[...navLeft, ...navRight].map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </View>
      ) : null}
    </View>
  );
}
