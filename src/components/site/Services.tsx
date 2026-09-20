import { Utensils, Soup, CalendarCheck, CroissantIcon, ArrowRight } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { SERVICIOS } from "@/data/services";
import type { ServiceId } from "@/lib/types";
import { Reveal } from "./Reveal";

const ICONOS: Record<ServiceId, typeof Utensils> = {
  picoteo: Utensils,
  principal: Soup,
  "menu-dia": CalendarCheck,
  postre: CroissantIcon,
};

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-panelN">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal className="mb-14 text-center">
          <p className="font-script mb-2 text-3xl text-terracota">nuestra carta</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-tintan sm:text-5xl">
            La Carta
          </h2>
          <p className="mx-auto mt-4 max-w-md text-tintan/70">
            Precios claros y de temporada. Te aconsejamos lo que mejor te
            sienta.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SERVICIOS.map((servicio, i) => {
            const Icono = ICONOS[servicio.id];
            return (
              <Reveal key={servicio.id} delay={i * 70}>
                <article className="card-lift group relative flex h-full flex-col rounded-3xl border border-linean bg-cardN p-7">
                  {servicio.destacado && (
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-terracota px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-arena">
                      <CalendarCheck className="h-3 w-3" aria-hidden="true" />
                      El más pedido
                    </span>
                  )}
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-salvia/20 text-oliva transition-colors duration-300 group-hover:bg-oliva group-hover:text-arena">
                    <Icono className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-bold text-tintan">{servicio.nombre}</h3>
                    <span className="text-2xl font-extrabold text-terracota">
                      {servicio.precio} €
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-tintan/70">
                    {servicio.descripcion}
                  </p>
                  <a
                    href="#reserva"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-oliva transition-colors hover:text-terracota"
                  >
                    Reservar
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-2 text-tintan/70">
            ¿No lo tienes claro? Escríbenos por{" "}
            <a
              href={`https://wa.me/${CONFIG.whatsapp}`}
              className="font-semibold text-oliva underline underline-offset-2 transition-colors hover:text-terracota"
            >
              WhatsApp al {CONFIG.telefono}
            </a>{" "}
            y te aconsejamos sin compromiso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}