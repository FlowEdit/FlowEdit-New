"use client";

import PageHeaderButton from "@/components/shared/PageHeaderButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  bullets?: string[];
};

type FAQSection = {
  title: string;
  items: FAQItem[];
};

const faqSections: FAQSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        question: "What is FlowEdit?",
        answer:
          "FlowEdit is a subscription-based video editing service that gives businesses access to a professional editing team for a predictable monthly price.",
      },
      {
        question: "How does the free trial work?",
        answer:
          "We offer a variety of free trial options, up to 21 days, so you can confirm FlowEdit is the right fit before committing to a subscription. Trial availability and duration may vary based on your selected plan or active promotion.",
      },
      {
        question: "Do I need a credit card?",
        answer:
          "Yes. A valid payment method is required to begin your free trial. You will not be charged until your trial ends unless you choose to upgrade sooner.",
      },
      {
        question: "How quickly can I get started?",
        answer:
          "Most accounts are activated within minutes, so you can submit your first project right away.",
      },
    ],
  },
  {
    title: "Video Editing",
    items: [
      {
        question: "What types of videos do you edit?",
        answer: "We support a wide range of content formats, including:",
        bullets: [
          "YouTube videos",
          "Podcasts",
          "Instagram Reels",
          "YouTube Shorts",
          "TikTok videos",
          "Facebook videos",
          "LinkedIn content",
          "Training videos",
          "Testimonials",
          "Product videos",
          "Real estate videos",
          "Corporate communications",
          "Promotional content",
        ],
      },
      {
        question: "What software do you use?",
        answer: "Our editors use professional industry-standard software, including:",
        bullets: [
          "Final Cut Pro",
          "Adobe Premiere Pro",
          "DaVinci Resolve",
          "Adobe After Effects",
          "Adobe Photoshop",
          "Adobe Illustrator",
        ],
      },
      {
        question: "Can you edit long-form videos?",
        answer:
          "Yes. We edit everything from short-form social media content to podcasts, interviews, webinars, documentaries, and training videos.",
      },
      {
        question: "Can you create Shorts from long-form videos?",
        answer:
          "Yes. Depending on your subscription plan, we can repurpose long-form content into multiple short-form videos optimized for social media.",
      },
    ],
  },
  {
    title: "Project Submission",
    items: [
      {
        question: "How do I submit footage?",
        answer:
          "Upload footage to your preferred cloud storage service (Google Drive, Dropbox, OneDrive, Frame.io, and others) and submit the shared link through your FlowEdit dashboard.",
      },
      {
        question: "Is there a file size limit?",
        answer:
          "There is no practical file size limit. FlowEdit is designed to handle large video projects.",
      },
      {
        question: "Can I submit multiple projects?",
        answer:
          "Yes. The number of projects you can have active at one time depends on your subscription plan.",
      },
      {
        question: "Can I update files after submitting?",
        answer:
          "Yes. Files and instructions can usually be updated as long as editing has not substantially progressed.",
      },
    ],
  },
  {
    title: "Revisions",
    items: [
      {
        question: "How many revisions are included?",
        answer:
          "The Launch plan includes a limited number of revision rounds. Every plan above Launch includes unlimited revisions so we can continue refining your video until it aligns with the approved project scope.",
      },
      {
        question: "What counts as a revision?",
        answer: "Examples include:",
        bullets: [
          "Text updates",
          "Music changes",
          "Timing adjustments",
          "Graphics",
          "Transitions",
          "Color corrections",
          "Minor editing refinements",
        ],
      },
      {
        question: "What if I change the project completely?",
        answer:
          "Significant changes to the original creative direction or project scope may require a new project submission.",
      },
    ],
  },
  {
    title: "Branding",
    items: [
      {
        question: "Can you use my branding?",
        answer:
          "Yes. Upload your logos, fonts, brand colors, graphics, and brand guidelines through your dashboard, and we will apply them consistently across future projects.",
      },
      {
        question: "Can I save brand templates?",
        answer:
          "Yes. Your branding assets remain available for future projects, which speeds up submissions and helps maintain consistency.",
      },
    ],
  },
  {
    title: "Social Media",
    items: [
      {
        question: "Can FlowEdit publish my videos?",
        answer:
          "Automatic publishing is a planned future feature currently in development. Once available, eligible plans will be able to publish approved videos directly to connected social media accounts.",
      },
      {
        question: "Which platforms will be supported?",
        answer: "Planned platform support includes:",
        bullets: ["YouTube", "Instagram", "Facebook", "TikTok"],
      },
      {
        question: "Will connecting my accounts be secure?",
        answer:
          "Yes. When available, integrations will use official OAuth authentication, and FlowEdit will never store your passwords.",
      },
    ],
  },
  {
    title: "Turnaround Time",
    items: [
      {
        question: "How long does editing take?",
        answer:
          "Turnaround time is the period between a completed project submission during normal business hours and delivery of your first working draft. Expected turnaround varies by subscription plan and project complexity.",
      },
      {
        question: "Can I request rush edits?",
        answer: "Priority turnaround is available on select subscription plans.",
      },
    ],
  },
  {
    title: "Billing",
    items: [
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes. You can cancel your subscription before your next billing cycle to avoid future charges.",
      },
      {
        question: "Are there long-term contracts?",
        answer:
          "No. FlowEdit operates on a subscription basis without long-term commitments.",
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer:
          "Yes. You can change plans at any time. Changes take effect according to your billing cycle.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards.",
      },
    ],
  },
  {
    title: "Security & Ownership",
    items: [
      {
        question: "Who owns my footage?",
        answer:
          "You retain full ownership of all original footage and final deliverables.",
      },
      {
        question: "Is my content confidential?",
        answer:
          "Yes. Client content is securely managed and accessible only to authorized FlowEdit team members assigned to your projects.",
      },
      {
        question: "How long do you keep my files?",
        answer:
          "We recommend maintaining your own backups. Project files are retained for a limited period based on your subscription plan.",
      },
    ],
  },
  {
    title: "Production Services",
    items: [
      {
        question: "Does FlowEdit only provide editing?",
        answer:
          "No. We also offer professional on-site video production services in select locations.",
      },
      {
        question: "Can you film at our location?",
        answer:
          "Yes. On-site production is available depending on your location, project requirements, and scheduling availability.",
      },
    ],
  },
];

export default function PricingFaq() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          <PageHeaderButton text="FAQs" />
          <h2 className="text-3xl font-semibold tracking-tight text-black lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-black/70 lg:text-base">
            Answers to the most common questions about FlowEdit pricing,
            delivery, and subscription flexibility.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-xl font-semibold text-black lg:text-2xl">
                {section.title}
              </h3>

              <Accordion type="single" collapsible className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <AccordionItem
                    key={item.question}
                    value={`section-${sectionIndex}-item-${itemIndex}`}
                    className="rounded-xl border-none bg-white/50 px-5 py-2 shadow-[0_10px_10px_rgba(0,0,0,0.08),0_4px_4px_rgba(0,0,0,0.04)] backdrop-blur-[20px]"
                  >
                    <AccordionTrigger className="group py-3 text-left text-base font-medium text-black hover:no-underline [&>svg]:hidden">
                      <span>{item.question}</span>
                      <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-white/40 text-xl leading-none">
                        <span className="block group-data-[state=open]:hidden">
                          +
                        </span>
                        <span className="hidden group-data-[state=open]:block">
                          -
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-4 text-sm leading-relaxed text-black/70 lg:text-base">
                      <p>{item.answer}</p>
                      {item.bullets && item.bullets.length > 0 && (
                        <ul className="list-disc space-y-1 pl-5">
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
