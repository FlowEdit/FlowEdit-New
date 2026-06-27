/** @format */

import React from "react";

type RowProps = {
  children: React.ReactNode;
  last?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function Row({
  children,
  className = "",
  last = false,
  style,
}: RowProps) {
  return (
    <div
      className={`grid gap-[15px] text-center
      ${last ? "" : "border-b border-white/30 "}
      ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
