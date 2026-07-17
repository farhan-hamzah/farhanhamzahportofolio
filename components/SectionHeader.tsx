export function SectionHeader({ path, title }: { path: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-widest text-fg-faint">{path}</p>
      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{title}</h2>
    </div>
  );
}