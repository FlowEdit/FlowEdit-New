"use client";

import { FormEvent, useState } from "react";
import PageHeaderButton from "@/components/shared/PageHeaderButton";

type SupportCategory =
  | "Billing"
  | "Account access"
  | "Subscription questions"
  | "Project questions"
  | "Revision requests"
  | "Technical support";

const supportCategories: SupportCategory[] = [
  "Billing",
  "Account access",
  "Subscription questions",
  "Project questions",
  "Revision requests",
  "Technical support",
];

export default function ContactPage() {
  const [category, setCategory] = useState<SupportCategory>("Billing");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `FlowEdit Support: ${category}`;
    const body = [
      `Business: FlowEdit LLC`,
      `Website: https://flowedit.video`,
      "",
      `Category: ${category}`,
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:hello@flowedit.video?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className='w-full py-24 lg:py-28'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-4xl space-y-10'>
          <div className='space-y-5 text-center'>
            <PageHeaderButton text='Support' />
            <h1 className='text-4xl font-semibold tracking-tight text-black lg:text-5xl'>
              Contact
            </h1>
            <p className='text-base leading-[150%] text-black/70'>
              Reach FlowEdit LLC support at hello@flowedit.video. Typical response time is within one business day.
            </p>
          </div>

          <div className='rounded-2xl bg-white/50 p-6 shadow-[0_10px_10px_rgba(0,0,0,0.08),0_4px_4px_rgba(0,0,0,0.04)] backdrop-blur-[20px] lg:p-8'>
            <div className='mb-8 space-y-1 text-sm text-black/80'>
              <p>Business Name: FlowEdit LLC</p>
              <p>Website: https://flowedit.video</p>
              <p>Support Email: hello@flowedit.video</p>
              <p>Expected Response Time: Within one business day</p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-5'>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                <div className='space-y-2'>
                  <label htmlFor='name' className='text-sm font-medium text-black/80'>
                    Full Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    required
                    className='h-11 w-full rounded-lg border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-[#2670e9]'
                    placeholder='Your name'
                  />
                </div>

                <div className='space-y-2'>
                  <label htmlFor='email' className='text-sm font-medium text-black/80'>
                    Email Address
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    className='h-11 w-full rounded-lg border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-[#2670e9]'
                    placeholder='you@company.com'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <label htmlFor='category' className='text-sm font-medium text-black/80'>
                  Support Category
                </label>
                <select
                  id='category'
                  name='category'
                  value={category}
                  onChange={(event) => setCategory(event.target.value as SupportCategory)}
                  className='h-11 w-full rounded-lg border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-[#2670e9]'
                >
                  {supportCategories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className='space-y-2'>
                <label htmlFor='message' className='text-sm font-medium text-black/80'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={6}
                  className='w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none transition focus:border-[#2670e9]'
                  placeholder='How can we help?'
                />
              </div>

              <button
                type='submit'
                className='inline-flex min-h-11 items-center justify-center rounded-xl bg-[#3E66C0] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_-18px_rgba(37,78,166,0.8)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_-18px_rgba(37,78,166,0.95)] active:translate-y-0 active:scale-[0.99]'
              >
                Send Message
              </button>

              <p className='text-xs leading-6 text-black/60'>
                Submitting opens your email app with a pre-filled message addressed to hello@flowedit.video.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
