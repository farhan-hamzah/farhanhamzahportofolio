import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionCard } from "@/components/SectionCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionShell } from "@/components/SectionShell";
import { projects, inProgress } from "@/data/projects";

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
