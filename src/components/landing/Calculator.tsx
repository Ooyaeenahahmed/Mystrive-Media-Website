import { useMemo, useState } from "react";
import { TrendingDown } from "lucide-react";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function Calculator() {
  const [calls, setCalls] = useState(100);
  const [missedPct, setMissedPct] = useState(20);
  const [jobValue, setJobValue] = useState(350);
  const [closeRate, setCloseRate] = useState(30);

  const { missed, jobsLost, monthly, annual } = useMemo(() => {
    const missed = Math.round((calls * missedPct) / 100);
    const jobsLost = (missed * closeRate) / 100;
    const monthly = jobsLost * jobValue;
    return { missed, jobsLost: Math.round(jobsLost), monthly, annual: monthly * 12 };
  }, [calls, missedPct, jobValue, closeRate]);

  return (
    <div className="rounded-3xl border border-border bg-surface/60 backdrop-blur p-6 sm:p-10 shadow-card">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="space-y-7">
          <NumberInput label="Calls per month" value={calls} onChange={setCalls} min={0} />
          <SliderInput
            label="% of calls missed or unanswered"
            value={missedPct}
            onChange={setMissedPct}
            suffix="%"
          />
          <NumberInput label="Average job value" value={jobValue} onChange={setJobValue} prefix="$" min={0} />
          <SliderInput
            label="Close rate on answered calls"
            value={closeRate}
            onChange={setCloseRate}
            suffix="%"
          />
        </div>

        {/* Outputs */}
        <div className="rounded-2xl bg-background/60 border border-border p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-mono text-muted-foreground">
            <TrendingDown className="size-4 text-teal" /> Estimated monthly revenue lost
          </div>
          <div className="mt-3 font-display font-bold text-5xl sm:text-6xl text-teal tabular-nums leading-none">
            {fmt(monthly)}
          </div>
          <div className="mt-2 text-sm text-muted-foreground font-mono">
            ≈ {fmt(annual)} per year
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Stat label="Missed calls / mo" value={missed.toString()} />
            <Stat label="Jobs lost / mo" value={jobsLost.toString()} />
          </div>
          <a
            href="https://cal.com/ooyaeenah-ahmed/30-min-consultation"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-7 inline-flex items-center justify-center h-12 px-6 rounded-full bg-teal text-primary-foreground font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            Let's fix this — Book a Call
          </a>
          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            Estimate based on the numbers you enter above. Not a guarantee of results — actual outcomes depend on your market, call quality, and setup.
          </p>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface-2 border border-border px-4 py-3">
      <div className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground">{label}</div>
      <div className="mt-1 font-mono text-xl text-foreground tabular-nums">{value}</div>
    </div>
  );
}

function NumberInput({
  label, value, onChange, prefix, min,
}: { label: string; value: number; onChange: (n: number) => void; prefix?: string; min?: number }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-2">{label}</span>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-mono">
            {prefix}
          </span>
        )}
        <input
          type="number"
          inputMode="numeric"
          value={value}
          min={min}
          onChange={(e) => onChange(Math.max(min ?? 0, Number(e.target.value) || 0))}
          className={`w-full h-12 rounded-xl bg-background border border-input text-foreground font-mono text-lg tabular-nums focus:border-teal focus:ring-0 focus:outline-none transition ${
            prefix ? "pl-9 pr-4" : "px-4"
          }`}
        />
      </div>
    </label>
  );
}

function SliderInput({
  label, value, onChange, suffix,
}: { label: string; value: number; onChange: (n: number) => void; suffix?: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="font-mono text-teal tabular-nums">
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        aria-valuetext={`${value}${suffix ?? ""}`}
        className="w-full accent-teal h-2"
        style={{
          background: `linear-gradient(to right, #16C6C6 ${value}%, rgba(147,161,176,0.18) ${value}%)`,
          borderRadius: 999,
          appearance: "none",
          WebkitAppearance: "none",
          outline: "none",
        }}
      />
    </div>
  );
}
