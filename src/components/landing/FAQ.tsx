import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What is an AI receptionist?", a: "A voice AI that answers your business phone like a great front-desk person would — greets callers, answers common questions, qualifies the lead, and books appointments, day or night." },
  { q: "Is it replacing my staff?", a: "Not really — think backup that never sleeps. It picks up what your team can't: after hours, busy periods, when everyone's on another line." },
  { q: "Does it work 24/7?", a: "Yes — nights, weekends, holidays, no hold times." },
  { q: "Can it book appointments directly onto my calendar?", a: "Yes, in real time, no back-and-forth." },
  { q: "Will it sound robotic?", a: "No — it's built to sound like a real person on your team, not a stiff automated system." },
  { q: "How fast can it be set up?", a: "Depends on the business, but most go live fast once we understand your call flow and scheduling needs — we map that out on the consultation." },
  { q: "How much does this cost?", a: "Depends on the size of the business and which pieces you need. The best way to get a real number is a quick consultation with Ooyaeenah." },
  { q: "Will this work for my trade, or my restaurant?", a: "Yes — roofing, remodeling, plumbing, HVAC, and electrical are exactly who we focus on, capturing estimate requests and after-hours emergencies even while your crews are out on jobs. For restaurants, it handles reservations, hours, and menu questions, plus overflow calls during the rush." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div className="space-y-3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border bg-surface/60 backdrop-blur transition-colors ${
              isOpen ? "border-teal/50" : "border-border hover:border-muted-foreground/30"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5"
            >
              <span className="font-display font-semibold text-base sm:text-lg text-foreground">
                {f.q}
              </span>
              <span
                className={`shrink-0 size-8 rounded-full border flex items-center justify-center transition-all ${
                  isOpen ? "border-teal text-teal rotate-45" : "border-border text-muted-foreground"
                }`}
              >
                <Plus className="size-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="c"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 text-muted-foreground leading-relaxed">
                    {f.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
