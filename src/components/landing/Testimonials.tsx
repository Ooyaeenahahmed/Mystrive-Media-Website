import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Wrench, Home as HomeIcon, Thermometer, Zap, Settings, Hammer, PaintBucket, Wind } from "lucide-react";

type Testimonial = { quote: string; name: string; title: string; initials: string; Icon: React.ComponentType<{ className?: string }> };

const items: Testimonial[] = [
  { quote: "At first I assumed customers would immediately know they were talking to AI. What surprised me was how natural the conversations felt. We tested it with a few people and most just treated it like a normal receptionist. The biggest win for us wasn't the technology but knowing calls were still being answered after hours.", name: "Mark Reynolds", title: "Owner, Reynolds Plumbing", initials: "MR", Icon: Wrench },
  { quote: "We already had someone answering phones during the day, so I wasn't looking to replace anybody. What made sense was covering the calls that came in when everyone was busy or after we closed. Those were the calls we were losing.", name: "Jennifer Walsh", title: "Owner, Walsh Roofing", initials: "JW", Icon: HomeIcon },
  { quote: "I thought this was going to be one of those robotic phone systems where customers mash buttons and get frustrated. Instead, it handled basic questions, collected information, and booked appointments without creating extra work for us.", name: "David Martinez", title: "HVAC Contractor", initials: "DM", Icon: Thermometer },
  { quote: "Our biggest issue wasn't getting leads. It was responding fast enough. We'd miss calls while out on jobs and by the time we called back, the customer had already hired somebody else. This helped solve that.", name: "Chris Bennett", title: "Owner, Bennett Electrical", initials: "CB", Icon: Zap },
  { quote: "I was skeptical because we already use software for scheduling and customer management. What I liked was that it worked alongside what we already had instead of forcing us to change everything.", name: "Sarah Thompson", title: "Operations Manager, Thompson Home Services", initials: "ST", Icon: Settings },
  { quote: "I honestly thought the setup process would be complicated. It turned out to be much simpler than I expected. Once the call flow was mapped out, everything felt pretty straightforward.", name: "Michael Carter", title: "Owner, Carter Remodeling", initials: "MC", Icon: Hammer },
  { quote: "As a smaller company, we don't have someone dedicated to answering phones all day. If we're on a job site, we're on a job site. Having calls answered immediately instead of going to voicemail made a noticeable difference.", name: "Kevin Foster", title: "Owner, Foster Painting", initials: "KF", Icon: PaintBucket },
  { quote: "I didn't really care whether it was AI or not. I cared whether callers got an answer when they needed one. From that perspective, it did exactly what we needed it to do.", name: "Brian Lewis", title: "Owner, Lewis HVAC", initials: "BL", Icon: Wind },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const dragX = useRef(0);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + items.length) % items.length);
  }, []);
  const goTo = (i: number) => setIndex(i);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, [paused, reduce]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `calc(-${index} * 100% + 0px)` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragStart={(_, info) => { dragX.current = info.point.x; }}
          onDragEnd={(_, info) => {
            const dx = info.point.x - dragX.current;
            if (dx < -60) go(1);
            else if (dx > 60) go(-1);
          }}
        >
          {items.map((t, i) => {
            const active = i === index;
            return (
              <div key={i} className="w-full shrink-0 px-2 sm:px-6">
                <motion.article
                  animate={{ scale: active ? 1 : 0.94, opacity: active ? 1 : 0.55 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface/80 backdrop-blur p-7 sm:p-10 shadow-card"
                >
                  <Quote className="size-10 sm:size-12 text-teal" strokeWidth={2.25} />
                  <p className="mt-5 text-lg sm:text-xl leading-relaxed text-foreground/95">
                    {t.quote}
                  </p>
                  <div className="mt-7 flex items-center gap-4">
                    <div className="relative size-12 rounded-full bg-teal/15 border border-teal/40 flex items-center justify-center shrink-0">
                      <t.Icon className="size-5 text-teal" />
                      <span className="absolute -bottom-1 -right-1 size-5 rounded-full bg-surface border border-teal/40 text-[9px] font-mono font-semibold text-teal flex items-center justify-center">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.title}</div>
                    </div>
                  </div>
                </motion.article>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="size-10 rounded-full border border-border bg-surface/70 hover:border-teal hover:text-teal transition flex items-center justify-center"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-teal" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="size-10 rounded-full border border-border bg-surface/70 hover:border-teal hover:text-teal transition flex items-center justify-center"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
