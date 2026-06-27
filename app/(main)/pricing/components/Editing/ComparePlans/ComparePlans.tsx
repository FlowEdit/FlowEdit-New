"use client";

import { useMemo } from "react";
import Row from "./Row";
import Cell from "./Cell";
import { useAppSelector } from "@/redux/hooks";
import { useGetPlansQuery } from "@/redux/features/plansApi";
import ComparePlansModal from "../UpdateComparism";
import Image from "next/image";
import { comparisonRows, planHeaders } from "./comparisonData";
import { Button } from "@/components/ui/button";
import { startCheckout } from "@/lib/stripe/checkoutClient";
import { toast } from "sonner";

import { PlanType as BillingPeriod } from "@/components/shared/ToggleSwitch";

export type PlanType = {
  id: string;
  name: string;
  price: number;
  unlimitedVideos: boolean;
  branding: boolean;
  thumbnails: boolean;
  seo: number;
};

interface ApiPlan {
  id: string;
  type: string;
  per_video: number;
  unlimited_videos: boolean;
  branding: boolean;
  custom_thumbnail: boolean;
  seo_optimization: number;
}

interface Props {
  currentPeriod?: BillingPeriod;
}

export default function ComparePlans({ currentPeriod = "monthly" }: Props) {
  const { data, isLoading } = useGetPlansQuery(undefined);
  const { role } = useAppSelector((state) => state.auth);
  const isAdmin = role === "ADMIN";

  const plans = useMemo(() => {
    if (!data?.data) return [];

    return data.data.map((item: ApiPlan) => ({
      id: item.id,
      name: item.type,
      price: item.per_video,
      unlimitedVideos: item.unlimited_videos,
      branding: item.branding,
      thumbnails: item.custom_thumbnail,
      seo: item.seo_optimization,
    }));
  }, [data]);

  const renderCell = (value: boolean | string | undefined) => {
    if (typeof value === "boolean") {
      return value ? "✓" : "—";
    }
    return value ?? "—";
  };

  const tableColumns =
    "minmax(220px, 1.4fr) repeat(5, minmax(120px, 1fr))";
  const primaryCtaClass =
    "h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg px-4 py-3.5 rounded-xl font-medium transition-all duration-200";

  const handleStartNow = async (planName: string) => {
    try {
      await startCheckout(planName, currentPeriod);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to start checkout. Please try again.";
      toast.error(message);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#89cceb]/25 py-16">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #7FCCE9 30.29%, #57b2fc 66.53%, #D6E1EA 88.26%, #FFFFFF 100%)",
          }}
        />
        <Image
          src='/images/compareblur.png'
          alt='compare blur'
          height={400}
          width={1200}
          className='pointer-events-none absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-80'
        />
      </div>

      <div className="relative z-10">
        <h2 className="text-center text-4xl font-semibold mb-4">
          Compare Plans
        </h2>

        <p className="mx-auto mb-5 max-w-3xl px-4 text-center text-sm leading-[160%] text-black/70 md:text-base">
          Compare flexible service plans to find the solution that&apos;s right for
          you. Whether you&apos;re an individual creator, growing business, or
          enterprise team, FlowEdit offers scalable editing and production
          services designed to fit a wide range of content goals, workflows,
          and budgets. Explore the features below to discover the plan that
          best meets your needs.
        </p>

        <div className="container mx-auto relative rounded-3xl p-4 lg:p-16">
          <div className="flex justify-end mb-6">
            {isAdmin && <ComparePlansModal plans={plans} />}
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[900px]">
              <div
                className="sticky top-0 z-20 grid gap-[15px] border-b border-white/40 bg-[#89cceb]/25 backdrop-blur"
                style={{
                  gridTemplateColumns: tableColumns,
                }}
              >
                <div />
                {planHeaders.map((plan) => (
                  <div
                    key={plan.name}
                    className="flex flex-col items-center justify-center rounded-t-2xl bg-white/30 px-2 py-6 text-center"
                  >
                    <h3 className="mb-4 text-2xl font-bold text-gray-800">{plan.name}</h3>
                    <Button
                      className={primaryCtaClass}
                      onClick={() => handleStartNow(plan.name)}
                    >
                      Start Now
                    </Button>
                  </div>
                ))}
              </div>

              {comparisonRows.map((row) => (
                <Row
                  key={row.label}
                  last={row.last}
                  style={{
                    gridTemplateColumns: tableColumns,
                  }}
                >
                  <Cell left>{row.label}</Cell>
                  {row.values.map((value, index) => (
                    <Cell key={`${row.label}-${index}`}>
                      {renderCell(value)}
                    </Cell>
                  ))}
                </Row>
              ))}
            </div>
          </div>

        </div>
     </div>
    </section>
  );
}

