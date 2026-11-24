import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionCard } from "@/components/SectionCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionShell } from "@/components/SectionShell";
import { competitions } from "@/data/competitions";
import { projects, inProgress } from "@/data/projects";

const competitionColorClass = {
  violet: "bg-card-violet",
  teal: "bg-card-teal",
  peach: "bg-card-peach",
  sky: "bg-card-sky",
  sage: "bg-card-sage",
  rose: "bg-card-rose",
} as const;

export default function Home() {
  return (
    <>
      <Hero />

      <SectionShell as="section" id="work" className="py-20">
        <SectionHeader path="Selected work" title="Projects" />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionShell>

      <SectionShell as="section" id="competitions" className="pb-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-fg-faint">
              Achievements
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              Competitions
            </h2>
          </div>
          <Link
            href="/competitions"
            className="group inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-4 py-2 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_-4px_var(--accent)]"
          >
            View all details
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {competitions.map((comp) => (
            <article
              key={comp.id}
              className={`flex flex-col justify-between overflow-hidden rounded-[24px] border border-line/50 p-6 shadow-[0_10px_35px_rgba(31,75,63,0.06)] ${competitionColorClass[comp.color]}`}
            >
              <div>
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
                  <Link
                    href="/competitions"
                    className="text-accent hover:underline"
                  >
                    Details →
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
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-semibold text-fg sm:text-5xl">
            In Progress.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-fg-dim sm:text-base">
            Currently building — research that continues to shape my direction.
          </p>

          <SectionCard className="mt-10 p-8 text-left">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              {inProgress.eyebrow}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-fg sm:text-2xl">
              {inProgress.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-fg-dim sm:text-base">
              {inProgress.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-fg-faint">
              {inProgress.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </SectionCard>
        </div>
      </SectionShell>
    </>
  );
}
