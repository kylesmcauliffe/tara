import { Text, View } from "react-native";
import { SiteShell } from "../components/SiteShell";
import { ExternalLink } from "../components/ExternalLink";
import { shows } from "../data/tara";

export default function TourScreen() {
  return (
    <SiteShell>
      <View className="px-4 md:px-8 py-14 items-center">
        <Text className="text-[11px] tracking-[3px] uppercase text-charcoal/50 mb-2">
          On the road
        </Text>
        <Text className="text-4xl italic text-charcoal mb-12">Tour</Text>

        <View className="w-full max-w-2xl gap-0">
          {shows.map((show, i) => (
            <View
              key={show.id}
              className={`flex-row flex-wrap items-center justify-between gap-3 py-5 ${
                i < shows.length - 1 ? "border-b border-taupe" : ""
              }`}
            >
              <View className="flex-1 min-w-[180px]">
                <Text className="text-[11px] tracking-[2px] uppercase text-charcoal/50 mb-1">
                  {show.date}
                </Text>
                <Text className="text-lg text-charcoal tracking-[1px]">
                  {show.city}
                </Text>
                <Text className="text-[13px] text-charcoal/60 mt-0.5">
                  {show.venue}
                </Text>
              </View>
              <ExternalLink href={show.ticketUrl}>
                <View className="border border-charcoal px-4 py-2.5">
                  <Text className="text-[11px] tracking-[2px] uppercase text-charcoal">
                    Tickets
                  </Text>
                </View>
              </ExternalLink>
            </View>
          ))}
        </View>
      </View>
    </SiteShell>
  );
}
