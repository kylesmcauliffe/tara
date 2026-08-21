export const journalPosts = [
  {
    slug: "fall-chapter-one",
    title: "Fall Chapter One",
    pubDate: "2026-08-01",
    description:
      "Notes on the season’s first deliveries—softer knits, quieter dresses, and what we’re wearing in store.",
    body: `The first fall shipment landed this week. Soft knits, a few dresses with a quieter hand, and pieces that feel right for cooler mornings in the shops.

We’ll share more as the floor settles—fits we love, colors that keep selling out, and the small details that make a season feel like ours.`,
  },
  {
    slug: "in-the-shops",
    title: "In the Shops",
    pubDate: "2026-07-15",
    description:
      "A quiet afternoon in Marin, new arrivals on Bridgeway, and what guests are trying on first.",
    body: `Late light through the windows, cream racks, and a table of finishing touches. Our Marin shop has been busy with summer-into-fall edits—cardigans over dresses, silk scarves in soft prints.

Stop by any of our three shops for styling help, alterations notes, and gift wrapping.`,
  },
] as const;

export function getJournalPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
