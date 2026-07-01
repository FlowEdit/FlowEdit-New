/** @format */

import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  CloudUpload,
  FileWarning,
  FolderOpen,
  Infinity,
  MessageSquareWarning,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";
import SiteButton from "@/components/shared/SiteButton";
import { LAUNCH_PAYMENT_LINK } from "@/lib/stripe/stripePaymentLinks";

const withoutFlowEdit = [
  {
    title: "Endless Back-and-Forth",
    description:
      "Scattered emails, unclear feedback, and confusing revision rounds.",
    Icon: MessageSquareWarning,
  },
  {
    title: "Unpredictable Turnaround",
    description:
      "Freelancers get busy. Deadlines slip. Your content schedule falls apart.",
    Icon: Clock3,
  },
  {
    title: "Expensive & Inconsistent",
    description:
      "High costs, hidden fees, and wildly different quality every time.",
    Icon: WalletCards,
  },
  {
    title: "Messy File Management",
    description: "Files everywhere. Versions get mixed up. Nothing stays organized.",
    Icon: FileWarning,
  },
  {
    title: "Hard to Scale Content",
    description: "More content means more headaches. Scaling feels impossible.",
    Icon: Infinity,
  },
];

const withFlowEdit = [
  {
    title: "Centralized Dashboard",
    description:
      "Everything in one place. Clear feedback, real-time updates, and full visibility.",
    Icon: FolderOpen,
  },
  {
    title: "Fast, Reliable Turnaround",
    description:
      "Professional editors, on time, every time. Never miss a deadline.",
    Icon: Zap,
  },
  {
    title: "Flat-Rate Pricing",
    description: "Simple monthly plans. No surprises. Always high quality.",
    Icon: WalletCards,
  },
  {
    title: "Organized & Secure",
    description:
      "Upload, manage, and store all your files in one secure workspace.",
    Icon: ShieldCheck,
  },
  {
    title: "Scale Without Limits",
    description: "One request or one hundred—we're built to grow with you.",
    Icon: Sparkles,
  },
];

const ribbonFeatures = [
  {
    title: "Ultimate Flexibility",
    description: "Scale your editing service up or down as your content grows.",
    Icon: Sparkles,
  },
  {
    title: "Upload Any Project",
    description: "Unlimited professional editing for videos of any size, format, or style.",
    Icon: CloudUpload,
  },
  {
    title: "Professional Post-Production",
    description: "Storytelling, color grading, sound design, captions, motion graphics, and final delivery.",
    Icon: Zap,
  },
  {
    title: "Work Directly With Editors",
    description: "Collaborate through your private Flow Edit dashboard from first upload to final approval.",
    Icon: Users,
  },
];

export default function EditingSpeedSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[760px] -translate-y-1/2"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, rgba(126,167,204,0.42) 38%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-semibold text-3xl -tracking-[0.04em] text-black sm:text-4xl md:text-[54px]">
            Video Editing Shouldn&apos;t Slow You Down.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[150%] text-black/70 md:text-lg">
            Flow Edit removes the roadblocks so you can stay focused on creating
            content that grows your brand.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)_minmax(320px,0.95fr)] lg:gap-8">
          <ComparisonColumn
            title="Without Flow Edit"
            subtitle="The struggle is real."
            tone="red"
            items={withoutFlowEdit}
          />

          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/55 shadow-[0_18px_40px_-28px_rgba(38,88,179,0.8)] backdrop-blur-[20px]">
              <ArrowRight className="h-7 w-7 text-[#4069E4]" />
            </div>
          </div>

          <ComparisonColumn
            title="With Flow Edit"
            subtitle="A better way to create content."
            tone="blue"
            items={withFlowEdit}
          />

          <div className="flex h-full items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/home-page/Success Social Post on iPhone.png"
              alt="Flow Edit success social post iPhone mockup"
              className="h-auto w-full max-w-[440px] max-h-[800px] object-contain"
            />
          </div>
        </div>

        <div className="mt-12">
          <TrialRibbon />
        </div>
      </div>
    </section>
  );
}

type ComparisonItem = {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
};

function ComparisonColumn({
  title,
  subtitle,
  tone,
  items,
}: {
  title: string;
  subtitle: string;
  tone: "red" | "blue";
  items: ComparisonItem[];
}) {
  return (
    <div className="rounded-2xl border border-white/35 bg-white/45 p-4 shadow-[0_18px_42px_-34px_rgba(38,88,179,0.78)] backdrop-blur-[20px] sm:p-5">
      <div className="mb-5">
        <h3 className="text-2xl font-semibold text-black md:text-3xl">
          {title}
        </h3>
        <p className="mt-1 text-sm font-medium text-black/60 md:text-base">
          {subtitle}
        </p>
      </div>

      <div className="space-y-3">
        {items.map(({ title: itemTitle, description, Icon }) => (
          <article
            key={itemTitle}
            className="flex gap-3 rounded-xl border border-white/45 bg-white/55 p-4 shadow-[0_10px_24px_-22px_rgba(15,23,42,0.8)]"
          >
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                tone === "red" ?
                  "bg-red-500/10 text-red-500"
                : "bg-[#4069E4]/10 text-[#4069E4]"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-black">
                {itemTitle}
              </h4>
              <p className="mt-1 text-sm leading-[150%] text-black/65">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function TrialRibbon() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.68),rgba(255,255,255,0.52))] py-10 shadow-md backdrop-blur-[20px] sm:py-12">
      <Image
        src="/images/home-page/glow.png"
        alt="glow"
        fill
        className="object-fill"
      />

      <div className="absolute inset-0 bg-white/10 pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-10 md:px-12">
        {/* Heading + CTA row */}
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="max-w-xl">
            <h3 className="text-3xl font-semibold -tracking-[0.04em] text-black sm:text-4xl">
              Try Flow Edit Free for up to 21 Days
            </h3>
            <p className="mt-3 text-sm leading-[150%] text-black/70 sm:text-base">
              Experience unlimited professional video editing, your own client
              dashboard, unlimited revisions, and a dedicated editing
              team—completely risk free.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-3">
            <Link href={LAUNCH_PAYMENT_LINK}>
              <SiteButton className="bg-[#B6C7F5]/30 hover:bg-[#B6C7F5]/30">
                <span className="inline-flex items-center gap-2">
                  Start for Free <ArrowRight className="h-4 w-4" />
                </span>
              </SiteButton>
            </Link>
            <p className="text-xs font-medium text-black/55">
              Up to 21-day free trial • Cancel anytime
            </p>
          </div>
        </div>

        {/* Feature columns */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ribbonFeatures.map(({ title, description, Icon }) => (
            <div key={title} className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4069E4]/10 text-[#4069E4]">
                <Icon className="h-[18px] w-[18px]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-black">{title}</p>
                <p className="mt-0.5 text-xs leading-[150%] text-black/60">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
