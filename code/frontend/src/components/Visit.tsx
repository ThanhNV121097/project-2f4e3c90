import { T, useContent } from "../editable";
import { useReveal } from "../useReveal";

export default function Visit() {
  const cta = useContent<{ label: string; href: string }>("visit.cta");
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="visit" className="relative overflow-hidden">
      <div className="glow pointer-events-none absolute bottom-[-20%] right-[10%] h-[420px] w-[420px] rounded-pill bg-accent/15 blur-[110px]" />
      <div
        ref={ref}
        className={`reveal ${visible ? "in" : ""} relative mx-auto max-w-page px-[var(--gutter)] py-24 text-center md:py-32`}
      >
        <T k="visit.eyebrow" as="p" className="font-display text-sm uppercase tracking-[0.18em] text-accent" />
        <T k="visit.heading" as="h2" className="mx-auto mt-4 max-w-[18ch] text-[clamp(32px,4.5vw,56px)] text-ink" />
        <T k="visit.sub" as="p" className="mx-auto mt-5 max-w-[46ch] text-lg text-ink-soft" />
        <T
          k="visit.cta.label"
          as="a"
          href={cta?.href}
          className="mt-10 inline-block rounded-pill bg-accent px-8 py-3.5 font-display text-sm font-semibold text-accent-ink transition-transform duration-base ease-out hover:scale-[1.03]"
        />
      </div>
    </section>
  );
}
