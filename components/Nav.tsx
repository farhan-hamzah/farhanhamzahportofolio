"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-40 flex justify-center px-4">
      <nav className="flex w-full max-w-[94vw] items-center gap-1 rounded-full border border-line/70 bg-pill/80 py-2 pl-2 pr-1 text-sm shadow-[0_10px_35px_rgba(31,75,63,0.08)] backdrop-blur sm:max-w-fit">
        <Link
          href="/"
          className="shrink-0 whitespace-nowrap rounded-full px-3 py-2 font-display font-semibold text-fg transition-colors hover:bg-accent-soft sm:px-4"
        >
          {profile.name.split(" ")[0]}
          <span className="hidden sm:inline"> {profile.name.split(" ").slice(1).join(" ")}</span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  active
                    ? "flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-accent-soft px-3 py-2 font-medium text-fg shadow-sm sm:px-4"
                    : "shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-fg-dim transition-colors hover:bg-accent-soft hover:text-fg sm:px-4"
                }
              >
                {l.label}
                {active && (
                  <span className="hidden rounded border border-line px-1 font-mono text-xs text-fg-faint sm:inline">
                    /
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}