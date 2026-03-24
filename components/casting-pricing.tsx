"use client";

import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

// AI-generated images (no real celebrities)
const CAROUSEL_IMAGES = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MZuy3JnQk6ageZ8980Dj88JfYCpJ3x.png",
    alt: "Characters management grid with AI-generated actor headshots",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pxtvYC1Hk6BUQGzON31xqGPJrKHJv8.png",
    alt: "Actor database with AI-generated candidate cards",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0orIt2Gm3hXPskgrA8Y15aqn1Ooz2P.png",
    alt: "Actor detail view with AI-generated profile and media player",
  },
];

const FADE_DURATION = 900;  // ms — cross-fade between slides
const DISPLAY_TIME  = 5000; // ms — how long each slide is fully visible

const includedFeatures = [
  "Unlimited projects",
  "Real-time team collaboration",
  "Talent organization & tags",
  "MovieLabs OMC alignment",
  "Priority support",
  "Full feature access",
];

export function CastingPricing() {
  // `active` = the visible slide index; `prev` = the slide fading out
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const activeRef = useRef(0);
  const transitioningRef = useRef(false);
  const finishRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Kick off a cross-fade to `target`
  const transitionTo = useCallback((target: number) => {
    if (transitioningRef.current || target === activeRef.current) return;

    const from = activeRef.current;
    transitioningRef.current = true;
    activeRef.current = target;

    // 1. Mount both slides — outgoing at full opacity, incoming at 0
    setPrev(from);
    setActive(target);
    setTransitioning(false); // incoming opacity = 0

    // 2. After one paint, flip transitioning → true so CSS kicks in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransitioning(true); // incoming fades to 1, outgoing fades to 0
      });
    });

    // 3. Clean up after fade completes
    if (finishRef.current) clearTimeout(finishRef.current);
    finishRef.current = setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
      transitioningRef.current = false;
    }, FADE_DURATION + 50);
  }, []);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const next = (activeRef.current + 1) % CAROUSEL_IMAGES.length;
      transitionTo(next);
    }, DISPLAY_TIME);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (finishRef.current) clearTimeout(finishRef.current);
    };
  }, [transitionTo]);

  const goPrev = () => {
    const target = (activeRef.current - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length;
    transitionTo(target);
  };

  const goNext = () => {
    const target = (activeRef.current + 1) % CAROUSEL_IMAGES.length;
    transitionTo(target);
  };

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">

      {/* ── Carousel background ── */}
      <div className="absolute inset-0" aria-hidden="true">
        {/*
          Layering strategy:
          - `prev` slide: z-index 1, fades from opacity-1 → opacity-0 during transition
          - `active` slide: z-index 2, fades from opacity-0 → opacity-1 during transition
          - When no transition: only `active` is rendered at opacity-1
        */}

        {/* Outgoing slide */}
        {prev !== null && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${CAROUSEL_IMAGES[prev].src}')`,
              opacity: transitioning ? 0 : 1,
              zIndex: 1,
              transition: `opacity ${FADE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              willChange: "opacity",
            }}
          />
        )}

        {/* Active (incoming) slide */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${CAROUSEL_IMAGES[active].src}')`,
            opacity: prev !== null ? (transitioning ? 1 : 0) : 1,
            zIndex: 2,
            transition: prev !== null
              ? `opacity ${FADE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
              : "none",
            willChange: "opacity",
          }}
        />

        {/* Overlay — 90% opaque (10% transparent) */}
        <div className="absolute inset-0 bg-black/90" style={{ zIndex: 3 }} />

        {/* Top fade from previous section */}
        <div
          className="absolute inset-x-0 top-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to top, transparent, hsl(0 0% 4%))",
            zIndex: 4,
          }}
        />

        {/* Bottom fade to next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, hsl(0 0% 4%))",
            zIndex: 4,
          }}
        />
      </div>

      {/* ── Previous / Next navigation arrows ── */}
      <button
        onClick={goPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ── Content ── */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Test GoGreenlight's Casting Platform
          </h2>
        </div>

        {/* Pricing card */}
        <div className="rounded-3xl border border-primary/30 bg-card/90 backdrop-blur-sm p-8 lg:p-12 glow">

          {/* Features grid */}
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
            Everything included
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {includedFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-8" />

          {/* CTA */}
          <div className="text-center">
            <Link
              href="#signup"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all text-lg"
            >
              Test the casting platform for free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-muted-foreground mt-3">No credit card required</p>
          </div>
        </div>

        {/* Dot indicators */}
        <div
          className="flex items-center justify-center gap-3 mt-8"
          role="tablist"
          aria-label="Carousel slide indicators"
        >
          {CAROUSEL_IMAGES.map((img, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Show slide ${i + 1}: ${img.alt}`}
              onClick={() => transitionTo(i)}
              className={`rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                i === active
                  ? "bg-primary w-8 h-2"
                  : "bg-white/40 hover:bg-white/65 w-2 h-2"
              }`}
            />
          ))}
        </div>

        {/* FAQ teaser */}
        <p className="text-center text-muted-foreground mt-8">
          Have questions?{" "}
          <Link href="mailto:contact@gogreenlight.ai" className="text-primary hover:underline">
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
}
