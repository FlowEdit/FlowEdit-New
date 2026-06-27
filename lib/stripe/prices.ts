export const STRIPE_PRICE_IDS = {
  launch: {
    monthly: "price_1SqQgA2FtDZFttyt2f6BTipb",
  },
  core: {
    monthly: "price_1SqQld2FtDZFttytqlRHAAU6",
    semiannual: "price_1SqQob2FtDZFttytTZMjVh42",
    annual: "price_1SqQrh2FtDZFttytJVYplU2A",
  },
  creator: {
    monthly: "price_1SqQto2FtDZFttytEG8qcBiy",
    semiannual: "price_1SqQxL2FtDZFttytWwPGtHn5",
    annual: "price_1SqQxL2FtDZFttytRgHL24n1",
  },
  studio: {
    monthly: "price_1SqQzf2FtDZFttytdSBzATBN",
    semiannual: "price_1SqR4A2FtDZFttytwnmujKxK",
    annual: "price_1SqR4A2FtDZFttyt9q9fwicJ",
  },
  production: {
    monthly: "price_1TmFlN2FtDZFttytoYyya0jG",
    semiannual: "price_1TmFnd2FtDZFttytHrWvFwDj",
    annual: "price_1TmFmx2FtDZFttytI2bAsHo0",
  },
} as const;

export type PlanKey = keyof typeof STRIPE_PRICE_IDS;
export type PeriodKey = "monthly" | "semiannual" | "annual";

const PLAN_ALIASES: Record<string, PlanKey> = {
  launch: "launch",
  core: "core",
  creator: "creator",
  studio: "studio",
  production: "production",
  // App-specific aliases
  growth: "creator",
  plus: "studio",
};

const PERIOD_ALIASES: Record<string, PeriodKey> = {
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

export function normalizePlanKey(plan: PlanKey | string): PlanKey {
  const normalized = plan.trim().toLowerCase();
  const key = PLAN_ALIASES[normalized];
  if (!key) {
    throw new Error(`Invalid plan: ${plan}`);
  }
  return key;
}

export function normalizePeriodKey(period: PeriodKey | string): PeriodKey {
  const normalized = period.trim().toLowerCase();
  const key = PERIOD_ALIASES[normalized];
  if (!key) {
    throw new Error(`Invalid billing period: ${period}`);
  }
  return key;
}

export function getStripePriceId(plan: PlanKey | string, period: PeriodKey | string): string {
  const normalizedPlan = normalizePlanKey(plan);
  const normalizedPeriod = normalizePeriodKey(period);

  const planPrices = STRIPE_PRICE_IDS[normalizedPlan];

  if (normalizedPlan === "launch") {
    return planPrices.monthly;
  }

  const priceId = planPrices[normalizedPeriod as keyof typeof planPrices];
  if (!priceId) {
    throw new Error(
      `Unsupported billing period for plan '${normalizedPlan}': '${normalizedPeriod}'`
    );
  }

  return priceId;
}
