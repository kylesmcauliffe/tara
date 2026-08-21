import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),

      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
});
const gallery = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/gallery" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      coverImage: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      images: z
        .array(
          z.object({
            url: image(),
            alt: z.string(),
            caption: z.string().optional(),
            order: z.number().optional(),
          })
        )
        .min(1),
      order: z.number().optional(),
    }),
});
const locations = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/locations" }),
  schema: z.object({
    name: z.string(),
    type: z.string().optional(),
    address: z.string(),
    city: z.string().optional(),
    country: z.string().optional(),
    mapUrl: z.string().url().optional(),
    notes: z.string().optional(),
    order: z.number().optional(),
  }),
});
const wishlist = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/wishlist" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      link: z.string(),
      price: z.string().optional(),
      category: z.string().optional(),
      store: z.string().optional(),
      status: z
        .enum(["Available", "Reserved", "Fulfilled"])
        .default("Available"),
      image: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});
const events = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/events" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.date(),
      startTime: z.string().optional(),
      endTime: z.string().optional(),
      locationSlug: z.string().optional(),
      isMainEvent: z.boolean().default(false),
      order: z.number().optional(),
      image: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});
const people = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/people" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(), // "Emily Johnson"
      role: z.string(), // "Bride", "Groom", "Maid of Honor", etc.
      bio: z.string().optional(), // short description or relationship
      image: z
        .object({
          url: image(), // photo of the person
          alt: z.string(),
        })
        .optional(), // optional in case someone doesn't want pictures
      order: z.number().optional(), // manual sorting
    }),
});
export const collections = {
  posts: postsCollection,
  gallery: gallery,
  locations: locations,
  wishlist: wishlist,
  events: events,
  people: people,
};
