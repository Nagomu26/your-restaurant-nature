import { useState } from "react";
import { cn } from "@/lib/utils";
import { CONFIG } from "@/lib/config";
import type { LegalDocId } from "@/lib/legal";

const FLOTANTE = "fixed bottom-5 left-5 right-5 z-[80] sm:left-auto sm:max-w-md";

export function CookieBanner({ onOpenLegal }: { onOpenLegal: (docId: LegalDocId) => void }) {
  const [oculto, setOculto] = useState(
    () => localStorage.getItem("cookie-accept") === "accepted",
  );

  const aceptar = () => {
    localStorage.setItem("cookie-accept", "accepted");
    setOculto(true);
  };

  if (oculto) return null;

  return (
    <div className={cn(FLOTANTE, "animate-[cookie-in_.4s_ease]")} role="dialog" aria-label="Aviso de cookies">
      <style>{`@keyframes cookie-in{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}`}</style>
      <div className="rounded-3xl border-2 border-oliva bg-arena/95 p-5 shadow-blando backdrop-blur">
        <p className="closeable text-sm">
          <strong className="font-bold text-tintan">Cookies</strong>{" "}
          <span className="text-tintan/70">
            Usamos cookies técnicas (sin publicidad ni seguimiento) para que Aviso legal y
            la web funcionen bien.{" "}
          </span>
          <button
            type="button"
            onClick={() => onOpenLegal("cookies")}
            className="text-oliva underline underline-offset-2 hover:text-terracota"
          >
            Más información
          </button>
          <span className="text-tintan/70"> · {CONFIG.nombre}.</span>
        </p>
        <div className="mt-4 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => onOpenLegal("privacidad")}
            className="text-xs font-semibold uppercase tracking-wider text-tintan/60 transition-colors hover:text-oliva"
          >
            Privacidad
          </button>
          <button
            type="button"
            onClick={aceptar}
            className="rounded-full bg-oliva px-6 py-2.5 text-sm font-semibold text-arena transition-colors hover:bg-terracota"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}