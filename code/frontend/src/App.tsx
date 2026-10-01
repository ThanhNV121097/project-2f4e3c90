import { T, useList, useContent } from "./editable";
import Hero from "./components/Hero";
import Badges from "./components/Badges";
import Products from "./components/Products";
import Genuine from "./components/Genuine";
import Visit from "./components/Visit";

export default function App() {
  const links = useList<{ label: string; href: string }>("nav.links");
  const cta = useContent<{ label: string; href: string }>("nav.cta");

  return (
    <div className="min-h-screen bg-ground text-ink font-body">
      <header className="sticky top-0 z-10 border-b border-line bg-ground/80 backdrop-blur">
        <div className="mx-auto flex max-w-page items-center justify-between px-[var(--gutter)] py-5">
          <T k="site.name" as="a" href="/" className="font-display text-lg font-semibold tracking-tight" />
          <nav className="flex items-center gap-7 text-sm text-ink-soft">
            {links.map((l, i) => (
              <T
                key={i}
                k={`nav.links.${i}.label`}
                as="a"
                href={l.href}
                className="hidden transition-colors duration-base ease-out hover:text-ink sm:inline"
              />
            ))}
            <T
              k="nav.cta.label"
              as="a"
              href={cta?.href}
              className="rounded-pill bg-accent px-5 py-2.5 font-display text-sm font-semibold text-accent-ink transition-transform duration-base ease-out hover:scale-[1.03]"
            />
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Badges />
        <Products />
        <Genuine />
        <Visit />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-[var(--gutter)] py-10 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <T k="footer.line" />
          <span>Open daily · 19 Duy Tân, Hà Nội</span>
        </div>
      </footer>
    </div>
  );
}
