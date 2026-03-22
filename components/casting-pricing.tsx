"use client";

import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

// Actors.png is first in the sequence as requested
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

// Configurable timing (in milliseconds)
const TRANSITION_DURATION = 1200; // Duration of fade transition
const SLIDE_DISPLAY_TIME = 5000; // Time each slide is displayed before auto-advance

const includedFeatures = [
  "Unlimited projects",
  "Real-time team collaboration",
  "Talent organization & tags",
  "MovieLabs OMC alignment",
  "Priority support",
  "Full feature access",
];

export function CastingPricing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear all timers
  const clearTimers = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
    if (transitionRef.current) {
      clearTimeout(transitionRef.current);
      transitionRef.current = null;
    }
  }, []);

  // Navigate to a specific slide
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;

      // Set up the transition
      setNextIndex(index);
      setIsTransitioning(true);

      // After transition completes, update the current index
      transitionRef.current = setTimeout(() => {
        setCurrentIndex(index);
        setNextIndex(null);
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    },
    [isTransitioning, currentIndex]
  );

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    const next = (currentIndex + 1) % CAROUSEL_IMAGES.length;
    goToSlide(next);
  }, [currentIndex, goToSlide]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    const prev =
      (currentIndex - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length;
    goToSlide(prev);
  }, [currentIndex, goToSlide]);

  // Auto-play effect
  useEffect(() => {
    // Start auto-play interval
    autoPlayRef.current = setInterval(() => {
      const next = (currentIndex + 1) % CAROUSEL_IMAGES.length;
      if (!isTransitioning) {
        setNextIndex(next);
        setIsTransitioning(true);

        transitionRef.current = setTimeout(() => {
          setCurrentIndex(next);
          setNextIndex(null);
          setIsTransitioning(false);
        }, TRANSITION_DURATION);
      }
    }, SLIDE_DISPLAY_TIME);

    return () => clearTimers();
  }, [currentIndex, isTransitioning, clearTimers]);

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      {/* ── Carousel background ── */}
      <div className="absolute inset-0">
        {/* All slides rendered with opacity transitions */}
        {CAROUSEL_IMAGES.map((image, index) => {
          const isCurrent = index === currentIndex;
          const isNext = index === nextIndex;
          const isVisible = isCurrent || isNext;

          return (
            <div
              key={image.src}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${image.src}')`,
                opacity: isNext ? 1 : isCurrent && isTransitioning ? 0 : isCurrent ? 1 : 0,
                transform: isVisible ? "scale(1.02)" : "scale(1)",
                transition: `opacity ${TRANSITION_DURATION}ms ease-in-out, transform ${TRANSITION_DURATION * 2}ms ease-out`,
                zIndex: isNext ? 2 : isCurrent ? 1 : 0,
                willChange: "opacity, transform",
              }}
              aria-hidden={!isCurrent}
            />
          );
        })}

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" aria-hidden="true" />

        {/* Top gradient fade from previous section */}
        <div
          className="absolute inset-x-0 top-0 h-32 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to top, transparent, hsl(0 0% 4%))",
          }}
          aria-hidden="true"
        />

        {/* Bottom gradient fade to next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to bottom, transparent, hsl(0 0% 4%))",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Navigation arrows ── */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ── Content ── */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Carousel controls: dots and nav */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* Dot indicators */}
          <div
            className="flex items-center justify-center gap-3"
            role="tablist"
            aria-label="Carousel slide indicators"
          >
            {CAROUSEL_IMAGES.map((img, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Show slide ${i + 1}: ${img.alt}`}
                onClick={() => goToSlide(i)}
                disabled={isTransitioning}
                className={`rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:cursor-not-allowed ${
                  i === currentIndex
                    ? "bg-primary w-8 h-2"
                    : "bg-white/30 hover:bg-white/55 w-2 h-2"
                }`}
              />
            ))}
          </div>
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
