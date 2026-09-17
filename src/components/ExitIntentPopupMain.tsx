import { useEffect, useState } from "react";
import { AlertTriangle, X, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ExitIntentPopupMain = () => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (shown) return;

    window.history.pushState({ exitGuard: true }, "");

    const trigger = () => {
      if (!shown) {
        setShown(true);
        setOpen(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    const handlePopState = () => {
      trigger();
      window.history.pushState({ exitGuard: true }, "");
    };

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") trigger();
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("popstate", handlePopState);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [shown]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleAccept = () => {
    setOpen(false);
    navigate("/downsell");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm fade-in-up"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative max-w-lg w-full bg-card border-2 border-gold rounded-2xl shadow-glow p-6 md:p-8 text-center">
        <button
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warning/10 border border-warning/40 mb-5">
          <AlertTriangle className="w-4 h-4 text-warning" />
          <span className="text-xs text-warning font-bold uppercase tracking-wider">
            ¡Espera! Oferta exclusiva
          </span>
        </div>

        <TrendingDown className="w-14 h-14 text-gold mx-auto mb-4 pulse-gold" />

        <h2 className="font-display text-2xl md:text-3xl font-black text-gold leading-tight mb-3">
          Antes de irte… te tengo una última propuesta
        </h2>

        <p className="text-foreground text-base md:text-lg mb-2">
          Sé que el precio puede ser una barrera.
        </p>
        <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
          Por eso voy a hacer algo que no hago para nadie: te dejo llevarte el
          Protocolo por <span className="line-through text-muted-foreground">$ 27</span>{" "}
          <span className="text-gold font-black text-xl">solo $ 17</span>. Pero esta
          oferta desaparece si cierras esta página.
        </p>

        <button
          onClick={handleAccept}
          className="w-full gradient-gold text-primary-foreground font-black text-base md:text-xl px-6 py-5 rounded-xl shadow-gold hover:scale-[1.02] transition-transform bounce-cta mb-4"
        >
          QUIERO MI DESCUENTO POR $ 17
        </button>

        <button
          onClick={() => setOpen(false)}
          className="text-muted-foreground text-xs underline hover:text-warning transition-colors"
        >
          No, prefiero perder esta oportunidad para siempre
        </button>
      </div>
    </div>
  );
};
