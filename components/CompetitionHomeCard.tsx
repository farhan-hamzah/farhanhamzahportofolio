"use client";

import Link from "next/link";
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

export function CompetitionHomeCard({ comp }: { comp: Competition }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  const currentImg = comp.images[selectedIdx] ?? comp.images[0];

  return (
    <>
      <article
        className={`flex flex-col justify-between overflow-hidden rounded-[24px] border border-line/50 p-5 shadow-[0_10px_35px_rgba(31,75,63,0.06)] sm:p-6 ${colorClass[comp.color]}`}
      >
        <div>
          {currentImg && (
            <div className="mb-4 overflow-hidden rounded-2xl border border-line/40 bg-bg/70 p-1.5">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="group relative block w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={`Zoom documentation for ${comp.event}`}
              >
                <img
                  src={currentImg}
                  alt={`${comp.event} — photo ${selectedIdx + 1}`}
                  className="h-44 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute bottom-2 right-2 rounded-md bg-black/65 px-2 py-0.5 text-[10px] font-medium text-white opacity-90 backdrop-blur-sm transition group-hover:opacity-100">
                  Zoom ↗
                </span>
              </button>

              {comp.images.length > 1 && (
                <div className="mt-1.5 flex gap-1.5">
                  {comp.images.map((img, idx) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setSelectedIdx(idx)}
                      className={`h-11 flex-1 overflow-hidden rounded-lg border transition ${
                        idx === selectedIdx
                          ? "border-accent ring-1 ring-accent"
                          : "border-line/40 opacity-75 hover:opacity-100"
                      }`}
                      aria-label={`Select photo ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${comp.event} thumbnail ${idx + 1}`}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-between gap-2">
            <span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
              {comp.award}
            </span>
            <span className="font-mono text-[11px] text-fg-faint">{comp.period}</span>
          </div>

          <p className="mt-3 font-mono text-[11px] text-accent">{comp.event}</p>
          <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-fg">
            {comp.title}
          </h3>
          <p className="mt-2 text-xs text-fg-faint">
            Team {comp.teamName} · {comp.organizer}
          </p>
        </div>

        <div className="mt-5">
          <div className="flex flex-wrap gap-1.5">
            {comp.metrics.slice(0, 2).map((metric) => (
              <span
                key={metric}
                className="rounded-lg border border-accent/20 bg-bg/75 px-2.5 py-0.5 font-mono text-[11px] text-fg"
              >
                {metric}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 text-xs font-medium">
            <Link href="/competitions" className="text-accent hover:underline">
              Full details →
            </Link>
            <a
              href={comp.repo}
              target="_blank"
              rel="noreferrer"
              className="text-fg-dim hover:text-fg hover:underline"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </article>

      {lightboxOpen && currentImg && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-bg/95 p-3 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-sm font-bold text-white transition hover:bg-black"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={currentImg}
              alt={`${comp.event} documentation`}
              className="mx-auto max-h-[82vh] w-auto max-w-full rounded-xl object-contain"
            />
            <p className="mt-2 text-center font-mono text-xs text-fg-dim">
              {comp.event} — Team {comp.teamName}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
