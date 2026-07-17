import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Sparkle className="absolute right-[8%] top-16 h-9 w-9 sm:right-[12%] sm:top-24" />
      <Sparkle className="absolute left-[6%] top-[60%] h-6 w-6 sm:left-[10%]" />

      <div className="relative mx-auto max-w-3xl px-6 pb-24 pt-40 text-center sm:pb-32 sm:pt-48">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          {profile.tagline}
        </p>

        <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl">
          Hi, I&apos;m {profile.name.split(" ")[0]}.
          <br />
          I build AI systems and data products.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-dim sm:text-lg">
          {profile.bio}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3 text-sm">
          <a
            href="#work"
            className="rounded-full bg-fg px-5 py-2.5 font-medium text-bg transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            View work
          </a>

          <a
            href={profile.cvUrl}
            className="rounded-full border border-line bg-pill/80 px-5 py-2.5 font-medium text-fg-dim transition-all duration-200 hover:-translate-y-0.5 hover:text-fg"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={`sparkle ${className ?? ""}`}
    >
      <path d="M12 0c.6 4.8 2.2 8 4.5 9.5C19 11 21.6 11.6 24 12c-2.4.4-5 1-7.5 2.5C14.2 16 12.6 19.2 12 24c-.6-4.8-2.2-8-4.5-9.5C5 13 2.4 12.4 0 12c2.4-.4 5-1 7.5-2.5C9.8 8 11.4 4.8 12 0z" />
    </svg>
  );
}