export const stripePriceIds: Record<string, { monthly: string; semiannual: string; annual: string }> = {
  Launch: {
    monthly: "price_1SqQgA2FtDZFttyt2f6BTipb",
    semiannual: "price_1SqQgA2FtDZFttyt2f6BTipb",
    annual: "price_1SqQgA2FtDZFttyt2f6BTipb",
  },
  Core: {
    monthly: "price_1SqQld2FtDZFttytqlRHAAU6",
    semiannual: "price_1SqQob2FtDZFttytTZMjVh42",
    annual: "price_1SqQrh2FtDZFttytJVYplU2A",
  },
  Creator: {
    monthly: "price_1SqQto2FtDZFttytEG8qcBiy",
    semiannual: "price_1SqQxL2FtDZFttytWwPGtHn5",
    annual: "price_1SqQxL2FtDZFttytRgHL24n1",
  },
  Studio: {
    monthly: "price_1SqQzf2FtDZFttytdSBzATBN",
    semiannual: "price_1SqR4A2FtDZFttytwnmujKxK",
    annual: "price_1SqR4A2FtDZFttyt9q9fwicJ",
  },
  Production: {
    monthly: "price_1TmFlN2FtDZFttytoYyya0jG",
    semiannual: "price_1TmFnd2FtDZFttytHrWvFwDj",
    annual: "price_1TmFmx2FtDZFttytI2bAsHo0",
  },
};

export type PeriodKey = "monthly" | "semiannual" | "annual";
