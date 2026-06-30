import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone, Clock, CalendarCheck, Cog, ShieldCheck, Linkedin, Instagram, Facebook } from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { CallCard } from "@/components/landing/CallCard";
import { Reveal } from "@/components/landing/Reveal";
import { Calculator } from "@/components/landing/Calculator";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CalEmbed } from "@/components/landing/CalEmbed";
import { MissedCallsTicker } from "@/components/landing/MissedCallsTicker";
import mark from "@/assets/mystrive-mark.png";
import wordmark from "@/assets/mystrive-wordmark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MyStrive — AI Receptionist for Contractors & Restaurants" },
      { name: "description", content: "Casey answers every call, handles questions, and books jobs 24/7 — so a missed call never costs you work again." },
      { property: "og:title", content: "MyStrive — AI Receptionist for Contractors" },
      { property: "og:description", content: "Every call answered. Every job booked. Even at 2 AM." },
    ],
  }),
  component: Home,
});

const CAL = "https://cal.com/ooyaeenah-ahmed/30-min-consultation";
const TEL = "tel:+19726196620";

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/30 bg-teal/5 text-teal text-xs uppercase tracking-[0.18em] font-mono">
              <span className="size-1.5 rounded-full bg-teal live-dot" /> AI Receptionists for Home Services & Restaurants
            </div>
            <h1 className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Every call answered.<br />
              Every job booked.<br />
              <span className="text-teal">Even at 2 AM.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              MyStrive gives your business a 24/7 AI receptionist that picks up instantly, handles the questions, and books the job — so a missed call never costs you work again.
            </p>
            <div className="mt-6">
              <MissedCallsTicker />
            </div>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href={CAL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 h-13 px-6 py-3.5 rounded-full bg-teal text-primary-foreground font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Book a Free Consultation <ArrowRight className="size-4" />
              </a>
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 h-13 px-6 py-3.5 rounded-full border border-border text-foreground font-medium hover:border-teal hover:text-teal transition-all"
              >
                <Phone className="size-4" /> Call Casey Now →
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs font-mono text-muted-foreground uppercase tracking-wider">
              <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-teal" /> Live now</span>
              <span>·</span>
              <span>Trusted by trades & restaurants</span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <CallCard />
          </Reveal>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-teal font-mono text-xs uppercase tracking-[0.2em]">See what missed calls are costing you</p>
            <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl">Find your revenue leak</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Plug in your own numbers — this is simple math on what you enter, nothing else.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Calculator />
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-3xl mb-14">
            <p className="text-teal font-mono text-xs uppercase tracking-[0.2em]">What Casey does</p>
            <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl">Built to capture the calls you're losing.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            <FeatureCard
              Icon={Clock}
              title="Always Picks Up"
              sub="24/7, no exceptions"
              points={[
                "Nights, weekends, holidays — every call gets answered",
                "No hold music, no voicemail, no \"we'll call you back\"",
                "Handles multiple calls at once during your busiest hours",
                "Sounds like a real person on your team, not a phone tree",
              ]}
            />
            <FeatureCard
              Icon={CalendarCheck}
              title="Books The Job"
              sub="Real bookings, in real time"
              points={[
                "Puts the appointment straight on your calendar — no back-and-forth",
                "Captures the details that matter: address, issue, urgency",
                "Flags emergencies so nothing urgent slips through",
                "Confirms the booking with the caller before hanging up",
              ]}
            />
            <FeatureCard
              Icon={Cog}
              title="Built For Your Trade"
              sub="Trained on how your business runs"
              points={[
                "Knows your services, hours, and how you want calls handled",
                "Won't guess — if it doesn't know something, it says so and gets you on the line",
                "Configured for roofing, HVAC, plumbing, electrical, remodeling, or restaurant calls",
                "Customized to your voice, not a generic script",
              ]}
            />
            <FeatureCard
              Icon={ShieldCheck}
              title="Never Loses A Lead"
              sub="Every call is a job opportunity"
              points={[
                "Catches the calls your team can't get to while they're on a job",
                "Backup for your front desk, not a replacement for it",
                "Works alongside the calendar or CRM you already use",
                "Every call recording and customer detail stays yours",
              ]}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 sm:py-28 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-teal font-mono text-xs uppercase tracking-[0.2em]">How it works</p>
            <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl">Three steps. Live in days.</h2>
          </Reveal>
          <div className="relative grid md:grid-cols-3 gap-8 md:gap-6">
            <div aria-hidden className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
            {[
              { n: "01", t: "Customer calls your number", d: "Same number your customers already call — nothing changes for them." },
              { n: "02", t: "Casey answers in seconds", d: "Greets the caller, answers common questions, and handles the conversation naturally." },
              { n: "03", t: "The job gets booked", d: "The appointment lands on your calendar and you're notified immediately — ready to go." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12} className="relative">
                <div className="flex md:flex-col items-start gap-4">
                  <div className="size-16 rounded-2xl border border-teal/40 bg-surface flex items-center justify-center font-display font-bold text-teal text-xl shrink-0 teal-glow">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl">{s.t}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="relative rounded-3xl border border-teal/30 bg-surface/70 backdrop-blur p-8 sm:p-14 text-center overflow-hidden">
              <div aria-hidden className="absolute -inset-20 bg-teal/10 blur-3xl opacity-60 pointer-events-none" />
              <div className="relative">
                <p className="text-teal font-mono text-xs uppercase tracking-[0.2em]">Try it yourself</p>
                <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl">Call Casey right now</h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
                  This is the actual AI receptionist, live. Call and ask about MyStrive, pricing, or what it can do for your business.
                </p>
                <a
                  href={TEL}
                  className="block mt-8 font-mono font-semibold text-4xl sm:text-5xl text-foreground hover:text-teal transition-colors tabular-nums tracking-tighter"
                >
                  (972) 619-6620
                </a>
                <a
                  href={TEL}
                  className="mt-6 inline-flex items-center gap-2 h-14 px-8 rounded-full bg-teal text-primary-foreground font-semibold text-lg hover:shadow-glow hover:-translate-y-0.5 transition-all"
                >
                  <Phone className="size-5" /> Call Casey Now
                </a>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground font-mono">
                  <span className="size-2 rounded-full bg-teal live-dot" />
                  Available 24/7 — yes, even right now
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 sm:py-28 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-teal font-mono text-xs uppercase tracking-[0.2em]">From the field</p>
            <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl">What contractors are saying</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-teal font-mono text-xs uppercase tracking-[0.2em]">Book a call</p>
            <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl">Let's talk about your business</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              30 minutes. We'll look at your call volume and figure out if this is a fit — no pressure, no pitch deck.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <CalEmbed />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="text-center mb-12">
            <p className="text-teal font-mono text-xs uppercase tracking-[0.2em]">Questions</p>
            <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl">Frequently asked</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-10 border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <img src={wordmark} alt="MyStrive" className="h-8 w-auto" />
              <p className="mt-4 text-muted-foreground max-w-sm">
                24/7 AI Receptionists for home service businesses & restaurants.
              </p>
              <div className="mt-5 flex items-center gap-3">
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/mystrive-media/", label: "LinkedIn" },
                  { Icon: Instagram, href: "https://www.instagram.com/mystrivemedia/", label: "Instagram" },
                  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61591509659914", label: "Facebook" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="size-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-teal hover:border-teal transition"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-teal transition">Features</a></li>
                <li><a href="#how" className="hover:text-teal transition">How It Works</a></li>
                <li><a href="#testimonials" className="hover:text-teal transition">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-teal transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href={TEL} className="hover:text-teal transition font-mono">
                    (972) 619-6620
                  </a>
                </li>
                <li>
                  <a href={CAL} target="_blank" rel="noreferrer noopener" className="hover:text-teal transition">
                    Book a call
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <img src={mark} alt="" className="size-5 opacity-70" />
              <span>© 2026 MyStrive Media. All rights reserved.</span>
            </div>
            <span>Built and run by Ooyaeenah Ahmed.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  Icon, title, sub, points,
}: { Icon: React.ComponentType<{ className?: string }>; title: string; sub: string; points: string[] }) {
  return (
    <Reveal>
      <div className="group h-full rounded-3xl border border-border bg-surface/60 backdrop-blur p-7 sm:p-8 hover:border-teal/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-glow">
        <div className="size-12 rounded-xl bg-teal/15 border border-teal/30 flex items-center justify-center text-teal mb-5">
          <Icon className="size-6" />
        </div>
        <h3 className="font-display font-bold text-2xl text-foreground">{title}</h3>
        <p className="mt-1 text-teal text-sm font-mono">{sub}</p>
        <ul className="mt-5 space-y-2.5">
          {points.map((p, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="mt-2 size-1.5 rounded-full bg-teal shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
