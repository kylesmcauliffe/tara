# Tara

Expo Router + UniWind fashion boutique for **Tara**. Static web export deploys to Netlify.

## Stack

- Expo SDK 57 + Expo Router
- UniWind (Tailwind CSS v4)
- `react-native-web` for Netlify static hosting
- Netlify Function for Stripe Checkout

## Requirements

- Node.js 22+ (see `.nvmrc`)

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run web` | Expo web dev server |
| `npm start` | Expo start |
| `npm run build` | `expo export --platform web` → `dist/` |
| `npx netlify dev` | Local site + functions |

## Environment

Copy `.env.example` → `.env`:

```bash
STRIPE_SECRET_KEY=sk_test_...
PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## Brand hubs

See prior Notion / Figma / Canva links in git history README revisions, or regenerate from the project brief.
