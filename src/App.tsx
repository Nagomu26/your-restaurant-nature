import { useCallback, useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";
import { LegalDialog } from "@/components/site/LegalDialog";
import { CONFIG } from "@/lib/config";
import type { LegalDocId } from "@/lib/legal";

function aplicarSEO() {
  document.title = `${CONFIG.nombre} · Natural | ${CONFIG.tituloSeo} | Reserva tu mesa online`;
  const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (meta) {
    meta.content = `${CONFIG.nombre} en ${CONFIG.ciudad}. ${CONFIG.lemaSeo} Reserva tu mesa online en segundos.`;
  }

  const codigoPostal = (CONFIG.localidad.match(/\d{5}/) ?? [""])[0];
  const horarioCentral = {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "13:00",
    closes: "16:00",
  } as const;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: CONFIG.nombre,
    url: CONFIG.dominio,
    image: `${CONFIG.dominio}/og.png`,
    telephone: `+34${CONFIG.telefonoEnlace}`,
    priceRange: "€-€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONFIG.direccion,
      addressLocality: CONFIG.ciudad,
      postalCode: codigoPostal,
      addressCountry: "ES",
    },
    openingHoursSpecification: [
      horarioCentral,
      { ...horarioCentral, opens: "20:00", closes: "23:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "13:00", closes: "16:00" },
    ],
  };
  document.getElementById("schema-local-business")?.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "schema-local-business";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export default function App() {
  const [legalDoc, setLegalDoc] = useState<LegalDocId | null>(null);
  const openLegal = useCallback((docId: LegalDocId) => setLegalDoc(docId), []);

  useEffect(() => {
    aplicarSEO();
  }, []);

  return (
    <div className="bg-arena font-sans text-tintan antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Booking onOpenLegal={openLegal} />
      </main>
      <Footer onOpenLegal={openLegal} />
      <CookieBanner onOpenLegal={openLegal} />
      <LegalDialog docId={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}