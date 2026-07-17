import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SectionShell } from "@/components/SectionShell";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <SectionShell className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Experience
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-fg sm:text-4xl">
            A mix of building, mentoring, and leading in AI and software.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fg-dim sm:text-base">
            Setiap peran di bawah ini merepresentasikan sisi berbeda dari cara saya bekerja —
            mulai dari membangun sistem AI dari nol saat bootcamp, memimpin strategi kompetisi
            di level organisasi, berkontribusi pada riset terapan di dua laboratorium berbeda,
            sampai membimbing mahasiswa lain memahami dasar-dasar pemrograman dan algoritma.
            Dokumentasi visual di tiap kartu diambil langsung dari momen kegiatan berlangsung.
          </p>
        </div>

        <div className="section-card rounded-[28px] border border-line/60 p-6 shadow-[0_18px_60px_rgba(31,75,63,0.06)] sm:p-8">
          <ExperienceTimeline items={experiences} />
        </div>
      </div>
    </SectionShell>
  );
}