import { T, useList } from "../editable";

export default function Badges() {
  const badges = useList<{ label: string }>("badges");
  return (
    <div className="border-y border-line bg-black/20">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-center gap-x-10 gap-y-3 px-[var(--gutter)] py-6 text-sm text-ink-soft md:justify-between">
        {badges.map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-pill bg-accent" />
            <T k={`badges.${i}.label`} />
          </div>
        ))}
      </div>
    </div>
  );
}
