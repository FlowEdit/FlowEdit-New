import Image from "next/image";
import Link from "next/link";
import PricingCard from "@/app/(main)/pricing/components/Pricing/PricingCard";
import Footer from "@/components/shared/Footer/Footer";
import { LAUNCH_PAYMENT_LINK } from "@/lib/stripe/stripePaymentLinks";

const trustedPlatforms = [
  "YouTube",
  "TikTok",
  "Instagram",
  "Facebook",
  "LinkedIn",
  "Vimeo",
];

const featureCards = [
  {
    title: "Fast Turnaround",
    description: "Get polished edits quickly so your publishing schedule never slows down.",
  },
  {
    title: "Optimized for Every Platform",
    description: "Receive versions built for short-form, long-form, and ad-ready delivery.",
  },
  {
    title: "Unlimited Requests",
    description: "Keep projects moving with a steady queue tailored to your content goals.",
  },
  {
    title: "Premium Quality",
    description: "Professional storytelling, pacing, and finishing designed to elevate your brand.",
  },
];

const whyCards = [
  {
    title: "Save Time",
    description: "Focus on recording, strategy, and growth while FlowEdit handles post-production.",
  },
  {
    title: "Grow Faster",
    description: "Publish consistently with quality content that helps build audience momentum.",
  },
  {
    title: "Stress Less",
    description: "Replace editing bottlenecks with a reliable workflow and predictable delivery.",
  },
  {
    title: "Dedicated Editors",
    description: "Work with a professional team that learns your style and content priorities.",
  },
];

