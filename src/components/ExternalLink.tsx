import { Linking, Pressable, Text } from "react-native";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Outbound link that works on web + native. */
export function ExternalLink({ href, children, className = "" }: Props) {
  return (
    <Pressable
      accessibilityRole="link"
      className={className}
      onPress={() => {
        void Linking.openURL(href);
      }}
    >
      {typeof children === "string" ? (
        <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
