import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  onPress?: () => void;
  children: ReactNode;
  className?: string;
};

export function FramedButton({ href, onPress, children, className = "" }: Props) {
  const inner = (
    <View
      className={`border border-charcoal px-5 py-3 items-center justify-center ${className}`}
    >
      <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
        {children}
      </Text>
    </View>
  );

  if (href) {
    return (
      <Link href={href as any} asChild>
        <Pressable>{inner}</Pressable>
      </Link>
    );
  }

  return <Pressable onPress={onPress}>{inner}</Pressable>;
}
