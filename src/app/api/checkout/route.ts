import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-06-20" as Stripe.LatestApiVersion,
});

const planPriceMap: Record<string, string> = {
  bronzeMonthly: "price_1SRsVL3Qpm2OW8htSrWEj1Eo",
  silverMonthly: "price_1SRsUH3Qpm2OW8htCeh6T6ht",
  goldMonthly: "price_1SRsOV3Qpm2OW8htBa7PC2C4",
  platinumMonthly: "price_1SRsWK3Qpm2OW8htyDn8qgGC",
  bronzeAnnual: "price_1SRsYp3Qpm2OW8htdFOUYo0c",
  silverAnnual: "price_1SRsZB3Qpm2OW8htqI5kuHtz",
  goldAnnual: "price_1SRsZU3Qpm2OW8htnOR5y0IV",
  platinumAnnual: "price_1SRsZv3Qpm2OW8htOQLgwyPa",
};

export async function POST(request: Request) {
  try {
    const { planKey } = await request.json();

    if (!planKey || typeof planKey !== "string") {
      return NextResponse.json({ error: "Plan key is required" }, { status: 400 });
    }

    const priceId = planPriceMap[planKey];

    if (!priceId) {
      return NextResponse.json({ error: "Invalid plan key" }, { status: 400 });
    }

    const origin =
      request.headers.get("origin") ??
      process.env.NEXT_PUBLIC_APP_URL ??
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
      metadata: {
        planKey,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 }
    );
  }
}

