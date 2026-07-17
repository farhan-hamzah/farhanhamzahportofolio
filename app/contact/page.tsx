import { profile } from "@/data/profile";
import { SectionCard } from "@/components/SectionCard";
import { SectionShell } from "@/components/SectionShell";
import { ContactCard } from "@/components/ContactCard";

export default function ContactPage() {
  return (
    <SectionShell className="py-20 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Contact
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-fg sm:text-4xl">
            Let&apos;s build something together.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-fg-dim sm:text-base">
            Terbuka untuk diskusi kolaborasi riset, kesempatan magang, maupun sekadar bertukar
            pikiran seputar AI dan software engineering. Cara tercepat untuk terhubung ada di
            bawah ini — saya biasanya membalas dalam 1–2 hari kerja.
          </p>
        </div>

        <SectionCard className="space-y-3 p-6 sm:p-8">
          <ContactCard
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
            actionLabel="Send email"
            copyValue={profile.email}
          />
          <ContactCard
            label="LinkedIn"
            value="in/farhan-hamzah"
            href={profile.linkedin}
            actionLabel="Visit profile"
            copyValue={profile.linkedin}
          />
          <ContactCard
            label="GitHub"
            value="@farhan-hamzah"
            href={profile.github}
            actionLabel="View profile"
            copyValue={profile.github}
          />
        </SectionCard>

        <div className="mt-6 flex flex-col items-center gap-3 text-center">
          <a
            href={profile.cvUrl}
            className="rounded-full border border-line bg-pill/80 px-5 py-2.5 text-sm font-medium text-fg-dim transition-all duration-200 hover:-translate-y-0.5 hover:text-fg"
          >
            Download CV
          </a>
          <p className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">
            {profile.location} · WIB (GMT+7) · Response time: 1–2 hari kerja
          </p>
        </div>
      </div>
    </SectionShell>
  );
}