// /** @format */

// import Row from "./Row";
// import Cell from "./Cell";
// import Image from "next/image";
// import ComparePlansModal from "../UpdateComparism";
// import { DialogTrigger } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";

// export default function ComparePlans() {
//   return (
//     <section className='relative overflow-hidden py-10 '>
//       {/* 🔹 MIDDLE BACKGROUND GRADIENT */}
//       <div
//         className='pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[800px] z-0'
//         style={{
//           background:
//             "linear-gradient(180deg, #FFFFFF 0%, #7FCCE9 30.29%, #57b2fc 66.53%, #D6E1EA 88.26%, #FFFFFF 100%)",
//         }}
//       />
//       <Image
//         src='/images/compareblur.png'
//         alt='faq'
//         height={400}
//         width={500}
//         className='absolute w-full h-[700px] '></Image>

//       {/* 🔹 CONTENT ABOVE GRADIENT */}
//       <div className='relative z-20'>
//         {/* Title */}
//         <h2 className='text-center text-4xl font-semibold mb-16'>
//           Compare Plans
//         </h2>

//         {/* Table Wrapper */}
//         <div className='relative  container rounded-3xl bg-[#89cceb]/25 backdrop-blur overflow-hidden p-4 lg:p-16 '>
        
//           {/* <Image
//             src='/images/fullCompare.png'
//             alt='background'
//             width={800}
//             height={500}
//             className='absolute left-[900px] top-[340px] -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none'
//           /> */}

//           {/* Header Row */}
//           <div className='grid grid-cols-5 border-b border-white/40 gap-[15px]'>
//             <div />
//             {["Launch", "Core", "Creator", "Studio"].map((title) => (
//               <div
//                 key={title}
//                 className='py-6 text-center font-medium rounded-t-2xl bg-white/30'>
//                 {title}
//               </div>
//             ))}
//           </div>

//           {/* Rows */}
//           <div className='gap-9 '>
//             {/* Price Row */}
//             <Row className=''>
//               <Cell left>
//                 <div className='text-center'>Per video</div>
//               </Cell>
//               <Cell>
//                 <div>
//                   <p className='text-base md:text-lg lg:text-3xl font-normal lg:font-semibold'>
//                     $0
//                   </p>
//                   <span className='text-sm text-gray-500'>Per video</span>
//                 </div>
//               </Cell>
//               <Cell>
//                 <div className=''>
//                   <p className='text-base md:text-lg lg:text-3xl font-normal lg:font-semibold'>
//                     $79
//                   </p>
//                   <span className='text-sm text-gray-500'>Per video</span>
//                 </div>
//               </Cell>
//               <Cell highlight>
//                 <div>
//                   <p className='text-base md:text-lg lg:text-3xl font-normal lg:font-semibold'>
//                     $112
//                   </p>
//                   <span className='text-sm text-gray-500'>Per video</span>
//                 </div>
//               </Cell>
//               <Cell>
//                 <div>
//                   <p className='text-base md:text-lg lg:text-3xl font-normal lg:font-semibold'>
//                     $158
//                   </p>
//                   <span className='text-sm text-gray-500'>Per video</span>
//                 </div>
//               </Cell>
//             </Row>

//             {/* Feature Rows */}
//             <Row>
//               <Cell left>Unlimited Videos</Cell>
//               <Cell>—</Cell>
//               <Cell>✓</Cell>
//               <Cell highlight>✓</Cell>
//               <Cell>✓</Cell>
//             </Row>

//             <Row>
//               <Cell left>Professional Editing</Cell>
//               <Cell>✓</Cell>
//               <Cell>✓</Cell>
//               <Cell highlight>✓</Cell>
//               <Cell>✓</Cell>
//             </Row>

//             <Row>
//               <Cell left>Branding Included</Cell>
//               <Cell>✓</Cell>
//               <Cell>✓</Cell>
//               <Cell highlight>✓</Cell>
//               <Cell>✓</Cell>
//             </Row>

//             <Row>
//               <Cell left>Custom Thumbnails</Cell>
//               <Cell>—</Cell>
//               <Cell>✓</Cell>
//               <Cell highlight>✓</Cell>
//               <Cell>✓</Cell>
//             </Row>

//             <Row last>
//               <Cell left>SEO Optimization</Cell>
//               <Cell>21 days</Cell>
//               <Cell>21 days</Cell>
//               <Cell highlight>21 days</Cell>
//               <Cell>21 days</Cell>
//             </Row>
//           </div>

//           {/* Footer Note */}
//           <p className='text-base font-medium pt-[44px] text-black/80'>
//             *Launch includes 1 video per month, footage limited to 5 minutes or
//             less. Watermark applied. Plans billed monthly or annually. Unlimited
//             = No cap policy applies.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