export default function WelcomePage() {
  return (
    <div className='min-h-screen bg-white'>
      <section className='relative overflow-hidden bg-[linear-gradient(180deg,#4069E4_0%,#5C7DF0_34%,#7192F8_64%,#8FB0FF_84%,#DCE8FF_100%)] text-white'>
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute -top-14 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#AFC2FF]/35 blur-3xl' />
          <div className='absolute right-0 top-16 h-64 w-64 rounded-full bg-[#9BC7FF]/30 blur-3xl' />
          <div className='absolute left-0 bottom-10 h-64 w-64 rounded-full bg-[#8DB0FF]/30 blur-3xl' />
        </div>

        <header className='relative z-20 container mx-auto h-[72px] px-4'>
          <div className='relative hidden h-full items-center lg:flex'>
            <Link href='/' className='absolute left-0 top-1/2 -translate-y-1/2 text-xl font-medium'>
              Flow Edit
            </Link>

            <nav className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-10 text-base font-medium'>
              <Link href='/'>Home</Link>
              <Link href='/pricing'>Pricing</Link>
              <Link href='/portfolio'>Portfolio</Link>
            </nav>

            <div className='absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-4'>
              <Link
                href='/login'
                className='rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20'
              >
                Sign In
              </Link>
              <Link
                href={LAUNCH_PAYMENT_LINK}
                className='rounded-xl bg-[#B9CBFF] px-5 py-2 text-sm font-semibold text-[#0E1A45] shadow-lg transition hover:opacity-95'
              >
                Start for Free
              </Link>
            </div>
          </div>

          <div className='flex h-full items-center justify-between lg:hidden'>
            <Link href='/' className='text-xl font-medium'>
              Flow Edit
            </Link>
            <div className='flex items-center gap-2'>
              <Link href='/login' className='rounded-lg border border-white/25 px-3 py-2 text-sm'>
                Sign In
              </Link>
              <Link href={LAUNCH_PAYMENT_LINK} className='rounded-lg bg-[#B9CBFF] px-3 py-2 text-sm font-semibold text-[#0E1A45]'>
                Start for Free
              </Link>
            </div>
          </div>
        </header>

        <div className='relative z-10 container mx-auto grid min-h-[760px] grid-cols-1 items-center gap-12 px-4 pb-24 pt-8 lg:min-h-[860px] lg:grid-cols-[45%_55%] lg:gap-10 lg:pb-28 lg:pt-10'>
          <div className='max-w-xl'>
            <span className='inline-flex items-center rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-xs font-semibold tracking-[0.08em] text-white/95'>
              Loved by 4.5 out of 5 Creators ★ ★ ★ ★ ★
            </span>
            <h1 className='text-4xl font-semibold leading-[115%] tracking-[-0.04em] sm:text-5xl lg:text-6xl'>
              Post Better Videos-
              <br />
              Faster. Skip the Editing.
            </h1>
            <p className='mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg'>
              We&apos;ll edit anything, fast-optimized for any platform. Just drop your footage, and we&apos;ll turn it into
              content that gets views and drives growth-with zero effort on your part.
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Link
                href={LAUNCH_PAYMENT_LINK}
                className='inline-flex min-h-11 items-center justify-center rounded-xl bg-[#B9CBFF] px-6 py-3 text-sm font-semibold text-[#0E1A45] shadow-[0_18px_40px_-20px_rgba(114,157,255,0.9)] transition hover:-translate-y-0.5'
              >
                Start for Free
              </Link>
              <Link
                href='#pricing-preview'
                className='inline-flex min-h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20'
              >
                View Pricing
              </Link>
            </div>

            <div className='mt-8 flex flex-wrap gap-2'>
              {[
                "14-Day Free Trial",
                "No obligation",
                "Cancel Anytime",
                "No long-term contracts",
                "Professional Editors",
                "Fast turnaround",
              ].map((badge) => (
                <span
                  key={badge}
                  className='rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90'
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className='relative mx-auto w-full max-w-[820px] lg:ml-auto'>
            <div className='relative rounded-[34px] border border-white/25 bg-[#111f53]/55 p-4 shadow-[0_40px_90px_-40px_rgba(11,23,62,0.95)] backdrop-blur'>
              <div className='overflow-hidden rounded-[24px] border border-white/15'>
                <Image
                  src='/images/home-page/laptop.png'
                  alt='FlowEdit laptop editor preview'
                  width={1200}
                  height={780}
                  className='h-auto w-full'
                  priority
                  loading='eager'
                />
              </div>

              <div className='pointer-events-none absolute left-[16%] top-[18%] h-[48%] w-[64%] rounded-[18px] border border-white/25 bg-black/30'>
                <div className='absolute inset-y-0 left-0 w-1/2 rounded-l-[18px] border-r border-white/20 bg-[linear-gradient(180deg,rgba(168,182,220,0.35),rgba(53,70,112,0.62))]' />
                <div className='absolute inset-y-0 right-0 w-1/2 rounded-r-[18px] bg-[linear-gradient(180deg,rgba(127,165,255,0.4),rgba(40,83,174,0.72))]' />
                <div className='absolute left-2 top-2 rounded-full bg-black/45 px-2 py-1 text-[9px] font-semibold tracking-[0.1em] text-white/90 sm:text-[10px]'>
                  YOUR FOOTAGE
                </div>
                <div className='absolute right-2 top-2 rounded-full bg-black/45 px-2 py-1 text-[9px] font-semibold tracking-[0.1em] text-white/90 sm:text-[10px]'>
                  FINISHED VIDEO
                </div>
                <div className='absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-white/65' />
              </div>

              <div className='pointer-events-none absolute left-[20%] bottom-[18%] h-[9%] w-[58%] rounded-xl border border-white/20 bg-[linear-gradient(90deg,rgba(72,109,192,0.7),rgba(117,160,255,0.75),rgba(60,99,183,0.7))]' />

              <div className='absolute -bottom-6 right-4 w-[190px] rounded-[28px] border border-white/25 bg-[#13245d]/95 p-3 shadow-[0_24px_52px_-28px_rgba(8,17,45,1)] sm:-bottom-8 sm:right-6 sm:w-[220px]'>
                <div className='mb-2 h-1.5 w-12 rounded-full bg-white/30 mx-auto' />
                <div className='h-[230px] overflow-hidden rounded-[20px] border border-white/15 sm:h-[270px]'>
                  <Image
                    src='/images/home-page/workflow-2.png'
                    alt='Finished vertical video preview'
                    width={360}
                    height={640}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='mt-2 flex justify-center gap-1.5'>
                  <span className='h-2.5 w-2.5 rounded-full bg-white/75' />
                  <span className='h-2.5 w-2.5 rounded-full bg-white/75' />
                  <span className='h-2.5 w-2.5 rounded-full bg-white/75' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='border-y border-black/5 bg-[#F6F9FF] py-8'>
        <div className='container mx-auto px-4'>
          <p className='text-center text-sm font-medium text-black/65'>
            Trusted by creators, businesses, and brands
          </p>
          <div className='mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4'>
            {trustedPlatforms.map((platform) => (
              <span
                key={platform}
                className='rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-black/50'
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className='py-18 lg:py-22'>
        <div className='container mx-auto grid grid-cols-1 gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
          <div>
            <h2 className='text-3xl font-semibold tracking-tight text-[#0E1A45] sm:text-4xl'>
              Professional video editing that drives results.
            </h2>
            <p className='mt-4 max-w-2xl text-base leading-7 text-black/70'>
              We help creators and businesses save time, stay consistent, and grow their audience with high-quality
              video content.
            </p>

            <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2'>
              {featureCards.map((feature) => (
                <article
                  key={feature.title}
                  className='rounded-2xl border border-[#DCE5FF] bg-white p-5 shadow-[0_18px_40px_-30px_rgba(38,88,179,0.7)]'
                >
                  <h3 className='text-lg font-semibold text-[#0E1A45]'>{feature.title}</h3>
                  <p className='mt-2 text-sm leading-6 text-black/65'>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className='rounded-3xl border border-[#DFE8FF] bg-gradient-to-br from-[#F8FBFF] to-[#EEF4FF] p-4 shadow-[0_30px_50px_-35px_rgba(36,88,183,0.8)] sm:p-6'>
            <div className='overflow-hidden rounded-2xl border border-[#DBE6FF] bg-white'>
              <Image
                src='/images/home-page/workflow-3.png'
                alt='FlowEdit editor at desk preview'
                width={960}
                height={640}
                className='h-auto w-full'
              />
            </div>
            <div className='mt-4 rounded-xl border border-[#DBE6FF] bg-white p-4'>
              <p className='text-sm font-semibold text-[#1B3570]'>Workflow Snapshot</p>
              <p className='mt-1 text-sm leading-6 text-black/65'>
                Intake -&gt; Editing -&gt; Review -&gt; Revision -&gt; Final Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='pricing-preview' className='scroll-mt-24 bg-[#F8FAFF] py-18 lg:py-22'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-3xl font-semibold tracking-tight text-[#0E1A45] sm:text-4xl'>
              Simple plans. Powerful results.
            </h2>
            <p className='mt-4 text-base leading-7 text-black/70'>
              Choose the plan that fits your content workflow.
            </p>
          </div>
        </div>
        <PricingCard />
      </section>

      <section className='py-18 lg:py-22'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-3xl font-semibold tracking-tight text-[#0E1A45] sm:text-4xl'>
              More content. Less stress. Better results.
            </h2>
          </div>

          <div className='mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {whyCards.map((item) => (
              <article
                key={item.title}
                className='rounded-2xl border border-[#E1E9FF] bg-white p-6 shadow-[0_18px_38px_-30px_rgba(42,88,179,0.65)]'
              >
                <h3 className='text-lg font-semibold text-[#0E1A45]'>{item.title}</h3>
                <p className='mt-2 text-sm leading-6 text-black/65'>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='pb-20'>
        <div className='container mx-auto px-4'>
          <div className='rounded-3xl border border-[#DCE7FF] bg-gradient-to-r from-[#F3F7FF] to-[#ECF3FF] px-6 py-10 text-center shadow-[0_24px_50px_-36px_rgba(40,88,182,0.8)] sm:px-10'>
            <h3 className='text-2xl font-semibold text-[#0E1A45] sm:text-3xl'>
              Professional editing. No long-term contracts.
            </h3>
            <p className='mx-auto mt-4 max-w-3xl text-sm leading-7 text-black/70 sm:text-base'>
              Cancel anytime before your trial ends. Your payment method will not be charged until your applicable
              free trial period expires.
            </p>
            <div className='mt-7'>
              <Link
                href={LAUNCH_PAYMENT_LINK}
                className='inline-flex min-h-11 items-center justify-center rounded-xl bg-[#3E66C0] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_-20px_rgba(37,78,166,0.9)] transition hover:-translate-y-0.5'
              >
                Start Your Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
