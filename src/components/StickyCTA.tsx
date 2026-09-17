import { CountdownTimer } from "./CountdownTimer";

export const StickyCTA = () => {
  const handleClick = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-t border-gold/40 shadow-[0_-10px_40px_-10px_hsl(45_93%_47%/0.4)]">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div className="hidden sm:flex flex-col">
          <CountdownTimer variant="compact" />
          <span className="text-xs text-muted-foreground">Precio sube a $ 97</span>
        </div>
        <button
          onClick={handleClick}
          className="flex-1 sm:flex-initial gradient-gold text-primary-foreground font-bold text-base md:text-lg px-6 py-4 rounded-xl shadow-gold bounce-cta hover:scale-[1.02] active:scale-[0.98] transition-transform"
        >
          ¡SÍ! QUIERO EL PROTOCOLO POR $ 27
        </button>
      </div>
    </div>
  );
};
