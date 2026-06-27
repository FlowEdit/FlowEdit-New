export type CompareCellValue = boolean | string;

export interface CompareRow {
  label: string;
  values: CompareCellValue[];
  last?: boolean;
}

export const planHeaders = [
  { name: "Launch" },
  { name: "Core" },
  { name: "Creator" },
  { name: "Studio" },
  { name: "Production" },
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
    values: [false, false, false, false, true],
  },
  {
    label: "Free Trial",
    values: [false, "21 Days", "21 Days", "21 Days", "7 Days"],
    last: true,
  },
];
