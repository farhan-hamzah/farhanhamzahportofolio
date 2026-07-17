import Link from "next/link";
import { profile } from "@/data/profile";
import { SectionCard } from "@/components/SectionCard";
import { SectionShell } from "@/components/SectionShell";
import { AboutPhoto } from "@/components/AboutPhoto";
import { AboutStats } from "@/components/AboutStats";

const focusAreas = [
  {
    title: "AI & data products",
    body: "Membangun sistem yang menghubungkan model, data, dan kebutuhan nyata pengguna bukan sekadar notebook eksperimen yang berhenti di angka metrik.",
  },
  {
    title: "Applied research",
    body: "Mengeksplorasi workflow berbasis ML dan LLM dengan sudut pandang yang tetap product-minded, supaya hasil riset bisa benar-benar dipakai.",
  },
  {
    title: "Software engineering",
    body: "Menerjemahkan ide menjadi aplikasi yang reliable dan maintainable, dari backend, database, sampai deployment ke production.",
  },
];

export default function AboutPage() {
  return (
    <SectionShell className="py-20 sm:py-24">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Kolom foto + stats */}
        <div className="flex flex-col gap-6">
          <SectionCard className="p-8 pb-12 sm:p-10 sm:pb-14">
            <AboutPhoto />
          </SectionCard>
          <SectionCard className="p-6 sm:p-7">
            <AboutStats />
          </SectionCard>
        </div>

        {/* Kolom narasi */}
        <SectionCard className="p-8 sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            About
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl">
            I’m {profile.name.split(" ")[0]} building AI systems that feel useful, thoughtful, and real.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-fg-dim sm:text-lg">
            {profile.bio}
          </p>
          <p className="mt-5 text-base leading-relaxed text-fg-dim">
            Saya senang mengubah ide-ide kompleks menjadi produk dan sistem yang menggabungkan riset,
            engineering, dan cara berpikir yang berorientasi produk. Pekerjaan saya biasanya berada di
            antara eksperimentasi dan implementasi mulai dari data pipeline dan workflow model, sampai
            interface dan aplikasi yang langsung dipakai pengguna akhir. Buat saya, sistem AI yang bagus
            bukan cuma soal akurasi model, tapi juga soal seberapa mudah sistem itu dipahami, dipelihara,
            dan dipercaya oleh orang yang memakainya.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#work"
              className="rounded-full bg-fg px-5 py-2.5 font-medium text-bg transition-all duration-200 hover:-translate-y-0.5"
            >
              See my work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-line bg-pill/80 px-5 py-2.5 font-medium text-fg-dim transition-all duration-200 hover:-translate-y-0.5 hover:text-fg"
            >
              Let’s connect
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-line/60 bg-bg/60 p-4"
              >
                <p className="font-semibold text-fg">{area.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-fg-dim">{area.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-line/60 bg-bg/50 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-faint">
              Currently interested in
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.skills
                .flatMap((group) => group.items)
                .slice(0, 8)
                .map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line/60 bg-bg/70 px-3 py-1 text-xs text-fg"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-line/60 bg-bg/50 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-faint">
              Quick facts
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-fg-dim">
              {profile.quickFacts.map((fact) => (
                <li key={fact} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionCard>
      </div>
    </SectionShell>
  );
}