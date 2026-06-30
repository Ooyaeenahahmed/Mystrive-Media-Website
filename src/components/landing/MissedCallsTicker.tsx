import { useEffect, useState } from "react";
import { TrendingDown } from "lucide-react";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

// Resets after hitting a high-ticket job range — reflects how much a single
// missed remodeling/restoration job can be worth, not just small service calls.
const RESET_AT = 85000;
const TICK_MS = 350;
const MIN_STEP = 140;
const MAX_STEP = 520;

export function MissedCallsTicker() {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setAmount((prev) => {
        const next = prev + Math.floor(Math.random() * (MAX_STEP - MIN_STEP)) + MIN_STEP;
        return next > RESET_AT ? 0 : next;
      });
    }, TICK_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-teal/30 bg-teal/5"
      role="status"
      aria-live="polite"
    >
      <span className="relative flex size-2 shrink-0" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full size-2 bg-teal" />
      </span>
      <TrendingDown className="size-3.5 text-teal shrink-0" aria-hidden="true" />
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        Estimated revenue lost to missed calls today
      </span>
      <span className="font-display font-bold text-lg sm:text-xl text-teal tabular-nums">
        {fmt(amount)}
      </span>
    </div>
  );
}
