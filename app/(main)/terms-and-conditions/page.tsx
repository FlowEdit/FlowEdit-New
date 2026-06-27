"use client";

import PageHeaderButton from "@/components/shared/PageHeaderButton";

export default function TermsAndConditionsPage() {
  return (
    <section className='w-full py-24 lg:py-28'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-4xl space-y-10'>
          <div className='space-y-5 text-center'>
            <PageHeaderButton text='Legal' />
            <h1 className='text-4xl font-semibold tracking-tight text-black lg:text-5xl'>
              Terms & Conditions
            </h1>
            <p className='text-base leading-[150%] text-black/70'>
              Subscription-Based Video Editing Services
            </p>
          </div>

          <div className='space-y-6 rounded-2xl bg-white/50 p-6 shadow-[0_10px_10px_rgba(0,0,0,0.08),0_4px_4px_rgba(0,0,0,0.04)] backdrop-blur-[20px] lg:p-8'>
            <p className='text-base leading-[170%] text-black/80'>
              These Terms & Conditions (&quot;Agreement&quot;) govern your use of the
              subscription-based video editing and production services
              (&quot;Services&quot;) provided by FlowEdit LLC (&quot;FlowEdit&quot;). By
              subscribing to or using the Services, you agree to be bound by this
              Agreement. If you do not agree to these terms, do not use the
              Services.
            </p>

            <div className='space-y-7'>
              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>1. Subscription</h2>
                <p className='text-black/80'>1.1 Upon subscribing, you receive access to the FlowEdit services included within your selected subscription plan.</p>
                <p className='text-black/80'>1.2 Your subscription begins on the date payment is successfully processed and continues for the billing period selected during checkout.</p>
                <p className='text-black/80'>1.3 Subscriptions automatically renew unless cancelled before the next billing date.</p>
                <p className='text-black/80'>1.4 FlowEdit reserves the right to modify subscription plans, pricing, included services, or platform functionality at any time. Existing subscriptions will continue under their current billing terms until renewal unless otherwise communicated.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>2. User Responsibilities</h2>
                <p className='text-black/80'>2.1 You are responsible for maintaining the security of your account credentials.</p>
                <p className='text-black/80'>2.2 You agree not to use FlowEdit for any unlawful or unauthorized purpose, including infringement of intellectual property rights.</p>
                <p className='text-black/80'>2.3 You may not upload content that is illegal, defamatory, abusive, hateful, or otherwise prohibited by applicable law.</p>
                <p className='text-black/80'>2.4 You represent that you own or have permission to use all media submitted for editing.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>3. Intellectual Property</h2>
                <p className='text-black/80'>3.1 All software, branding, website content, workflows, and proprietary systems remain the intellectual property of FlowEdit.</p>
                <p className='text-black/80'>3.2 You retain ownership of all original media you upload.</p>
                <p className='text-black/80'>3.3 You grant FlowEdit a limited, non-exclusive, worldwide, royalty-free license to use your submitted content solely for the purpose of providing the Services.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>4. Payment & Billing</h2>
                <p className='text-black/80'>4.1 Subscription fees are billed according to the plan selected during checkout.</p>
                <p className='text-black/80'>4.2 Payments are securely processed through Stripe.</p>
                <p className='text-black/80'>4.3 Failure to pay may result in suspension or cancellation of Services.</p>
                <p className='text-black/80'>4.4 Subscription fees are non-refundable except where required by law or otherwise expressly stated by FlowEdit.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>5. Service Availability</h2>
                <p className='text-black/80'>5.1 FlowEdit strives to provide timely turnaround based upon each subscription plan but does not guarantee completion times for every request.</p>
                <p className='text-black/80'>5.2 Delivery estimates may vary based on request complexity, revisions, holidays, or unusually high demand.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>6. Storage & Backup</h2>
                <p className='text-black/80'>6.1 Clients are solely responsible for maintaining backup copies of all original footage.</p>
                <p className='text-black/80'>6.2 FlowEdit does not guarantee long-term storage of uploaded or completed project files.</p>
                <p className='text-black/80'>6.3 Completed projects and uploaded media may be removed after a reasonable retention period.</p>
                <p className='text-black/80'>6.4 FlowEdit is not responsible for data loss resulting from failure to maintain independent backups.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>7. Marketing Use</h2>
                <p className='text-black/80'>7.1 FlowEdit may display completed work in portfolios, social media, advertising, or promotional materials.</p>
                <p className='text-black/80'>7.2 This may include excerpts, screenshots, edited videos, or thumbnails.</p>
                <p className='text-black/80'>7.3 Clients may opt out of marketing use by providing written notice.</p>
                <p className='text-black/80'>7.4 FlowEdit will make commercially reasonable efforts to honor future opt-out requests but cannot remove materials already published.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>8. Videography Services</h2>
                <p className='text-black/80'>8.1 For plans including on-site production, scheduling is subject to crew availability and travel requirements.</p>
                <p className='text-black/80'>8.2 Travel expenses or additional production costs may apply when outlined in a proposal or agreement.</p>
                <p className='text-black/80'>8.3 Weather, venue restrictions, or client scheduling changes may require rescheduling.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>9. Limitation of Liability</h2>
                <p className='text-black/80'>9.1 Services are provided &quot;as is&quot; and &quot;as available.&quot;</p>
                <p className='text-black/80'>9.2 FlowEdit makes no warranties regarding uninterrupted service or error-free operation.</p>
                <p className='text-black/80'>9.3 To the fullest extent permitted by law, FlowEdit shall not be liable for indirect, incidental, consequential, or special damages, including lost profits, lost business opportunities, or loss of data.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>10. Termination</h2>
                <p className='text-black/80'>10.1 Cancellation or pause options are available only where permitted by the selected subscription plan.</p>
                <p className='text-black/80'>10.2 FlowEdit may suspend or terminate Services for violations of this Agreement.</p>
                <p className='text-black/80'>10.3 Upon termination, access to project files, requests, and related materials may be removed.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>11. General Provisions</h2>
                <p className='text-black/80'>11.1 This Agreement constitutes the entire agreement between you and FlowEdit regarding the Services.</p>
                <p className='text-black/80'>11.2 FlowEdit may assign or transfer its rights under this Agreement.</p>
                <p className='text-black/80'>11.3 If any provision is found unenforceable, the remaining provisions remain in effect.</p>
                <p className='text-black/80'>11.4 These Terms shall be governed by the laws of the State of Utah, without regard to conflict of law principles.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
