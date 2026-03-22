"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const VIDEO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_Filmmaking_Video_Production_3840x2160-RpoCSMIOrZCwfTME6OoNL0kOiVmQCa.mov";

export function CastingHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* ── Video background ── */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        {/* Semi-transparent black gradient overlay — increased opacity for readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/85"
          aria-hidden="true"
        />

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
      </div>
    </section>
  );
}
