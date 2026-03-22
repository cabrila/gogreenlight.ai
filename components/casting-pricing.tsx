"use client";

import { Check, ArrowRight } from "lucide-react";
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

const TRANSITION_DURATION = 1400;
const SLIDE_INTERVAL = 5500;

const includedFeatures = [
  "Unlimited projects",
  "Real-time team collaboration",
  "Talent organization & tags",
  "MovieLabs OMC alignment",
  "Priority support",
  "Full feature access",
];

export function CastingPricing() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
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
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      {/* ── Carousel background ── */}
      <div className="absolute inset-0">
        {/* Current (outgoing) slide */}
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

        {/* Incoming slide */}
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

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

        {/* Top gradient fade from previous section */}
        <div
          className="absolute inset-x-0 top-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to top, transparent, hsl(0 0% 4%))",
          }}
          aria-hidden="true"
        />

        {/* Bottom gradient fade to next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, hsl(0 0% 4%))",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Test GoGreenlight's Casting Platform
          </h2>
        </div>

        {/* Pricing card */}
        <div className="relative rounded-3xl border border-primary/30 bg-card/90 backdrop-blur-sm p-8 lg:p-12 glow">
          {/* Features */}
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              Everything included
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8" />

          {/* CTA */}
          <div className="flex justify-center">
            <div className="text-center">
              <Link
                href="#signup"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all text-lg"
              >
                Test the casting platform for free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-sm text-muted-foreground mt-3">
                No credit card required
              </p>
            </div>
          </div>
        </div>

        {/* Carousel dot indicators */}
        <div
          className="flex items-center justify-center gap-3 mt-8"
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

        {/* FAQ teaser */}
        <p className="text-center text-muted-foreground mt-8">
          Have questions?{" "}
          <Link
            href="mailto:contact@gogreenlight.ai"
            className="text-primary hover:underline"
          >
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
}
