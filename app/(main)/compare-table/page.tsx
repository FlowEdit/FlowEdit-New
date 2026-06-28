/** @format */
"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Launch",
    priceLabel: "Completely FREE",
    priceFootnote: "1",
    priceTone: "launch",
  },
  {
    name: "Core",
    pricePrefix: "Starting at",
    priceLabel: "$384/mo",
    priceFootnote: "3",
  },
  {
    name: "Creator",
    pricePrefix: "Starting at",
    priceLabel: "$546/mo",
    priceFootnote: "3",
    highlight: true,
  },
  {
    name: "Studio",
    pricePrefix: "Starting at",
    priceLabel: "$769/mo",
    priceFootnote: "3",
  },
  {
    name: "Production",
    pricePrefix: "Starting at",
    priceLabel: "$875/mo",
    priceFootnote: "3",
  },
];

const rows = [
  {
    label: "Professional Editing",
    values: [true, true, true, true, true],
  },
  {
    label: "Branding Integration",
    values: [true, true, true, true, true],
  },
  {
    label: "Unlimited Revisions",
    values: [false, true, true, true, true],
  },
  {
    label: "Thumbnail Design",
    values: [false, false, true, true, true],
  },
  {
    label: "Priority Delivery",
    values: [false, false, true, true, true],
  },
  {
    label: "SEO Optimization",
    values: [false, false, false, true, true],
  },
  {
    label: "Auto Posting",
    values: [false, false, false, true, true],
  },
  {
    label: "Creative Lead",
    values: [false, false, false, true, true],
  },
  {
    label: "Videography",
    labelFootnote: "2",
    values: [false, false, false, false, true],
  },
  {
    label: "FlowEdit Watermark",
    labelFootnote: "1",
    values: [true, false, false, false, false],
  },
  {
    label: "Free Trial",
    values: ["Unlimited", "21 days", "21 days", "21 days", "7 days"],
    last: true,
  },
];

export default function ComparePlans() {
  return (
    <section className='relative overflow-hidden py-10'>
      {/* 🔹 Background Gradient */}
      <div
        className='pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[800px] z-0'
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #7FCCE9 30.29%, #57b2fc 66.53%, #D6E1EA 88.26%, #FFFFFF 100%)",
        }}
      />

      {/* Optional Blur Image */}
      {/* <Image
        src='/images/compareblur.png'
        alt='compare blur'
        height={400}
        width={1200}
        className='absolute w-full h-[100px] object-cover opacity-80 pointer-events-none z-0'
      /> */}

      <div className='relative z-20'>
        {/* Title */}
        <h2 className='text-center text-4xl font-semibold mb-16'>
          Compare Plans
        </h2>

        {/* Table Wrapper */}
        <div className='relative container mx-auto rounded-3xl bg-[#89cceb]/25 backdrop-blur overflow-hidden p-4 lg:p-16'>
          {/* ✅ TABLE GRID */}
          <div className='w-full overflow-x-auto'>
            <div className='min-w-[950px]'>
              {/* ✅ Header Row */}
              <div className='grid grid-cols-5 gap-[15px] border-b border-white/30'>
                <div />

                {plans.map((p) => (
                  <div
                    key={p.name}
                    className='flex min-h-[104px] flex-col items-center justify-center rounded-t-2xl bg-white/30 px-3 py-4 text-center'>
                    <p className='text-[17px] font-semibold leading-tight text-black/90 whitespace-nowrap'>
                      {p.name}
                    </p>

                    {p.priceTone === "launch" ? (
                      <p className='mt-1 text-[18px] font-extrabold leading-tight whitespace-nowrap text-[#4069E4]'>
                        {p.priceLabel}
                        {p.priceFootnote && (
                          <sup className='ml-0.5 align-super text-[10px] leading-none'>
                            {p.priceFootnote}
                          </sup>
                        )}
                      </p>
                    ) : (
                      <div className='mt-1 flex flex-col items-center gap-0.5'>
                        <span className='text-[11px] font-medium uppercase tracking-[0.08em] text-black/45 whitespace-nowrap'>
                          {p.pricePrefix}
                        </span>
                        <span className='text-[17px] font-bold leading-tight whitespace-nowrap text-[#4069E4]'>
                          {p.priceLabel}
                          {p.priceFootnote && (
                            <sup className='ml-0.5 align-super text-[10px] leading-none'>
                              {p.priceFootnote}
                            </sup>
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* ✅ Body Rows */}
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`grid grid-cols-5 gap-[15px] text-center
                  ${row.last ? "" : "border-b border-white/30"}`}>
                  {/* Left Label Cell */}
                  <div className='py-6 px-4 flex items-center bg-white/20 rounded-'>
                    <p
                      className={`${
                        rowIndex === 0 ?
                          "text-black/60 font-normal"
                        : "text-black font-semibold"
                      }`}>
                      {row.label}
                      {row.labelFootnote && (
                        <sup className='ml-0.5 align-super text-[10px] leading-none'>
                          {row.labelFootnote}
                        </sup>
                      )}
                    </p>
                  </div>

                  {/* Right Plan Cells */}
                  {plans.map((plan, colIndex) => {
                    const highlight = plan.highlight;

                    // ✅ NORMAL ROW VALUES
                    const value = row.values?.[colIndex];

                    return (
                      <div
                        key={plan.name}
                        className={`py-6 px-3 flex items-center justify-center bg-white/10  relative overflow-hidden`}>
                        {/* Highlight blur for Creator */}
                        {highlight && (
                          <div className='absolute inset-0 bg-gradient-to-b from-purple-400/30 via-white/10 to-pink-400/30 blur-2xl' />
                        )}

                        <div className='relative'>
                          {typeof value === "boolean" ?
                            value ?
                              <Check className='text-blue-600' size={22} />
                            : <span className='text-gray-400 text-xl'>—</span>
                          : <span className='font-medium'>{value}</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <p className='text-base font-medium pt-[44px] text-black/80'>
            *Launch includes 1 video per month, footage limited to 5 minutes or
            less. Watermark applied. Plans billed monthly, annually, or
            annually. Unlimited = No cap policy applies
          </p>
        </div>
      </div>
    </section>
  );
}
