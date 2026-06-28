"use client";

const details = [
  {
    marker: "1",
    title: "Launch Plan",
    body: "The Launch plan is provided at no cost and includes one edited video per month from footage totaling 5 minutes or less. Videos exported under the Launch plan include a FlowEdit watermark. Projects created under this plan may be featured in FlowEdit's website, portfolio, demonstrations, testimonials, advertising, social media, and current or future marketing materials. A valid payment method is required to activate the free trial.",
  },
  {
    marker: "2",
    title: "Production Plan",
    body: "Production includes professional on-site videography. Travel expenses, mileage, airfare, lodging, parking, permits, location fees, equipment rentals, and other production-related costs may be billed separately when applicable. Any anticipated travel or additional production expenses will always be discussed and approved before work begins.",
  },
  {
    marker: "3",
    title: "Starting At Pricing",
    body: "Displayed monthly pricing reflects the effective monthly cost when selecting annual billing and is calculated by dividing the annual subscription total by twelve months. Month-to-month and semi-annual billing options are available at higher effective monthly rates.\n\nAny per-video pricing displayed throughout the website is calculated using an assumed average usage of eight completed videos per month. Subscription plans provide access to FlowEdit's editing capacity rather than guaranteeing a fixed cost per individual video. Actual value per video varies depending on monthly usage, project complexity, video length, revision requirements, and production scope.",
  },
];

export default function PricingPlanDetails() {
  return (
    <section className="mx-auto mt-24 w-full max-w-[1320px] px-6 pb-16 text-left text-[#6B7280] lg:mt-28 lg:px-10">
      <h2 className="mb-8 text-xl font-semibold leading-tight text-gray-700">
        Pricing &amp; Plan Details
      </h2>

      <div className="space-y-8 text-[11px] leading-[1.75] sm:text-xs">
        {details.map((detail) => (
          <section key={detail.marker} className="space-y-2">
            <h3 className="text-xs font-semibold leading-relaxed text-gray-700">
              <sup className="mr-1 align-super text-[9px] leading-none">
                {detail.marker}
              </sup>
              {detail.title}
            </h3>
            {detail.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}
