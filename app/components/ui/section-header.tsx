"use client";

import { Reveal } from "./reveal";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  align?: "left" | "center";
  disableScrollAnimation?: boolean;
};

export function SectionHeader({
  label,
  title,
  description,
  action,
  align = "left",
  disableScrollAnimation = false,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <Reveal
      disableScrollAnimation={disableScrollAnimation}
      className={`flex flex-col gap-6 ${
        centered
          ? "items-center text-center"
          : "justify-between lg:flex-row lg:items-end"
      }`}
    >
      <div className={centered ? "max-w-2xl" : ""}>
        <p className="text-label font-mono uppercase tracking-[0.25em] text-accent-blue">
          {label}
        </p>
        <h2 className="section-title mt-3">{title}</h2>
        {description && (
          <p className="mt-4 text-body text-muted-light">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
