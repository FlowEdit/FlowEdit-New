export const STRIPE_PAYMENT_LINKS = {
  launch: {
    monthly: "https://buy.stripe.com/00weV6aOu7UG32N48J1oI0c",
  },
  core: {
    monthly: "https://buy.stripe.com/fZucMY8Gmdf01YJax71oI01",
    semiannual: "https://buy.stripe.com/cNi4gs6yeb6S46R48J1oI07",
    annual: "https://buy.stripe.com/6oU14g2hY6QC9rbax71oI0b",
  },
  creator: {
    monthly: "https://buy.stripe.com/cNi28kf4Kej4dHrdJj1oI03",
    semiannual: "https://buy.stripe.com/28E3coaOu7UG6eZ5cN1oI06",
    annual: "https://buy.stripe.com/28EaEQe0G8YKavffRr1oI0a",
  },
  studio: {
    monthly: "https://buy.stripe.com/4gM00c9Kq0secDn48J1oI02",
    semiannual: "https://buy.stripe.com/00w6oA4q6a2O32NfRr1oI05",
    annual: "https://buy.stripe.com/aFa6oAg8Ogrcavf48J1oI09",
  },
  production: {
    monthly: "https://buy.stripe.com/bJe5kw09Q3EqdHrax71oI00",
    semiannual: "https://buy.stripe.com/9B66oA3m2b6SfPzax71oI04",
    annual: "https://buy.stripe.com/8x2eV6g8O1wifPzgVv1oI08",
  },
} as const;

export type PaymentLinkPlanKey = keyof typeof STRIPE_PAYMENT_LINKS;
export type PaymentLinkPeriodKey = "monthly" | "semiannual" | "annual";

const PLAN_ALIASES: Record<string, PaymentLinkPlanKey> = {
  launch: "launch",
  core: "core",
  creator: "creator",
  studio: "studio",
  production: "production",
  growth: "creator",
  plus: "studio",
};

const PERIOD_ALIASES: Record<string, PaymentLinkPeriodKey> = {
  monthly: "monthly",
  month: "monthly",
  semiannual: "semiannual",
  "semi-annual": "semiannual",
  "semi annual": "semiannual",
  biannual: "semiannual",
  annual: "annual",
  yearly: "annual",
  year: "annual",
};

export const LAUNCH_PAYMENT_LINK = STRIPE_PAYMENT_LINKS.launch.monthly;

export function normalizePaymentLinkPlan(plan: PaymentLinkPlanKey | string): PaymentLinkPlanKey {
  const normalized = plan.trim().toLowerCase();
  const key = PLAN_ALIASES[normalized];
  if (!key) {
    throw new Error(`Invalid plan: ${plan}`);
  }
  return key;
}

export function normalizePaymentLinkPeriod(
  period: PaymentLinkPeriodKey | string
): PaymentLinkPeriodKey {
  const normalized = period.trim().toLowerCase();
  const key = PERIOD_ALIASES[normalized];
  if (!key) {
    throw new Error(`Invalid billing period: ${period}`);
  }
  return key;
}

export function getStripePaymentLink(
  plan: PaymentLinkPlanKey | string,
  period: PaymentLinkPeriodKey | string
): string {
  const normalizedPlan = normalizePaymentLinkPlan(plan);

  if (normalizedPlan === "launch") {
    return STRIPE_PAYMENT_LINKS.launch.monthly;
  }

  const normalizedPeriod = normalizePaymentLinkPeriod(period);
  return STRIPE_PAYMENT_LINKS[normalizedPlan][normalizedPeriod];
}
