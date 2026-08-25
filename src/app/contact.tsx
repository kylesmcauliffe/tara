import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SiteShell } from "../components/SiteShell";
import { artist } from "../data/tara";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-14 items-center">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50 mb-2">
          Booking & general
        </Text>
        <Text className="text-4xl italic text-charcoal mb-4">Contact</Text>
        <Text className="text-[13px] text-charcoal/60 text-center max-w-md mb-10 leading-6">
          For booking: {artist.bookingEmail}
          {"\n"}
          For press: {artist.pressEmail}
        </Text>

        {done ? (
          <Text className="text-[13px] tracking-[2px] uppercase text-charcoal">
            Message noted — we&apos;ll be in touch.
          </Text>
        ) : (
          <View className="w-full max-w-md gap-3">
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Name"
              placeholderTextColor="#8a8174"
              className="border border-charcoal/40 px-4 py-3 text-charcoal"
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#8a8174"
              className="border border-charcoal/40 px-4 py-3 text-charcoal"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Message"
              placeholderTextColor="#8a8174"
              className="border border-charcoal/40 px-4 py-3 text-charcoal min-h-[120px]"
              multiline
              textAlignVertical="top"
            />
            <Pressable
              onPress={() => {
                if (name.trim() && email.trim() && message.trim()) setDone(true);
              }}
              className="border border-charcoal px-5 py-3 items-center mt-2"
            >
              <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
                Send
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </SiteShell>
  );
}
