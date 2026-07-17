"use client";

import { useState } from "react";

type ContactCardProps = {
  label: string;
  value: string;
  href: string;
  actionLabel: string;
  copyValue: string;
};

export function ContactCard({ label, value, href, actionLabel, copyValue }: ContactCardProps) {
  const [copied, setCopied] = useState(false);
  const isMail = href.startsWith("mailto:");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API bisa gagal di browser lama / konteks non-HTTPS —
      // gagal diam-diam, tombol tetap bisa diklik ulang tanpa error ke user.
    }
  };

  return (
    <div className="flex flex-col justify-between gap-4 rounded-2xl border border-line/60 bg-bg/60 p-5 sm:flex-row sm:items-center">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">{label}</p>
        <p className="mt-1 text-base font-medium text-fg">{value}</p>
      </div>
      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-full border border-line/60 bg-bg/70 px-4 py-2 text-sm font-medium text-fg-dim transition hover:text-fg"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>

        <a
          href={href}
          target={isMail ? undefined : "_blank"}
          rel={isMail ? undefined : "noreferrer"}
          title={isMail ? "Kalau tidak terbuka, gunakan tombol Copy di sebelah" : undefined}
          className="rounded-full bg-accent-soft px-4 py-2 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_-4px_var(--accent)]"
        >
          {actionLabel} →
        </a>
      </div>
    </div>
  );
}