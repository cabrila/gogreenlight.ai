"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

// Duration of the cross-fade blend in ms
const TRANSITION_DURATION = 1400;
// Time each slide is fully visible before the next begins
const SLIDE_INTERVAL = 5500;

export function CastingHero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  // Tracks whether the outgoing slide's Ken-Burns zoom has started
  const [zooming, setZooming] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = (nextIndex: number) => {
    if (transitioning) return;
    setNext(nextIndex);
    setTransitioning(true);
    setZooming(true);

    timerRef.current = setTimeout(() => {
      setCurrent(nextIndex);
      setNext(null);
      setTransitioning(false);
      setZooming(false);
    }, TRANSITION_DURATION);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      advance((current + 1) % CAROUSEL_IMAGES.length);
    }, SLIDE_INTERVAL);

    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, transitioning]);

  const goTo = (index: number) => {
    if (index === current) return;
    advance(index);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* ── Carousel background ── */}
      <div className="absolute inset-0">
        {/* Current (outgoing) slide — fades out with a subtle Ken Burns zoom */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${CAROUSEL_IMAGES[current].src}')`,
            opacity: transitioning ? 0 : 1,
            transform: zooming ? "scale(1.06)" : "scale(1)",
            transition: transitioning
              ? `opacity ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1),
                 transform ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
              : "transform 6000ms linear",
            willChange: "opacity, transform",
          }}
          aria-hidden="true"
        />

        {/* Incoming slide — fades in with a slight zoom-out settle */}
        {next !== null && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${CAROUSEL_IMAGES[next].src}')`,
              opacity: transitioning ? 1 : 0,
              transform: transitioning ? "scale(1)" : "scale(1.06)",
              transition: `opacity ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1),
                           transform ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              willChange: "opacity, transform",
            }}
            aria-hidden="true"
          />
        )}

        {/* Semi-transparent black middleground overlay — increased for readability */}
        <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

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
