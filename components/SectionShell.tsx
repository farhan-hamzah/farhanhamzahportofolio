import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type SectionShellProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function SectionShell({
  children,
  className = "",
  as: Component = "section",
  ...props
}: SectionShellProps) {
  return (
    <Component className={`mx-auto w-full max-w-5xl px-6 ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
