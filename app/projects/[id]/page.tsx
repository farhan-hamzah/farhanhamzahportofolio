import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg px-6 py-16 text-fg sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <Link href="/" className="text-sm font-medium text-accent transition hover:opacity-80">
          ← Back to portfolio
        </Link>

        <section className="rounded-[32px] border border-line/50 bg-card-violet p-8 shadow-[0_12px_40px_rgba(31,75,63,0.08)] sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-dim">
            {project.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-fg-dim">
            {project.overview || project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.links?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-bg px-3 py-1.5 text-sm font-medium text-fg transition hover:opacity-80"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </section>
            {project.images && project.images.length > 0 && (
          <section>
            <div
              className={`grid gap-4 ${project.images.length === 1 ? "grid-cols-1" : "sm:grid-cols-2"}`}
            >
              {project.images.map((src, index) => (
                <div
                  key={src}
                  className={`overflow-hidden rounded-2xl border border-line/50 bg-bg/70 ${
                    index === 0 && project.images!.length > 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {project.meta && (
          <section className="rounded-[28px] border border-line/50 bg-bg/70 p-8">
            <h2 className="font-display text-xl font-semibold">Role &amp; context</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-3">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">Role</dt>
                <dd className="mt-1 text-sm text-fg-dim">{project.meta.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">Duration</dt>
                <dd className="mt-1 text-sm text-fg-dim">{project.meta.duration}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">Context</dt>
                <dd className="mt-1 text-sm text-fg-dim">{project.meta.context}</dd>
              </div>
            </dl>
            {project.meta.team && project.meta.team.length > 0 && (
              <div className="mt-5">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">Team</dt>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.meta.team.map((member) => (
                    <span
                      key={member}
                      className="rounded-full border border-line/60 bg-bg px-3 py-1 text-sm text-fg-dim"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[28px] border border-line/50 bg-bg/70 p-8">
            <h2 className="font-display text-2xl font-semibold">What I built</h2>
            <p className="mt-3 text-sm leading-relaxed text-fg-dim">
              {project.challenge || "Detail proyek ini akan dijelaskan lebih lengkap di sini."}
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-fg">Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-fg-dim">
                {(project.details ?? []).map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-[28px] border border-line/50 bg-bg/70 p-8">
              <h2 className="font-display text-xl font-semibold">Tech stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-line/60 bg-bg px-3 py-1 text-sm text-fg-dim">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-line/50 bg-bg/70 p-8">
              <h2 className="font-display text-xl font-semibold">Project links</h2>
              <div className="mt-4 space-y-3 text-sm">
                {project.repo ? (
                  <a href={project.repo} target="_blank" rel="noreferrer" className="block rounded-2xl border border-line/60 bg-bg px-4 py-3 text-fg transition hover:opacity-80">
                    Repository →
                  </a>
                ) : (
                  <div className="rounded-2xl border border-line/50 bg-bg/60 p-4 text-xs text-fg-dim">
                    <p className="font-medium text-fg flex items-center gap-1.5">
                      <span>🔒</span> Private Repository
                    </p>
                    <p className="mt-1 text-fg-faint leading-relaxed">
                      Source code bersifat internal/proprietary enterprise (PT. Suvarna Media Informatika).
                    </p>
                  </div>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="block rounded-2xl border border-line/60 bg-bg px-4 py-3 text-fg transition hover:opacity-80">
                    Live demo →
                  </a>
                )}
                {project.links && project.links.length > 0 && (
                  <div className="pt-2 space-y-2">
                    {project.links
                      .filter((l) => l.url !== project.repo && l.url !== project.live)
                      .map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-2xl border border-line/60 bg-bg px-4 py-3 text-fg transition hover:opacity-80"
                        >
                          {link.label} →
                        </a>
                      ))}
                  </div>
                )}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
