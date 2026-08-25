import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SiteShell } from "../components/SiteShell";

export default function NewsletterScreen() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-20 items-center">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50 mb-2">
          Newsletter
        </Text>
        <Text className="text-4xl italic text-charcoal mb-4 text-center">
          Sign Up
        </Text>
        <Text className="text-[13px] tracking-[1px] text-charcoal/60 text-center max-w-md mb-10 leading-6">
          Be first to hear new music, tour dates, and exclusives from Tara.
        </Text>

        {done ? (
          <Text className="text-[13px] tracking-[2px] uppercase text-charcoal">
            Thank you — you&apos;re on the list.
          </Text>
        ) : (
          <View className="w-full max-w-md gap-3">
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email address"
              placeholderTextColor="#8a8174"
              className="border border-charcoal/40 px-4 py-3 text-charcoal"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Pressable
              onPress={() => {
                if (email.trim()) setDone(true);
              }}
              className="border border-charcoal px-5 py-3 items-center"
            >
              <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
                Sign Up
              </Text>
            </Pressable>
            <Text className="text-[10px] text-charcoal/40 text-center leading-4 mt-2">
              Placeholder signup only — connect an email provider when ready.
            </Text>
          </View>
        )}
      </View>
    </SiteShell>
  );
}
