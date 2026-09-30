"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/types";

const colorClass: Record<Project["color"], string> = {
  violet: "bg-card-violet",
  teal: "bg-card-teal",
  peach: "bg-card-peach",
  sky: "bg-card-sky",
  sage: "bg-card-sage",
  rose: "bg-card-rose",
};

export function ProjectCard({ project }: { project: Project }) {
  const previewImages = project.images ?? [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (previewImages.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % previewImages.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [previewImages.length]);

  const goToPrev = () => {
    setActiveIndex((current) => (current - 1 + previewImages.length) % previewImages.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % previewImages.length);
  };

  return (
    <article
      className={`min-w-0 overflow-hidden rounded-[28px] border border-line/50 p-6 shadow-[0_10px_35px_rgba(31,75,63,0.06)] sm:p-7 ${colorClass[project.color]}`}
    >
      <div className="mb-5 overflow-hidden rounded-2xl border border-line/40 bg-bg/70">
        {previewImages.length > 0 ? (
          <div className="p-2">
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src={previewImages[activeIndex]}
                alt={`${project.title} preview ${activeIndex + 1}`}
                className="h-44 w-full object-cover transition duration-300 sm:h-48"
              />

              {previewImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goToPrev}
                    className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-bg/70 text-sm text-fg shadow-sm backdrop-blur transition hover:bg-bg"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-bg/70 text-sm text-fg shadow-sm backdrop-blur transition hover:bg-bg"
                    aria-label="Next image"
                  >
                    →
                  </button>

                  <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 bg-gradient-to-t from-black/50 to-transparent p-3">
                    {previewImages.map((_, index) => (
                      <button
                        key={`${project.id}-${index}`}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          index === activeIndex
                            ? "w-6 bg-white shadow-[0_0_10px_2px_var(--accent)]"
                            : "w-2.5 bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Show image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {previewImages.length > 1 && (
              <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
                {previewImages.map((image, index) => (
                  <button
                    key={`${project.id}-thumb-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-14 flex-1 min-w-[72px] overflow-hidden rounded-lg border transition ${index === activeIndex ? "border-fg shadow-sm" : "border-line/40"}`}
                  >
                    <img src={image} alt={`${project.title} thumbnail ${index + 1}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex h-36 items-end bg-gradient-to-br from-white/20 to-transparent p-4">
            <span className="rounded-full border border-line/60 bg-bg/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim">
              {project.eyebrow}
            </span>
          </div>
        )}
      </div>

      <p className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
        {project.eyebrow}
      </p>
      <h3 className="mt-1 font-display text-xl font-semibold text-fg sm:text-2xl">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-fg-dim sm:text-base">
        {project.description}
      </p>

      {project.details && project.details.length > 0 && (
        <Link
          href={`/projects/${project.id}`}
          className="group mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-4 py-2 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_-4px_var(--accent)]"
        >
          View more
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      )}

      {project.stack.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-fg-faint">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      )}

      {((project.links && project.links.length > 0) || !project.repo) && (
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
          {!project.repo && (
            <span className="rounded-full border border-line/60 bg-bg/80 px-3 py-1 font-mono text-[11px] text-fg-dim">
              🔒 Private Codebase
            </span>
          )}
          {project.links && project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-bg px-3 py-1 font-medium text-fg transition-opacity hover:opacity-80"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
