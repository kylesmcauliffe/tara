import type { Handler, HandlerEvent } from "@netlify/functions";
import Stripe from "stripe";

type CartBodyItem = {
  slug: string;
  name: string;
  price: number;
  size: string;
  qty: number;
  imageKey?: string;
};

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "STRIPE_SECRET_KEY is not configured." }),
    };
  }

  let items: CartBodyItem[] = [];
  try {
    const body = JSON.parse(event.body || "{}") as { items?: CartBodyItem[] };
    items = body.items ?? [];
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid JSON body." }),
    };
  }

  if (!items.length) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Cart is empty." }),
    };
  }

  const siteUrl =
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    "http://localhost:8888";

  const stripe = new Stripe(secret);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
      line_items: items.map((item) => ({
        quantity: item.qty,
        price_data: {
          currency: "usd",
          unit_amount: Math.round(item.price * 100),
          product_data: {
            name: `${item.name} (${item.size})`,
            metadata: {
              slug: item.slug,
              size: item.size,
            },
          },
        },
      })),
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ url: session.url, id: session.id }),
    };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unable to create checkout session.";
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: message }),
    };
  }
};
