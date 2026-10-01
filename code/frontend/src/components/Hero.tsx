import { T, useContent } from "../editable";
import { useReveal } from "../useReveal";

export default function Hero() {
  const cta = useContent<{ label: string; href: string }>("hero.cta");
  const ctaSecondary = useContent<{ label: string; href: string }>("hero.ctaSecondary");
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden">
      <div className="glow pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-page gap-16 px-[var(--gutter)] pb-24 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-32 md:pt-20">
        <div ref={ref} className={`reveal ${visible ? "in" : ""}`}>
          <T k="hero.eyebrow" as="p" className="font-display text-sm uppercase tracking-[0.18em] text-accent" />
          <T
            k="hero.headline"
            as="h1"
            className="mt-6 max-w-[14ch] text-[clamp(40px,6.4vw,84px)] text-ink"
          />
          <T k="hero.sub" as="p" className="mt-6 max-w-[48ch] text-lg text-ink-soft" />
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <T
              k="hero.cta.label"
              as="a"
              href={cta?.href}
              className="inline-block rounded-pill bg-accent px-7 py-3.5 font-display text-sm font-semibold text-accent-ink transition-transform duration-base ease-out hover:scale-[1.03]"
            />
            <T
              k="hero.ctaSecondary.label"
              as="a"
              href={ctaSecondary?.href}
              className="inline-block rounded-pill border border-line px-7 py-3.5 text-sm text-ink transition-colors duration-base ease-out hover:border-accent hover:text-accent"
            />
          </div>
        </div>
        <div
          className="reveal-fade in relative aspect-square overflow-hidden rounded shadow-md md:rounded-[28px]"
          style={{ animationDelay: "160ms" }}
        >
          <img
            src="/images/hero-earbuds.jpg"
            alt="AirPods and charging case, lit against a dark surface"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
