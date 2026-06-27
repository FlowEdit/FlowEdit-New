import Stripe from "stripe";
import { NextResponse } from "next/server";
import { getStripePriceId, normalizePeriodKey, normalizePlanKey } from "@/lib/stripe/prices";

let stripeClient: Stripe | null = null;

function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Stripe is not configured on the server");
  }

  if (!stripeClient) {
    stripeClient = new Stripe(secretKey);
  }

  return stripeClient;
}

export async function POST(req: Request) {
  try {
    const stripe = getStripeClient();

    const body = (await req.json()) as { plan?: string; period?: string };

    if (!body.plan || !body.period) {
      return NextResponse.json({ error: "Missing plan or period" }, { status: 400 });
    }

    const plan = normalizePlanKey(body.plan);
    const period = normalizePeriodKey(body.period);
    const priceId = getStripePriceId(plan, period);

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flowedit.video";
    const encodedPlan = encodeURIComponent(plan);
    const encodedPeriod = encodeURIComponent(period);
    // Temporary success destination while the Member Portal is under development.
    // Replace with authenticated portal onboarding after launch.
    const successUrl = `https://flowedit.video/client-welcome?checkout=success&plan=${encodedPlan}&period=${encodedPeriod}`;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: `${siteUrl}/pricing?checkout=cancelled&plan=${encodedPlan}&period=${encodedPeriod}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("Error creating checkout session", err);

    const message =
      typeof err === "object" && err !== null && "message" in err
        ? String((err as { message: unknown }).message)
        : "unknown";

    return NextResponse.json(
      { error: `Unable to create Stripe Checkout session: ${message}` },
      { status: 500 }
    );
  }
}
