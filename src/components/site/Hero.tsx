import { Clock, Leaf, Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { Reveal } from "./Reveal";

const CARACTERISTICAS = [
  { icono: Leaf, texto: "Ambiente acogedor", sub: "Comer a gusto" },
  { icono: Clock, texto: "Reserva de mesa", sub: "Elige día y hora" },
  { icono: Phone, texto: "Consulta por WhatsApp", sub: CONFIG.telefono },
] as const;

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-arena">
      {/* Blobs orgánicos */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="blob-1 absolute -right-16 -top-16 h-72 w-72 bg-salvia/15 blur-2xl"></div>
        <div className="blob-2 absolute -left-20 top-40 h-64 w-64 bg-terracota/10 blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-script mb-4 text-3xl text-terracota">Tu restaurante en {CONFIG.ciudad}</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-tintan sm:text-5xl lg:text-6xl">
                Buen comer,
                <br />
                <span className="text-oliva">al natural.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-tintan/70">
                Restaurante de barrio con cocina de temporada. Reserva tu mesa online
                y disfruta sin prisas.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#reserva"
                  className="rounded-full bg-oliva px-10 py-4 text-center text-base font-semibold text-arena shadow-blando transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracota"
                >
                  Reservar mesa
                </a>
                <a
                  href={`tel:${CONFIG.telefonoEnlace}`}
                  className="inline-flex items-center justify-center rounded-full border-2 border-oliva/30 bg-transparent px-8 py-4 text-sm font-semibold text-tintan transition-colors duration-300 hover:border-oliva hover:text-oliva"
                >
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Llamar · {CONFIG.telefono}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Collage orgánico con blobs */}
          <Reveal delay={200} className="lg:col-span-5">
            <div className="relative mx-auto h-80 w-full max-w-sm sm:h-96">
              <div className="blob-1 absolute inset-y-0 left-4 w-[65%] overflow-hidden border-[6px] border-arena bg-arena shadow-cardglow4">
                <img
                  src="img/hero-cut.jpg"
                  alt="La cocina en marcha"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="blob-2 absolute bottom-0 right-0 h-[55%] w-[55%] overflow-hidden border-[5px] border-arena bg-arena shadow-cardglow4">
                <img
                  src="img/fade.jpg"
                  alt="Detalle del plato"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <svg
                className="pointer-events-none absolute right-2 top-8 h-20 w-20"
                viewBox="0 0 80 80"
                aria-hidden="true"
              >
                <path
                  d="M40 6 C50 20, 70 28, 60 48 C52 64, 28 68, 18 50 C10 36, 26 10, 40 6Z"
                  fill="none"
                  stroke="#8FA580"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <path
                  d="M40 14 C46 24, 60 28, 54 42 C50 52, 34 56, 26 46 C20 36, 32 16, 40 14Z"
                  fill="#8FA580"
                  fillOpacity="0.15"
                />
              </svg>
            </div>
          </Reveal>
        </div>

        {/* Mini features */}
        <Reveal delay={320}>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CARACTERISTICAS.map((feat) => (
              <div
                key={feat.texto}
                className="flex items-center gap-4 rounded-2xl border border-linean bg-cardN/60 px-5 py-4"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-salvia/20 text-oliva">
                  <feat.icono className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-tintan">{feat.texto}</p>
                  <p className="text-xs text-tintan/60">{feat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}