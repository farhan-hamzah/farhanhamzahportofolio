import type { ReactNode } from "react";

type SectionCardProps = {
  children: ReactNode;
  className?: string;
};

export function SectionCard({ children, className = "" }: SectionCardProps) {
  return (
    <div
      className={`section-card rounded-[28px] border border-line/60 shadow-[0_18px_60px_rgba(31,75,63,0.08)] backdrop-blur ${className}`.trim()}
    >
      {children}
    </div>
  );
}