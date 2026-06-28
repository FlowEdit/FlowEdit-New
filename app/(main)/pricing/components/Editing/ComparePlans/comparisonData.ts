export type CompareCellValue = boolean | string;

export interface CompareRow {
  label: string;
  labelFootnote?: string;
  values: CompareCellValue[];
  last?: boolean;
}

export interface ComparePlanHeader {
  name: string;
  priceLabel: string;
  priceFootnote?: string;
  pricePrefix?: string;
  pricePrefixFootnote?: string;
}

export const planHeaders: ComparePlanHeader[] = [
  { name: "Launch", priceLabel: "Completely FREE", priceFootnote: "1" },
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

export const comparisonRows: CompareRow[] = [
  {
    label: "Modern Motion Graphics",
    values: [true, true, true, true, true],
  },
  {
    label: "Professional Color Grading",
    values: [true, true, true, true, true],
  },
  {
    label: "Licensed Royalty-Free Music",
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
    values: ["Unlimited", "21 Days", "21 Days", "21 Days", "7 Days"],
    last: true,
  },
];
