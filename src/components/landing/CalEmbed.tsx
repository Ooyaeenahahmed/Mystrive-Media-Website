import { CalendarCheck, ArrowRight } from "lucide-react";

export function CalEmbed() {
  return (
    <div className="rounded-3xl border border-border bg-surface/60 backdrop-blur p-10 sm:p-14 shadow-card text-center">
      <div className="mx-auto size-16 rounded-2xl bg-teal/15 border border-teal/30 flex items-center justify-center text-teal mb-6">
        <CalendarCheck className="size-8" />
      </div>
      <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
        Pick a time that works for you
      </h3>
      <p className="mt-3 text-muted-foreground max-w-md mx-auto">
        Opens our live booking calendar in a new tab — pick a slot, and you're confirmed instantly.
      </p>
      <a
        href="https://cal.com/ooyaeenah-ahmed/30-min-consultation"
        target="_blank"
        rel="noreferrer noopener"
        className="mt-8 inline-flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-full bg-teal text-primary-foreground font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
      >
        Book a Free Consultation <ArrowRight className="size-4" />
      </a>
    </div>
  );
}
