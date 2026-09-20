import { Clock, MapPin, Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import type { LegalDocId } from "@/lib/legal";
import { Reveal } from "./Reveal";

const ENLACES_LEGALES = [
  { key: "privacidad", etiqueta: "Política de privacidad" },
  { key: "terminos", etiqueta: "Términos y condiciones" },
  { key: "cookies", etiqueta: "Política de cookies" },
] as const;

export function Footer({ onOpenLegal }: { onOpenLegal: (docId: LegalDocId) => void }) {
  return (
    <footer id="contacto" className="relative overflow-hidden rounded-t-[2.5rem] bg-tintan text-arena">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <a href="#inicio" className="inline-flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-salvia text-tintan">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path
                      d="M12 3C8.5 6 5 9 4 14c3 .6 5.5-1 7-3.5C13 9.5 13 6 12 3Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 3c3.5 3 7 6 8 11-3 .6-5.5-1-7-3.5C11 9.5 11 6 12 3Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                  </svg>
                </span>
                <span className="text-xl font-bold tracking-tight">
                  {CONFIG.logoNombre}
                  <span className="text-salvia"> {CONFIG.logoAcento}</span>
                </span>
              </a>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-arena/60">
                Tu restaurante de confianza, sin prisas. Reserva tu mesa online y relájate.
              </p>
              <p className="font-script mt-4 block text-3xl text-terracota">
                un rato para ti
              </p>
            </div>

            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-salvia">
                Contacto
              </p>
              <ul className="space-y-3 text-sm text-arena/75">
                <li>
                  <a
                    href={`tel:${CONFIG.telefonoEnlace}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-terracota"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {CONFIG.telefono}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${CONFIG.whatsapp}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-terracota"
                  >
                    <span className="font-bold text-salvia">WA</span>
                    WhatsApp · {CONFIG.telefono}
                  </a>
                </li>
                <li className="inline-flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4" aria-hidden="true" />
                  <span>
                    {CONFIG.direccion}, {CONFIG.ciudad}
                    <br />
                    {CONFIG.localidad}
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-salvia">
                Horario
              </p>
              <ul className="space-y-3 text-sm text-arena/75">
                <li className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>
                    Lun–Sáb: 10h–14h / 16h–21h
                    <br />
                    Domingo: 9h–14h
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-arena/50">
            © {new Date().getFullYear()} {CONFIG.nombre}. Todos los derechos reservados.
          </p>
          <nav aria-label="Enlaces legales" className="flex flex-wrap gap-x-6 gap-y-2">
            {ENLACES_LEGALES.map((enlace) => (
              <button
                key={enlace.key}
                type="button"
                onClick={() => onOpenLegal(enlace.key)}
                className="text-xs text-arena/50 underline underline-offset-2 transition-colors hover:text-terracota"
              >
                {enlace.etiqueta}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="select-none" aria-hidden="true">
        <p className="border-t border-arena/10 text-center font-script text-[12vw] leading-[1.2] tracking-wide text-arena/[0.05] sm:text-[8vw]">
          crece tu estilo
        </p>
      </div>
    </footer>
  );
}