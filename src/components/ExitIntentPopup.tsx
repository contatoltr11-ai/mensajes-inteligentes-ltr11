import { useEffect, useState } from "react";
import { AlertTriangle, X, Gift } from "lucide-react";

interface ExitIntentPopupProps {
  onAccept: () => void;
}

export const ExitIntentPopup = ({ onAccept }: ExitIntentPopupProps) => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;

    // Push state to capture back button
    window.history.pushState({ exitGuard: true }, "");

    const trigger = () => {
      if (!shown) {
        setShown(true);
        setOpen(true);
      }
    };

    // Desktop: mouse leaves viewport at the top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    // Mobile/Desktop: back button
    const handlePopState = () => {
      trigger();
      // Re-push state to keep guarding
      window.history.pushState({ exitGuard: true }, "");
    };

    // Mobile: tab visibility change (switching tabs / minimizing)
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

  // Block body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

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
            ¡Espera! No te vayas todavía
          </span>
        </div>

        <Gift className="w-14 h-14 text-gold mx-auto mb-4 pulse-gold" />

        <h2 className="font-display text-2xl md:text-3xl font-black text-gold leading-tight mb-3">
          ¿Vas a renunciar a ella por $ 17?
        </h2>

        <p className="text-foreground text-base md:text-lg mb-2">
          Piensa por un momento:
        </p>
        <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
          Mañana ella puede estar en los brazos de otro. Por menos que un café, tienes
          el mapa exacto para reconquistarla. <span className="text-gold font-semibold">No dejes que el orgullo decida por ti.</span>
        </p>

        <button
          onClick={() => {
            setOpen(false);
            onAccept();
          }}
          className="w-full gradient-gold text-primary-foreground font-black text-base md:text-xl px-6 py-5 rounded-xl shadow-gold hover:scale-[1.02] transition-transform bounce-cta mb-4"
        >
          ¡SÍ! QUIERO MI ÚLTIMA OPORTUNIDAD POR $ 17
        </button>

        <button
          onClick={() => setOpen(false)}
          className="text-muted-foreground text-xs underline hover:text-warning transition-colors"
        >
          No, prefiero perderla para siempre
        </button>
      </div>
    </div>
  );
};
