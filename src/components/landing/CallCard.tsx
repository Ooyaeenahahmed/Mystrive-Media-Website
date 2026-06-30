import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Phone, CheckCircle2 } from "lucide-react";

type Line = { who: "caller" | "casey"; text: string };
const transcript: Line[] = [
  { who: "caller", text: "Hi, my AC stopped working — can someone come out today?" },
  { who: "casey", text: "Absolutely. I can get a tech to you this afternoon. What's the service address?" },
  { who: "caller", text: "412 Oak Street. It's getting hot fast." },
  { who: "casey", text: "Got it. Booking you for 2:30 PM today — you'll get a confirmation text now." },
];

type Phase = "ringing" | "transcript" | "booked";

export function CallCard() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("ringing");
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (reduce) {
      setPhase("booked");
      setShown(transcript.length);
      return;
    }
    let timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setPhase("ringing");
      setShown(0);
      timers.push(setTimeout(() => setPhase("transcript"), 2200));
      transcript.forEach((_, i) => {
        timers.push(setTimeout(() => setShown(i + 1), 2600 + i * 1400));
      });
      timers.push(setTimeout(() => setPhase("booked"), 2600 + transcript.length * 1400 + 400));
      timers.push(setTimeout(run, 2600 + transcript.length * 1400 + 3200));
    };
    run();
    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-8 rounded-[2rem] bg-teal/10 blur-3xl pointer-events-none" aria-hidden />
      <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-xl shadow-card overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-2/60">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="size-2 rounded-full bg-teal live-dot" aria-hidden />
            LIVE · CASEY
          </div>
          <div className="text-xs font-mono text-muted-foreground">(972) 619-6620</div>
        </div>

        {/* Body */}
        <div className="relative min-h-[360px] p-6">
          <AnimatePresence mode="wait">
            {phase === "ringing" && (
              <motion.div
                key="ringing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div className="relative size-28 flex items-center justify-center">
                  {[0, 0.6, 1.2].map((d) => (
                    <span
                      key={d}
                      className="absolute inset-0 rounded-full border-2 border-teal"
                      style={{ animation: `ring-pulse 1.8s ease-out ${d}s infinite` }}
                      aria-hidden
                    />
                  ))}
                  <div className="relative size-20 rounded-full bg-teal/15 border border-teal/40 flex items-center justify-center">
                    <Phone className="size-8 text-teal" />
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground font-mono">Incoming call…</p>
              </motion.div>
            )}

            {phase !== "ringing" && (
              <motion.div
                key="chat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                {transcript.slice(0, shown).map((l, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className={`flex ${l.who === "casey" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
                        l.who === "casey"
                          ? "bg-teal/15 text-foreground border border-teal/25 rounded-bl-sm"
                          : "bg-surface-2 text-foreground/90 border border-border rounded-br-sm"
                      }`}
                    >
                      <div className="text-[10px] uppercase tracking-wider font-mono mb-0.5 opacity-60">
                        {l.who === "casey" ? "Casey" : "Caller"}
                      </div>
                      {l.text}
                    </div>
                  </motion.div>
                ))}

                {phase === "booked" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "backOut" }}
                    className="pt-2 flex justify-center"
                  >
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-teal/15 border border-teal/40 text-teal text-xs font-semibold font-mono">
                      <CheckCircle2 className="size-4" />
                      BOOKED · TODAY 2:30 PM
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
