/**
 * Tara artist site data.
 * Image keys map to assets/tara via data/images.ts.
 */

export type TaraImageKey =
  | "hero-dresses"
  | "hero-knitwear"
  | "collection-strip"
  | "product-marin"
  | "product-darcy"
  | "product-hardy"
  | "product-julitta"
  | "shop-la"
  | "shop-marin"
  | "shop-newport"
  | "category-dresses"
  | "category-knitwear"
  | "category-tops"
  | "portrait-joy"
  | "portrait-smile"
  | "portrait-veil";

export const artist = {
  name: "Tara",
  fullName: "Tara",
  tagline: "Songs for late light and open roads.",
  bio: `Tara is a singer-songwriter whose work sits between intimate folk and luminous pop—voice first, story always. Her live shows favor quiet rooms and clear rooms alike: piano, guitar, and a band that knows when to leave space.

Raised between coasts and now based in California, she writes about belonging, weather, and the people we become when we leave home. Her latest release invites listeners in close—then opens the door to the road.`,
  bookingEmail: "booking@tara.example",
  pressEmail: "press@tara.example",
  listenUrl: "https://open.spotify.com/",
} as const;

export const socials = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com/" },
  { id: "tiktok", label: "TikTok", href: "https://tiktok.com/" },
  { id: "spotify", label: "Spotify", href: "https://open.spotify.com/" },
  { id: "youtube", label: "YouTube", href: "https://youtube.com/" },
  { id: "x", label: "X", href: "https://x.com/" },
] as const;

export type Release = {
  slug: string;
  title: string;
  type: "Album" | "EP" | "Single";
  year: string;
  imageKey: TaraImageKey;
  listenUrl: string;
};

export const releases: Release[] = [
  {
    slug: "late-light",
    title: "Late Light",
    type: "Album",
    year: "2026",
    imageKey: "portrait-veil",
    listenUrl: "https://open.spotify.com/",
  },
  {
    slug: "open-road",
    title: "Open Road",
    type: "EP",
    year: "2025",
    imageKey: "portrait-smile",
    listenUrl: "https://open.spotify.com/",
  },
  {
    slug: "harbor",
    title: "Harbor",
    type: "Single",
    year: "2025",
    imageKey: "portrait-joy",
    listenUrl: "https://open.spotify.com/",
  },
  {
    slug: "soft-weather",
    title: "Soft Weather",
    type: "Single",
    year: "2024",
    imageKey: "hero-knitwear",
    listenUrl: "https://open.spotify.com/",
  },
  {
    slug: "marin",
    title: "Marin",
    type: "Single",
    year: "2024",
    imageKey: "product-marin",
    listenUrl: "https://open.spotify.com/",
  },
  {
    slug: "northbound",
    title: "Northbound",
    type: "EP",
    year: "2023",
    imageKey: "collection-strip",
    listenUrl: "https://open.spotify.com/",
  },
];

export const featuredRelease = releases[0];

export type Show = {
  id: string;
  date: string;
  city: string;
  venue: string;
  ticketUrl: string;
};

export const shows: Show[] = [
  {
    id: "la-1",
    date: "Sep 12, 2026",
    city: "Los Angeles, CA",
    venue: "The Troubadour",
    ticketUrl: "https://www.ticketmaster.com/",
  },
  {
    id: "sf-1",
    date: "Sep 18, 2026",
    city: "San Francisco, CA",
    venue: "The Independent",
    ticketUrl: "https://www.ticketmaster.com/",
  },
  {
    id: "ny-1",
    date: "Oct 3, 2026",
    city: "New York, NY",
    venue: "Bowery Ballroom",
    ticketUrl: "https://www.ticketmaster.com/",
  },
  {
    id: "chi-1",
    date: "Oct 10, 2026",
    city: "Chicago, IL",
    venue: "Lincoln Hall",
    ticketUrl: "https://www.ticketmaster.com/",
  },
  {
    id: "sea-1",
    date: "Oct 22, 2026",
    city: "Seattle, WA",
    venue: "Neumos",
    ticketUrl: "https://www.ticketmaster.com/",
  },
];

export type VideoItem = {
  slug: string;
  title: string;
  subtitle?: string;
  imageKey: TaraImageKey;
  url: string;
};

export const videos: VideoItem[] = [
  {
    slug: "late-light-official",
    title: "Late Light",
    subtitle: "Official Video",
    imageKey: "hero-dresses",
    url: "https://youtube.com/",
  },
  {
    slug: "harbor-visualizer",
    title: "Harbor",
    subtitle: "Official Visualizer",
    imageKey: "shop-la",
    url: "https://youtube.com/",
  },
  {
    slug: "open-road-live",
    title: "Open Road",
    subtitle: "Live Session",
    imageKey: "shop-marin",
    url: "https://youtube.com/",
  },
  {
    slug: "soft-weather-lyric",
    title: "Soft Weather",
    subtitle: "Lyric Video",
    imageKey: "shop-newport",
    url: "https://youtube.com/",
  },
  {
    slug: "marin-performance",
    title: "Marin",
    subtitle: "Performance",
    imageKey: "product-darcy",
    url: "https://youtube.com/",
  },
  {
    slug: "northbound-behind",
    title: "Northbound",
    subtitle: "Behind the Scenes",
    imageKey: "product-hardy",
    url: "https://youtube.com/",
  },
];

export const galleryImages: { key: TaraImageKey; alt: string }[] = [
  { key: "portrait-veil", alt: "Tara portrait" },
  { key: "portrait-smile", alt: "Tara smiling" },
  { key: "portrait-joy", alt: "Tara mid-laugh" },
  { key: "hero-dresses", alt: "Studio moment" },
  { key: "hero-knitwear", alt: "Soft light portrait" },
  { key: "collection-strip", alt: "On set" },
  { key: "product-marin", alt: "Close portrait" },
  { key: "product-julitta", alt: "Performance still" },
  { key: "shop-la", alt: "Los Angeles" },
  { key: "shop-marin", alt: "Marin" },
  { key: "shop-newport", alt: "Coast" },
  { key: "category-dresses", alt: "Editorial frame" },
];

export const navLeft = [
  { label: "Music", href: "/music" },
  { label: "Tour", href: "/tour" },
  { label: "Videos", href: "/videos" },
  { label: "Gallery", href: "/gallery" },
  { label: "Info", href: "/info" },
] as const;

export const navRight = [
  { label: "Sign Up", href: "/newsletter" },
  { label: "Contact", href: "/contact" },
] as const;
