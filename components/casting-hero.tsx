"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const CAROUSEL_IMAGES = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/actors-kKN3E0GmnkVI3NisdtEJGi1gHpo1Ow.png",
    alt: "Casting platform — actor long list view showing candidates",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/characters-YPFGRwhnQcyucUTloMwMs0G6MYpD3f.png",
    alt: "Characters overview with actor shortlists per role",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/playerview-fcKiFH15bFWDdO9Wt8No52BXZsLhbI.png",
    alt: "Actor player view with media and team voting",
  },
];

const INTERVAL_MS = 5000;

export function CastingHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      const current = activeIndex;
      const next = (current + 1) % CAROUSEL_IMAGES.length;
      setPrevIndex(current);
      setActiveIndex(next);
      const t = setTimeout(() => {
        setPrevIndex(null);
        setTransitioning(false);
      }, 900);
      return () => clearTimeout(t);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const goTo = (index: number) => {
    if (index === activeIndex || transitioning) return;
    setTransitioning(true);
    setPrevIndex(activeIndex);
    setActiveIndex(index);
    setTimeout(() => {
      setPrevIndex(null);
      setTransitioning(false);
    }, 900);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Carousel background images — cross-fade via absolute stacking */}
      {CAROUSEL_IMAGES.map((img, i) => (
        <div
          key={img.src}
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${img.src})`,
            opacity: i === activeIndex ? 1 : 0,
            transition: "opacity 900ms ease-in-out",
            zIndex: i === activeIndex ? 1 : i === prevIndex ? 0 : -1,
          }}
        />
      ))}

      {/* Semi-transparent dark overlay for text legibility */}
      <div
        className="absolute inset-0 bg-black/60"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      />

      {/* Content layer */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ zIndex: 3 }}>
        {/* Tagline */}
        <p className="text-2xl sm:text-3xl text-primary mb-8 font-medium">
          For creators by creators
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-white">From vision to screen</span>
          <br />
          <span className="gradient-text">with less resistance</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/75 max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
          The creative tool for creators, directors, producers and casting directors who refuse to let inefficiency and chaos stand between their vision and its realisation.
        </p>

        {/* CTA button */}
        <div className="flex items-center justify-center mb-10">
          <Link
            href="#signup"
            className="group flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
          >
            Test the casting platform for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Beta clarification */}
        <p className="text-sm text-white/60 mb-10 max-w-xl mx-auto">
          GoGreenlight launches with the casting platform. The prototype shows our full AI native vision for departmental integration — including locations, props and costume.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/70 mb-12">
          {[
            "Built for Creators",
            "MovieLabs OMC Compatible",
            "Free test before public launch",
          ].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Carousel navigation dots */}
        <div
          className="flex items-center justify-center gap-3"
          role="tablist"
          aria-label="Slide navigation"
        >
          {CAROUSEL_IMAGES.map((img, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Slide ${i + 1}: ${img.alt}`}
              onClick={() => goTo(i)}
              className={[
                "rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary",
                i === activeIndex
                  ? "w-8 h-2.5 bg-primary"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
