import { stripePriceIds, PeriodKey } from "./prices";

export async function startCheckout(planName: string, period: PeriodKey) {
  const plan = stripePriceIds[planName];
  if (!plan) {
    console.warn(`Missing stripe price mapping for plan: ${planName}`);
    return;
  }

  const priceId = plan[period];
  if (!priceId) {
    console.warn(`Missing price id for ${planName} / ${period}`);
    return;
  }

  try {
    const res = await fetch(`/api/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId }),
    });

    if (!res.ok) {
      console.error("Failed to create checkout session", await res.text());
      return;
    }

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("No checkout url returned from server");
    }
  } catch (err) {
    console.error("Checkout failed", err);
  }
}
