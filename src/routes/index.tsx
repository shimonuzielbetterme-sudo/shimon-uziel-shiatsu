import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { YinYangIntro } from "@/components/YinYangIntro";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero.jpg";
import shiatsuImg from "@/assets/shiatsu.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shimon Uziel — Shiatsu Therapist | Restoring Balance" },
      {
        name: "description",
        content:
          "Shimon Uziel is a Shiatsu therapist who comes to Shiatsu days and restores balance to life. Calm, professional treatments. Call 052-5522602.",
      },
      { property: "og:title", content: "Shimon Uziel — Shiatsu Therapist" },
      {
        property: "og:description",
        content:
          "Shiatsu therapist who comes to Shiatsu days and restores balance to life. Book a treatment: 052-5522602.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Shiatsu", href: "#shiatsu" },
  { label: "Benefits", href: "#benefits" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const BENEFITS = [
  {
    title: "Stress & burnout",
    text: "For anyone carrying a heavy workload — Shiatsu quiets the nervous system and returns a sense of calm.",
  },
  {
    title: "Back, neck & shoulders",
    text: "Releases the tension patterns built by long hours at a desk, driving or physical work.",
  },
  {
    title: "Sleep & energy",
    text: "Restores the natural rhythm of the body, so rest becomes deeper and days feel lighter.",
  },
  {
    title: "Workplace Shiatsu days",
    text: "Shimon comes to you — organised, professional sessions that leave a whole team balanced.",
  },
  {
    title: "Athletes & movement",
    text: "Improves flexibility, circulation and recovery between efforts.",
  },
  {
    title: "Emotional balance",
    text: "A quiet space to breathe, let go, and come back to yourself.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Shimon came to our company Shiatsu day. Twenty minutes on the mat and I felt like a different person for the rest of the week.",
    name: "Michal R.",
    role: "Team lead, Hi-tech",
  },
  {
    quote:
      "Calm, precise hands and a real understanding of the body. My shoulder pain finally let go after years.",
    name: "Avi K.",
    role: "Contractor",
  },
  {
    quote:
      "The most professional and respectful treatment I have had. You leave balanced, quiet and clear.",
    name: "Noa L.",
    role: "Teacher",
  },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <YinYangIntro />

      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
          scrolled
            ? "border-border bg-background/85 backdrop-blur-md"
            : "border-transparent bg-background/40 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <YinYangMark />
            <span className="truncate font-display text-xl font-medium tracking-tight sm:text-2xl">
              Shimon Uziel
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:0525522602"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              052-5522602
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="shrink-0 rounded-full border border-border px-4 py-2 text-sm md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {menuOpen && (
          <nav className="animate-fade-in border-t border-border bg-background px-5 pb-5 pt-3 md:hidden">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm text-muted-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:0525522602"
              className="mt-2 inline-block rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
            >
              Call 052-5522602
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <Reveal>
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Shiatsu · Balance · Presence
              </p>
              <h1 className="font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
                Shiatsu therapist who comes to Shiatsu days and restores balance to life
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Quiet, attentive treatment rooted in traditional Japanese Shiatsu. Shimon
                Uziel works with the body's own rhythm to release tension, calm the mind
                and bring people back into balance — in the clinic or at your workplace.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="tel:0525522602"
                  className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-ink-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Book a treatment
                </a>
                <a
                  href="#shiatsu"
                  className="rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  What is Shiatsu
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-sand/60 blur-2xl" />
                <img
                  src={heroImg}
                  width={1600}
                  height={1200}
                  alt="Calm Shiatsu treatment space with a futon mat, folded linen and candles"
                  className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-y border-border bg-secondary/40">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.2fr] md:py-28">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl">About Shimon</h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </Reveal>
            <Reveal delay={120} className="space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed text-foreground">
                For Shimon Uziel, Shiatsu is not a technique — it is a conversation with
                the body.
              </p>
              <p className="leading-relaxed">
                Working with calm, grounded pressure along the body's energy lines, he
                helps people release what they have been carrying: long working days,
                stress, pain and fatigue. Every session is adapted to the person on the
                mat — the pace, the depth, the silence.
              </p>
              <p className="leading-relaxed">
                Alongside private treatments, Shimon travels to companies, teams and
                events for dedicated Shiatsu days, bringing a full professional setup and
                a genuinely restorative experience to the whole group.
              </p>
              <div className="grid gap-6 pt-4 sm:grid-cols-3">
                {[
                  ["Traditional", "Japanese Shiatsu method"],
                  ["Mobile", "Shiatsu days at your place"],
                  ["Personal", "Every treatment adapted"],
                ].map(([t, s]) => (
                  <div key={t}>
                    <p className="font-display text-2xl text-foreground">{t}</p>
                    <p className="mt-1 text-sm">{s}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Shiatsu */}
        <section id="shiatsu" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <img
                src={shiatsuImg}
                loading="lazy"
                width={1200}
                height={1408}
                alt="Therapist's hands applying a gentle Shiatsu palm press to a client's back"
                className="aspect-[4/5] w-full rounded-[1.75rem] object-cover"
              />
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display text-3xl sm:text-4xl">What is Shiatsu</h2>
              <div className="mt-4 h-px w-16 bg-primary" />
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Shiatsu is a traditional Japanese bodywork therapy. Using palms, thumbs
                and gentle stretches, the therapist applies rhythmic pressure along the
                meridians — the pathways through which energy moves in the body.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The treatment is given fully clothed, on a mat, without oils. What it
                offers is not just relief from physical tension, but a return to
                equilibrium: between effort and rest, doing and being, yin and yang.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Fully clothed, on a comfortable futon mat",
                  "Calm pace, adapted pressure, no forcing",
                  "45–60 minutes of complete quiet",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal className="max-w-xl">
              <h2 className="font-display text-3xl sm:text-4xl">Who it's for</h2>
              <div className="mt-4 h-px w-16 bg-primary" />
              <p className="mt-6 text-muted-foreground">
                Shiatsu meets you wherever you are — whether you are in pain, exhausted,
                or simply looking for a moment of true quiet.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((b, i) => (
                <Reveal key={b.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1">
                    <YinYangMark className="h-6 w-6" />
                    <h3 className="mt-5 font-display text-2xl">{b.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {b.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl">Testimonials</h2>
            <div className="mt-4 h-px w-16 bg-primary" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-border p-7">
                  <blockquote className="font-display text-xl leading-relaxed">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    <span className="text-foreground">{t.name}</span> · {t.role}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
            <Reveal>
              <YinYangMark className="mx-auto h-10 w-10" inverted />
              <h2 className="mt-8 font-display text-3xl sm:text-5xl">
                Let's bring balance back
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed opacity-70">
                Private treatments, ongoing sessions and Shiatsu days for teams and
                events. Call for availability — Shimon will be glad to help you find the
                right treatment.
              </p>
              <a
                href="tel:0525522602"
                className="mt-10 inline-block rounded-full bg-background px-9 py-4 font-display text-2xl text-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                052-5522602
              </a>
              <p className="mt-6 text-xs uppercase tracking-[0.28em] opacity-50">
                Tap to call
              </p>
            </Reveal>
          </div>
        </section>

        <footer className="bg-ink text-ink-foreground">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 px-5 py-8 text-xs opacity-60 sm:flex-row">
            <span>© {new Date().getFullYear()} Shimon Uziel · Shiatsu Therapy</span>
            <a href="tel:0525522602" className="hover:opacity-100">
              052-5522602
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}

function YinYangMark({
  className = "h-7 w-7",
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  const dark = inverted ? "currentColor" : "currentColor";
  return (
    <svg viewBox="0 0 100 100" className={`${className} shrink-0`} aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="none" stroke={dark} strokeWidth="3" />
      <path
        d="M50 2 A48 48 0 0 0 50 98 A24 24 0 0 0 50 50 A24 24 0 0 1 50 2 Z"
        fill={dark}
      />
      <circle cx="50" cy="26" r="6" fill={dark} />
    </svg>
  );
}
