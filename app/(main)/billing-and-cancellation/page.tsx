import PageHeaderButton from "@/components/shared/PageHeaderButton";

export default function BillingAndCancellationPage() {
  return (
    <section className='w-full py-24 lg:py-28'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-4xl space-y-10'>
          <div className='space-y-5 text-center'>
            <PageHeaderButton text='Legal' />
            <h1 className='text-4xl font-semibold tracking-tight text-black lg:text-5xl'>
              Billing & Cancellation Policy
            </h1>
            <p className='text-base leading-[150%] text-black/70'>
              Clear, transparent billing terms for FlowEdit subscriptions.
            </p>
          </div>

          <div className='space-y-6 rounded-2xl bg-white/50 p-6 shadow-[0_10px_10px_rgba(0,0,0,0.08),0_4px_4px_rgba(0,0,0,0.04)] backdrop-blur-[20px] lg:p-8'>
            <p className='text-base leading-[170%] text-black/80'>
              This Billing & Cancellation Policy explains how subscription billing,
              trial periods, and cancellations work for FlowEdit LLC services.
            </p>

            <div className='space-y-7'>
              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>1. Free Trial and Subscription Start</h2>
                <p className='text-black/80'>1.1 Eligible FlowEdit plans may begin with a free trial period.</p>
                <p className='text-black/80'>1.2 Trial length varies depending on the selected plan and billing period.</p>
                <p className='text-black/80'>1.3 At the end of the trial, the selected subscription begins automatically and recurring billing starts unless cancelled before trial expiration.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>2. Billing and Renewals</h2>
                <p className='text-black/80'>2.1 Subscriptions renew automatically based on the billing cadence selected at checkout.</p>
                <p className='text-black/80'>2.2 You authorize recurring charges for your selected plan until cancellation is completed.</p>
                <p className='text-black/80'>2.3 Customers are responsible for managing billing status and cancellation timing before renewal dates.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>3. Non-Refundable Charges</h2>
                <p className='text-black/80'>3.1 Payments are non-refundable once a billing cycle has started.</p>
                <p className='text-black/80'>3.2 Cancelling prevents future renewals but does not reverse or refund charges already processed.</p>
                <p className='text-black/80'>3.3 Exceptions may only apply where required by law.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>4. How to Cancel</h2>
                <p className='text-black/80'>4.1 You may manage or cancel your subscription from your account when available.</p>
                <p className='text-black/80'>4.2 You may also request cancellation by contacting FlowEdit support at hello@flowedit.video.</p>
                <p className='text-black/80'>4.3 Cancellation requests should be submitted before the trial end or next renewal date to avoid additional billing.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>5. Contact</h2>
                <p className='text-black/80'>For billing and cancellation support, contact FlowEdit LLC at hello@flowedit.video.</p>
                <p className='text-black/80'>Website: https://flowedit.video</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
