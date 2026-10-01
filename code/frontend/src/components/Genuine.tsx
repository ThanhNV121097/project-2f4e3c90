import { T, useList } from "../editable";
import { useReveal } from "../useReveal";

export default function Genuine() {
  const points = useList<{ title: string; desc: string }>("genuine.points");
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="genuine" className="bg-surface text-ink-on-surface">
      <div
        ref={ref}
        className={`reveal ${visible ? "in" : ""} mx-auto grid max-w-page gap-16 px-[var(--gutter)] py-24 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-32`}
      >
        <div className="order-2 overflow-hidden rounded shadow-md md:order-1 md:rounded-[28px]">
          <img
            src="/images/hanoi-street.jpg"
            alt="A street in Hanoi's old quarter"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <T k="genuine.eyebrow" as="p" className="font-display text-sm uppercase tracking-[0.18em] text-accent" />
          <T k="genuine.heading" as="h2" className="mt-4 max-w-[16ch] text-[clamp(28px,3.6vw,44px)]" />
          <T k="genuine.body" as="p" className="mt-5 max-w-[56ch] text-ink-soft-on-surface" />
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {points.map((_, i) => (
              <li key={i} className="border-l-2 border-accent pl-4">
                <T k={`genuine.points.${i}.title`} as="p" className="font-display text-sm font-semibold" />
                <T k={`genuine.points.${i}.desc`} as="p" className="mt-1.5 text-sm text-ink-soft-on-surface" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
