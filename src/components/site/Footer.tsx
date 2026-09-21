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

            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-salvia">
                Síguenos
              </p>
              <ul className="space-y-3 text-sm text-arena/75">
                {CONFIG.instagram && (
                  <li>
                    <a
                      href={CONFIG.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-terracota"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      Instagram
                    </a>
                  </li>
                )}
                {CONFIG.facebook && (
                  <li>
                    <a
                      href={CONFIG.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-terracota"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0" aria-hidden="true">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      Facebook
                    </a>
                  </li>
                )}
                {CONFIG.tiktok && (
                  <li>
                    <a
                      href={CONFIG.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-terracota"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true" className="h-4 w-4 flex-shrink-0"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                      TikTok
                    </a>
                  </li>
                )}
                {CONFIG.youtube && (
                  <li>
                    <a
                      href={CONFIG.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-terracota"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0" aria-hidden="true">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
                      </svg>
                      YouTube
                    </a>
                  </li>
                )}
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