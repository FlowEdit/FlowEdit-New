import PageHeaderButton from "@/components/shared/PageHeaderButton";

export default function PrivacyPolicyPage() {
  return (
    <section className='w-full py-24 lg:py-28'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-4xl space-y-10'>
          <div className='space-y-5 text-center'>
            <PageHeaderButton text='Legal' />
            <h1 className='text-4xl font-semibold tracking-tight text-black lg:text-5xl'>
              Privacy Policy
            </h1>
            <p className='text-base leading-[150%] text-black/70'>
              How FlowEdit LLC collects, uses, and protects your information.
            </p>
          </div>

          <div className='space-y-6 rounded-2xl bg-white/50 p-6 shadow-[0_10px_10px_rgba(0,0,0,0.08),0_4px_4px_rgba(0,0,0,0.04)] backdrop-blur-[20px] lg:p-8'>
            <p className='text-base leading-[170%] text-black/80'>
              This Privacy Policy explains how FlowEdit LLC (&quot;FlowEdit,&quot; &quot;we,&quot; &quot;our,&quot;)
              collects, uses, and safeguards information when you use
              https://flowedit.video and related services.
            </p>

            <div className='space-y-7'>
              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>1. Information We Collect</h2>
                <p className='text-black/80'>1.1 Contact details such as name, email address, and company information you provide through forms, checkout, or support.</p>
                <p className='text-black/80'>1.2 Account and subscription details, including selected plan, billing period, and service preferences.</p>
                <p className='text-black/80'>1.3 Project information you upload or submit, including footage, revision notes, brand assets, and production instructions.</p>
                <p className='text-black/80'>1.4 Device, browser, and usage data collected through cookies, analytics tools, and similar technologies.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>2. How We Use Information</h2>
                <p className='text-black/80'>2.1 To deliver and improve FlowEdit services, including project intake, editing workflows, communication, and support.</p>
                <p className='text-black/80'>2.2 To process subscriptions, manage billing, and send service notifications.</p>
                <p className='text-black/80'>2.3 To monitor site performance, understand engagement trends, and improve user experience.</p>
                <p className='text-black/80'>2.4 To comply with legal obligations and enforce our terms and policies.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>3. Payments and Stripe</h2>
                <p className='text-black/80'>3.1 Subscription payments are processed by Stripe.</p>
                <p className='text-black/80'>3.2 FlowEdit does not store full payment card numbers on our servers.</p>
                <p className='text-black/80'>3.3 Billing data is handled according to Stripe&apos;s policies and security standards.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>4. Cookies and Analytics</h2>
                <p className='text-black/80'>4.1 We use cookies and similar technologies to support site functionality and improve performance.</p>
                <p className='text-black/80'>4.2 Analytics tools may collect information such as pages viewed, referral sources, and interaction events.</p>
                <p className='text-black/80'>4.3 You can manage cookies through your browser settings, though some features may be limited if disabled.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>5. Third-Party Integrations</h2>
                <p className='text-black/80'>5.1 FlowEdit may integrate with third-party platforms including Google, Meta, TikTok, YouTube, and other service providers to support marketing, analytics, and campaign workflows.</p>
                <p className='text-black/80'>5.2 These providers may process data in accordance with their own privacy policies.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>6. Data Security</h2>
                <p className='text-black/80'>6.1 We use commercially reasonable safeguards designed to protect personal and project-related information.</p>
                <p className='text-black/80'>6.2 No method of transmission or storage is completely secure, but FlowEdit continuously works to reduce risk and protect customer data.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>7. Customer Rights</h2>
                <p className='text-black/80'>7.1 You may request access to, correction of, or deletion of your personal information, subject to legal and operational requirements.</p>
                <p className='text-black/80'>7.2 You may request account-related data updates or unsubscribe from non-essential communications at any time.</p>
              </section>

              <section className='space-y-3'>
                <h2 className='text-2xl font-semibold text-black'>8. Contact Us</h2>
                <p className='text-black/80'>For privacy questions or requests, contact FlowEdit LLC at hello@flowedit.video.</p>
                <p className='text-black/80'>Website: https://flowedit.video</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
