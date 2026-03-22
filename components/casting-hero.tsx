"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const CAROUSEL_IMAGES = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/actors-3Arf8B8D6hRmTsVWrdHGTz8Ur4jOvs.png",
    alt: "Actor casting list interface",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/characters-9ppApL91uHyTYwzH2wkXejRmcAqDBw.png",
    alt: "Characters management view",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/playerview-lwzWbfAS6JBqLNz3nbO8sxNApVmn6b.png",
    alt: "Actor profile player view",
  },
];

const TRANSITION_DURATION = 1000; // ms for cross-fade
const SLIDE_INTERVAL = 5000; // ms between auto-advances

export function CastingHero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (current + 1) % CAROUSEL_IMAGES.length;
      setNext(nextIndex);
      setFading(true);
      setTimeout(() => {
        setCurrent(nextIndex);
        setNext(null);
        setFading(false);
      }, TRANSITION_DURATION);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [current]);

  const goTo = (index: number) => {
    if (fading || index === current) return;
    setNext(index);
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setNext(null);
      setFading(false);
    }, TRANSITION_DURATION);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* ── Carousel background ── */}
      <div className="absolute inset-0">
        {/* Current slide */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${CAROUSEL_IMAGES[current].src}')`,
            opacity: fading ? 0 : 1,
            transition: fading
              ? `opacity ${TRANSITION_DURATION}ms ease-in-out`
              : "none",
          }}
          aria-hidden="true"
        />

        {/* Next slide — cross-fades in */}
        {next !== null && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${CAROUSEL_IMAGES[next].src}')`,
              opacity: fading ? 1 : 0,
              transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
            }}
            aria-hidden="true"
          />
        )}

        {/* Semi-transparent black middleground overlay */}
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

        {/* Gradient fade to site background at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, hsl(0 0% 4%))",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <p className="text-2xl sm:text-3xl text-primary mb-8 font-medium">
          For creators by creators
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">From vision to screen</span>
          <br />
          <span className="gradient-text">with less resistance</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
          The creative tool for creators, directors, producers and casting
          directors who refuse to let inefficiency and chaos stand between their
          vision and its realisation.
        </p>

        {/* CTA button */}
        <div className="flex items-center justify-center mb-10">
          <Link
            href="#signup"
            className="group flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow"
          >
            Test the casting platform for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Beta clarification */}
        <p className="text-sm text-muted-foreground mb-10 max-w-xl mx-auto">
          GoGreenlight launches with the casting platform. The prototype shows
          our full AI native vision for departmental integration - including
          locations, props and costume.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Built for Creators</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>MovieLabs OMC Compatible</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Free test before public launch</span>
          </div>
        </div>

        {/* ── Carousel dot indicators ── */}
        <div
          className="flex items-center justify-center gap-3 mt-12"
          role="tablist"
          aria-label="Carousel slide indicators"
        >
          {CAROUSEL_IMAGES.map((img, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Show slide ${i + 1}: ${img.alt}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                i === current
                  ? "bg-primary w-6 h-2"
                  : "bg-white/30 hover:bg-white/55 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
