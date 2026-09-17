import { useEffect, useState } from "react";

interface CountdownTimerProps {
  minutes?: number;
  variant?: "hero" | "compact";
}

const STORAGE_KEY = "upsell_deadline_v1";

export const CountdownTimer = ({ minutes = 10, variant = "hero" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    let deadline = Number(localStorage.getItem(STORAGE_KEY));
    if (!deadline || deadline < Date.now()) {
      deadline = Date.now() + minutes * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, String(deadline));
    }
    const tick = () => {
      const diff = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
      setTimeLeft(diff);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [minutes]);

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

  if (variant === "compact") {
    return (
      <span className="text-warning font-bold tabular-nums">
        ⏰ {mm}:{ss}
      </span>
    );
  }

  return (
    <div className="inline-flex flex-col items-center gap-2 fade-in-up">
      <span className="text-sm uppercase tracking-widest text-muted-foreground">
        La oferta expira en
      </span>
      <div className="flex items-center gap-3">
        <TimeBox value={mm} label="MIN" />
        <span className="text-warning text-4xl md:text-6xl font-bold animate-pulse">:</span>
        <TimeBox value={ss} label="SEG" />
      </div>
    </div>
  );
};

const TimeBox = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-card border-2 border-warning/60 rounded-xl px-5 py-3 md:px-7 md:py-4 shadow-[0_0_30px_-5px_hsl(var(--warning)/0.5)]">
      <span className="text-warning text-4xl md:text-6xl font-bold tabular-nums">{value}</span>
    </div>
    <span className="text-xs mt-1 text-muted-foreground tracking-widest">{label}</span>
  </div>
);
