import Link from "next/link";
import styles from "./client-welcome.module.css";

type ClientWelcomePageProps = {
  searchParams?: Promise<{
    plan?: string;
    period?: string;
  }>;
};

const formatValue = (value: string) => {
  if (!value) return "";
  return value
    .replace(/[-_]+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const ClientWelcomePage = async ({ searchParams }: ClientWelcomePageProps) => {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const selectedPlan = resolvedSearchParams?.plan
    ? formatValue(resolvedSearchParams.plan)
    : null;
  const selectedPeriod = resolvedSearchParams?.period
    ? formatValue(resolvedSearchParams.period)
    : null;

  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_8%,rgba(99,145,255,0.22),transparent_40%),radial-gradient(circle_at_88%_85%,rgba(133,170,255,0.2),transparent_38%),linear-gradient(to_bottom,#edf3ff_0%,#f8fbff_50%,#ffffff_100%)] py-14 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#6D9AFF]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-6 h-56 w-56 rounded-full bg-[#C6D8FF]/40 blur-3xl" />

      <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#D8E4FF] bg-white/85 p-6 shadow-[0_20px_60px_-30px_rgba(58,102,193,0.45)] backdrop-blur-sm sm:p-10 lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center rounded-full border border-[#C8D9FF] bg-[#F1F6FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#3C5B99]">
              Welcome
            </p>

            <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-[#102349] sm:text-4xl lg:text-5xl">
              Welcome to FlowEdit. We&apos;re getting everything ready for you.
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-7 text-[#344A73] sm:text-lg">
              The FlowEdit Member Portal is currently under development. We&apos;re building a faster, more streamlined
              experience for submitting projects, reviewing edits, managing brand assets, and tracking every stage of
              production.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-7 text-[#445A84]">
              While we complete the portal, you can begin using FlowEdit immediately by submitting project requests
              through our intake form below.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#556B94] sm:text-base">
              Once the Member Portal is ready, we&apos;ll notify you by email and your account will automatically gain
              access.
            </p>

            <div className="mx-auto mt-7 max-w-xl">
              <p className="text-sm font-medium text-[#4A6393]">Building your Member Portal</p>
              <div className={`mt-3 h-1.5 overflow-hidden rounded-full bg-[#DCE8FF] ${styles.loadingTrack}`}>
                <div className={`h-full w-1/2 rounded-full bg-gradient-to-r from-[#7FA7FF] via-[#C7DAFF] to-[#6D97F5] ${styles.loadingShimmer}`} />
              </div>
            </div>

            {selectedPlan && selectedPeriod && (
              <p className="mx-auto mt-6 inline-flex rounded-full border border-[#CCDAFF] bg-[#F8FAFF] px-4 py-1.5 text-sm font-medium text-[#2E4675]">
                Selected plan: {selectedPlan} · {selectedPeriod}
              </p>
            )}

            <div className="mt-8 flex justify-center">
              <Link
                href="https://forms.monday.com/forms/f57f0eddcafa53cd7406844ff593a669?r=use1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#3E66C0] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_-18px_rgba(37,78,166,0.8)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_-18px_rgba(37,78,166,0.95)] active:translate-y-0 active:scale-[0.99]"
              >
                Submit Your First Request
              </Link>
            </div>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#556B94] sm:text-base">
              Save this link for future project submissions while the Member Portal is under development. We&apos;ll email
              you as soon as portal access becomes available.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-[#D6E3FF] bg-gradient-to-br from-[#FDFEFF] to-[#F5F8FF] p-5 sm:mt-14 sm:p-7 lg:p-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-[#163263] sm:text-3xl">
                What&apos;s Coming to Your Member Portal
              </h2>
              <p className="mt-4 text-base leading-7 text-[#3E5782]">
                Everything you need to manage your video production in one place.
              </p>
            </div>

            <div className="mt-7 grid gap-4 rounded-2xl border border-[#CFE0FF] bg-white p-4 shadow-[0_14px_34px_-22px_rgba(48,93,177,0.8)] sm:grid-cols-2 lg:grid-cols-4 sm:p-6">
              <div className="rounded-xl border border-[#E3ECFF] bg-[#F9FBFF] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#4B679A]">Submit Projects</h3>
                <p className="mt-2 text-sm text-[#4D648D]">Upload footage, editing instructions, assets, and deadlines from one location.</p>
              </div>
              <div className="rounded-xl border border-[#E3ECFF] bg-[#F9FBFF] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#4B679A]">Review Drafts</h3>
                <p className="mt-2 text-sm text-[#4D648D]">Preview edits, leave timestamped feedback, and approve videos.</p>
              </div>
              <div className="rounded-xl border border-[#E3ECFF] bg-[#F9FBFF] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#4B679A]">Revision Requests</h3>
                <p className="mt-2 text-sm text-[#4D648D]">Submit revisions without lengthy email threads.</p>
              </div>
              <div className="rounded-xl border border-[#E3ECFF] bg-[#F9FBFF] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#4B679A]">Brand Assets</h3>
                <p className="mt-2 text-sm text-[#4D648D]">Store logos, fonts, colors, music, and reference material for every project.</p>
              </div>
              <div className="rounded-xl border border-[#E3ECFF] bg-[#F9FBFF] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#4B679A]">Project Tracking</h3>
                <p className="mt-2 text-sm text-[#4D648D]">Monitor the status of every edit from submission through final delivery.</p>
              </div>
              <div className="rounded-xl border border-[#E3ECFF] bg-[#F9FBFF] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#4B679A]">Team Collaboration</h3>
                <p className="mt-2 text-sm text-[#4D648D]">Communicate with the FlowEdit team in one organized workspace.</p>
              </div>
              <div className="rounded-xl border border-[#E3ECFF] bg-[#F9FBFF] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#4B679A]">Secure File Delivery</h3>
                <p className="mt-2 text-sm text-[#4D648D]">Download completed videos and project files anytime.</p>
              </div>
              <div className="rounded-xl border border-[#E3ECFF] bg-[#F9FBFF] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#4B679A]">Priority Support</h3>
                <p className="mt-2 text-sm text-[#4D648D]">Receive updates, announcements, and account notifications directly inside your portal.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ClientWelcomePage;
