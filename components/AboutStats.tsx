import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";

export function AboutStats() {
  const totalProjects = projects.length;
  const totalRoles = experiences.length;
  const uniqueStack = new Set(projects.flatMap((p) => p.stack)).size;

  const stats = [
    { value: totalProjects, label: "Proyek dibangun" },
    { value: totalRoles, label: "Peran & organisasi" },
    { value: uniqueStack, label: "Tools & teknologi" },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-line/60 bg-bg/70 p-2.5 text-center sm:p-4"
        >
          <p className="font-display text-lg font-semibold text-accent sm:text-2xl md:text-3xl">
            {stat.value}+
          </p>
          <p className="mt-1 text-[10px] leading-tight text-fg-faint sm:text-[11px]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}