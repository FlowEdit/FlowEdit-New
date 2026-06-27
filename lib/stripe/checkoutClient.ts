import {
  normalizePeriodKey,
  normalizePlanKey,
  PeriodKey,
  PlanKey,
} from "./prices";

type CheckoutResponse = {
  url?: string;
  error?: string;
};

export async function startCheckout(plan: PlanKey | string, period: PeriodKey | string) {
  const normalizedPlan = normalizePlanKey(plan);
  const normalizedPeriod = normalizePeriodKey(period);

  const res = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      plan: normalizedPlan,
      period: normalizedPeriod,
    }),
  });

  let payload: CheckoutResponse | null = null;
  try {
    payload = (await res.json()) as CheckoutResponse;
  } catch {
    payload = null;
  }

  if (!res.ok) {
    const message = payload?.error || "Failed to create Stripe Checkout session";
    throw new Error(message);
  }

  if (!payload?.url) {
    throw new Error("Stripe Checkout URL was not returned by the server");
  }

  window.location.assign(payload.url);
}
