import { ExperienceCard } from "@/components/ExperienceCard";
import type { Experience } from "@/lib/types";

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="timeline-rail absolute left-[5px] top-1 bottom-1 w-[2px] rounded-full sm:left-[7px]"
      />
      <ol className="flex flex-col gap-10">
        {items.map((item) => {
          const isActive = /present|sekarang/i.test(item.period);
          return (
            <li key={item.hash} className="relative pl-8 sm:pl-10">
              <span
                aria-hidden
                className={`absolute left-0 top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-bg sm:h-3.5 sm:w-3.5 ${
                  isActive ? "timeline-dot-active" : ""
                }`}
              />
              <ExperienceCard item={item} isActive={isActive} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}