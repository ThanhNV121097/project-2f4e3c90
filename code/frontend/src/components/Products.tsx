import { T, useList } from "../editable";
import { useReveal } from "../useReveal";

type Item = { name: string; desc: string; price: string; image: string };

function Card({ i, item }: { i: number; item: Item }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "in" : ""} group overflow-hidden rounded border border-line bg-white/[0.03] transition-colors duration-base ease-out hover:border-accent/50`}
      style={{ animationDelay: `${i * 80}ms` }}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-slow ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <T k={`products.items.${i}.name`} as="h3" className="text-xl text-ink" />
        <T k={`products.items.${i}.desc`} as="p" className="mt-2 text-sm text-ink-soft" />
        <T k={`products.items.${i}.price`} as="p" className="mt-4 font-display text-sm font-semibold text-accent" />
      </div>
    </div>
  );
}

export default function Products() {
  const items = useList<Item>("products.items");
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="products" className="mx-auto max-w-page px-[var(--gutter)] py-24 md:py-32">
      <div ref={ref} className={`reveal ${visible ? "in" : ""} max-w-[48ch]`}>
        <T k="products.eyebrow" as="p" className="font-display text-sm uppercase tracking-[0.18em] text-accent" />
        <T k="products.heading" as="h2" className="mt-4 text-[clamp(30px,4vw,48px)] text-ink" />
        <T k="products.sub" as="p" className="mt-4 text-lg text-ink-soft" />
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => <Card key={i} i={i} item={item} />)}
      </div>
    </section>
  );
}
