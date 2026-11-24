"use client";

import { useEffect, useState } from "react";
import type { Competition } from "@/lib/types";

const colorClass: Record<Competition["color"], string> = {
  violet: "bg-card-violet",
  teal: "bg-card-teal",
  peach: "bg-card-peach",
  sky: "bg-card-sky",
  sage: "bg-card-sage",
  rose: "bg-card-rose",
};

export function CompetitionCard({ item }: { item: Competition }) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };
    if (activeImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeImage]);

  return (
    <>
      <article
        className={`overflow-hidden rounded-[24px] border border-line/60 p-6 shadow-[0_14px_40px_rgba(31,75,63,0.06)] sm:p-7 ${colorClass[item.color]}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">
            {item.award}
          </span>
          <span className="font-mono text-xs text-fg-faint">{item.period}</span>
        </div>

        <p className="mt-4 font-mono text-xs text-accent">{item.event}</p>
        <p className="mt-0.5 text-xs text-fg-faint">{item.organizer}</p>

        <h3 className="mt-2 font-display text-lg font-semibold text-fg sm:text-xl">
          {item.title}
        </h3>

        <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-fg-dim">
          <span className="rounded-full border border-line/60 bg-bg/75 px-2.5 py-0.5 font-mono text-[11px] font-medium text-fg">
            Team {item.teamName}
          </span>
          <span>{item.teammates.join(" · ")}</span>
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-dim sm:text-base">
          {item.description}
        </p>

        {item.metrics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-xl border border-accent/25 bg-bg/80 px-3 py-1 font-mono text-xs font-medium text-fg"
              >
                {metric}
              </span>
            ))}
          </div>
        )}

        {item.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {item.highlights.map((point) => (
              <li key={point} className="flex gap-2 text-sm leading-relaxed text-fg-dim">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {item.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-line/60 bg-bg/70 px-3 py-1 text-xs text-fg-dim"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {item.images.length > 0 && (
          <div
            className={`mt-5 grid gap-2.5 ${
              item.images.length === 2 ? "grid-cols-2" : "grid-cols-3"
            }`}
          >
            {item.images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(src)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-line/40 bg-bg/60 text-left transition hover:border-accent hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={`View photo ${index + 1} from ${item.event}`}
              >
                <img
                  src={src}
                  alt={`${item.event} — documentation ${index + 1}`}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute bottom-1.5 right-1.5 rounded-md bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 sm:text-[10px]">
                  Zoom ↗
                </span>
              </button>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
          <a
            href={item.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-bg px-4 py-2 font-medium text-fg shadow-sm transition-opacity hover:opacity-80"
          >
            GitHub Repository →
          </a>
        </div>
      </article>

      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-bg/95 p-3 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-sm font-bold text-white transition hover:bg-black"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={activeImage}
              alt={`${item.event} documentation`}
              className="mx-auto max-h-[82vh] w-auto max-w-full rounded-xl object-contain"
            />
            <p className="mt-2 text-center font-mono text-xs text-fg-dim">
              {item.event} — Team {item.teamName}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
