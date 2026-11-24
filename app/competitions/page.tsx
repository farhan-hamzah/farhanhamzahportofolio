import { CompetitionCard } from "@/components/CompetitionCard";
import { SectionShell } from "@/components/SectionShell";
import { competitions } from "@/data/competitions";

export default function CompetitionsPage() {
  return (
    <SectionShell className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Competitions &amp; Awards
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-fg sm:text-4xl">
            National data science, data mining, and scientific essay competitions.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fg-dim sm:text-base">
            A record of national-level competitions representing Telkom University — spanning
            uncertainty-aware medical AI, structural credit risk modeling, and multi-modal
            recommendation engines. Each entry links directly to the open-sourced repository and
            documentation.
          </p>
        </div>

        <div className="section-card space-y-6 rounded-[28px] border border-line/60 p-6 shadow-[0_18px_60px_rgba(31,75,63,0.06)] sm:p-8">
          {competitions.map((item) => (
            <CompetitionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
