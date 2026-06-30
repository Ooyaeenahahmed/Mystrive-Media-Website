import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import mark from "@/assets/mystrive-mark.png";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 shrink-0" aria-label="MyStrive Media home">
          <img src={mark} alt="MyStrive" className="h-8 w-auto" />
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="tel:+19726196620"
            className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-teal/40 text-teal text-sm font-medium hover:bg-teal/10 hover:border-teal transition-all"
          >
            <Phone className="size-4" /> Call Casey
          </a>
          <a
            href="https://cal.com/ooyaeenah-ahmed/30-min-consultation"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center h-10 px-4 rounded-full bg-teal text-primary-foreground text-sm font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            Book a Call
          </a>
        </div>
        <button
          aria-label="Menu"
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="px-5 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+19726196620"
                className="inline-flex justify-center items-center gap-2 h-11 px-4 rounded-full border border-teal/40 text-teal font-medium"
              >
                <Phone className="size-4" /> Call Casey
              </a>
              <a
                href="https://cal.com/ooyaeenah-ahmed/30-min-consultation"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex justify-center items-center h-11 px-4 rounded-full bg-teal text-primary-foreground font-semibold"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
