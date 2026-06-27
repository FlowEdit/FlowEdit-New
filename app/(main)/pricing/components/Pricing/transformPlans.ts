// utils/transformPlans.ts

import { BackendResponse, Plan, PlanType, PeriodType } from "./subscription";

// Static UI data for features and descriptions
export const staticPlanData: Plan[] = [
  {
    id: 1,
    title: "CORE",
    desc: {
      monthly: 629,
      semiannual: 3057,
      annual: 4604,
    },
    prices: {
      monthly: 79,
      semiannual: 64,
      annual: 51,
    },
    features: [
      { text: "Modern Motion Graphics", type: "check" },
      { text: "Professional Color Grading", type: "check" },
      { text: "Licensed Royalty-Free Music", type: "check" },
      { text: "Branding Integration", type: "check" },
      { text: "Unlimited Revisions", type: "check" },
      { text: "Thumbnail Design", type: "minus" },
      { text: "Priority Delivery", type: "minus" },
      { text: "SEO Optimization", type: "minus" },
      { text: "Auto Posting", type: "minus" },
      { text: "Creative Lead", type: "minus" },
      { text: "Videography", type: "minus" },
    ],
  },
  {
    id: 2,
    title: "Creator",
    desc: {
      monthly: 895,
      semiannual: 4350,
      annual: 6551,
    },
    prices: {
      monthly: 112,
      semiannual: 92,
      annual: 73,
    },
    glow: true,
    isPopular: true,
    features: [
      { text: "Modern Motion Graphics", type: "check" },
      { text: "Professional Color Grading", type: "check" },
      { text: "Licensed Royalty-Free Music", type: "check" },
      { text: "Branding Integration", type: "check" },
      { text: "Unlimited Revisions", type: "check" },
      { text: "Thumbnail Design", type: "check" },
      { text: "Priority Delivery", type: "check" },
      { text: "SEO Optimization", type: "minus" },
      { text: "Auto Posting", type: "minus" },
      { text: "Creative Lead", type: "minus" },
      { text: "Videography", type: "minus" },
    ],
  },
  {
    id: 3,
    title: "Studio",
    desc: {
      monthly: 1261,
      semiannual: 6128,
      annual: 9231,
    },
    prices: {
      monthly: 158,
      semiannual: 129,
      annual: 102,
    },
    features: [
      { text: "Modern Motion Graphics", type: "check" },
      { text: "Professional Color Grading", type: "check" },
      { text: "Licensed Royalty-Free Music", type: "check" },
      { text: "Branding Integration", type: "check" },
      { text: "Unlimited Revisions", type: "check" },
      { text: "Thumbnail Design", type: "check" },
      { text: "Priority Delivery", type: "check" },
      { text: "SEO Optimization", type: "check" },
      { text: "Auto Posting", type: "check" },
      { text: "Creative Lead", type: "check" },
      { text: "Videography", type: "minus" },
    ],
  },
];
export const transformBackendToPlans = (backendData: BackendResponse): Plan[] => {
  if (!backendData?.data || backendData.data.length === 0) {
    return staticPlanData;
  }

  // Group prices by plan
  const groupedPrices = backendData.data.reduce((acc, item) => {
    const planName = item.plan;
    const interval = item.interval.toLowerCase() as PeriodType;
    
    if (!acc[planName]) {
      acc[planName] = {} as Record<PeriodType, number>;
    }
    
    acc[planName][interval] = Number(item.price);
    return acc;
  }, {} as Record<PlanType, Record<PeriodType, number>>);

  // Merge with static data
  return staticPlanData.map((staticPlan) => ({
    ...staticPlan,
    desc: {
      monthly: groupedPrices[staticPlan.title]?.monthly ?? staticPlan.desc.monthly,
      semiannual: groupedPrices[staticPlan.title]?.semiannual ?? staticPlan.desc.semiannual,
      annual: groupedPrices[staticPlan.title]?.annual ?? staticPlan.desc.annual,
    },
  }));
};

// For testing/development without API
export const mockBackendResponse: BackendResponse = {
  success: true,
  message: "Subscription plans retrieved successfully",
  data: [
    { id: "mock-core-monthly", created_at: "2026-06-26T00:00:00.000Z", updated_at: "2026-06-26T00:00:00.000Z", deleted_at: null, plan: "CORE", interval: "MONTHLY", price: "629" },
    { id: "mock-core-semiannual", created_at: "2026-06-26T00:00:00.000Z", updated_at: "2026-06-26T00:00:00.000Z", deleted_at: null, plan: "CORE", interval: "SEMIANNUAL", price: "3057" },
    { id: "mock-core-annual", created_at: "2026-06-26T00:00:00.000Z", updated_at: "2026-06-26T00:00:00.000Z", deleted_at: null, plan: "CORE", interval: "ANNUAL", price: "4604" },
    { id: "mock-creator-monthly", created_at: "2026-06-26T00:00:00.000Z", updated_at: "2026-06-26T00:00:00.000Z", deleted_at: null, plan: "Creator", interval: "MONTHLY", price: "895" },
    { id: "mock-creator-semiannual", created_at: "2026-06-26T00:00:00.000Z", updated_at: "2026-06-26T00:00:00.000Z", deleted_at: null, plan: "Creator", interval: "SEMIANNUAL", price: "4350" },
    { id: "mock-creator-annual", created_at: "2026-06-26T00:00:00.000Z", updated_at: "2026-06-26T00:00:00.000Z", deleted_at: null, plan: "Creator", interval: "ANNUAL", price: "6551" },
    { id: "mock-studio-monthly", created_at: "2026-06-26T00:00:00.000Z", updated_at: "2026-06-26T00:00:00.000Z", deleted_at: null, plan: "Studio", interval: "MONTHLY", price: "1261" },
    { id: "mock-studio-semiannual", created_at: "2026-06-26T00:00:00.000Z", updated_at: "2026-06-26T00:00:00.000Z", deleted_at: null, plan: "Studio", interval: "SEMIANNUAL", price: "6128" },
    { id: "mock-studio-annual", created_at: "2026-06-26T00:00:00.000Z", updated_at: "2026-06-26T00:00:00.000Z", deleted_at: null, plan: "Studio", interval: "ANNUAL", price: "9231" }
  ]
};