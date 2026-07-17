import { profile } from "@/data/profile";

export function Stack() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {profile.skills.map((group) => (
        <div key={group.group}>
          <p className="font-mono text-xs uppercase tracking-widest text-fg-faint">{group.group}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-fg-dim">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}