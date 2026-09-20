import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONFIG } from "@/lib/config";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#reserva", label: "Reserva" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-arena/90 shadow-blando backdrop-blur" : "bg-arena",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#inicio" className="group flex items-center gap-2.5" aria-label={CONFIG.nombre}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-oliva text-arena transition-transform duration-300 group-hover:rotate-12">
            <Leaf className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-sans text-xl font-bold tracking-tight text-tintan">
            {CONFIG.logoNombre}
            <span className="text-oliva"> {CONFIG.logoAcento}</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-tintan md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 transition-colors duration-300 hover:bg-salvia/20 hover:text-oliva"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#reserva"
            className="hidden rounded-full bg-oliva px-6 py-2.5 font-sans text-sm font-semibold text-arena shadow-blando transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracota sm:inline-flex"
          >
            Reservar cita
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="-mr-2 p-2 text-tintan transition-colors hover:text-oliva md:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-linean bg-arena md:hidden">
          <div className="flex flex-col gap-4 px-5 py-4 text-sm font-medium text-tintan">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-1 transition-colors hover:text-oliva"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reserva"
              onClick={() => setMenuOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-oliva px-6 py-3 font-sans text-sm font-semibold text-arena transition-colors hover:bg-terracota"
            >
              Reservar cita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}