import { Reveal } from "./Reveal";

const IMAGENES = [
  { src: "img/chairs.jpg", alt: "Rincón acogedor del restaurante", blob: "blob-1" },
  { src: "img/shave.jpg", alt: "Detalle del local", blob: "blob-2" },
  { src: "img/haircut-close.jpg", alt: "Detalle del plato", blob: "blob-1" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative overflow-hidden bg-arena">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal className="mb-14 text-center">
          <p className="font-script mb-2 text-3xl text-terracota">dejamos huella</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-tintan sm:text-5xl">
            Nuestro trabajo
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {IMAGENES.map((img, i) => (
            <Reveal key={img.src} delay={i * 80}>
              <figure className="group mx-auto w-full max-w-xs">
                <div
                  className={`${img.blob} overflow-hidden border-[5px] border-arena bg-arena shadow-cardglow4 transition-transform duration-500 group-hover:scale-[1.02]`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-4 text-center font-script text-2xl text-oliva">
                  {img.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}