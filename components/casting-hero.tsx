"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const PRODUCT_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MZuy3JnQk6ageZ8980Dj88JfYCpJ3x.png";

const stats = [
  { value: "100%", label: "Free Beta" },
  { value: "OMC", label: "Standard" },
  { value: "GDPR", label: "Compliant" },
];

export function CastingHero() {
  return (
    <section className="relative bg-[#0a0a0a] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Green accent banner */}
      <div className="absolute top-16 lg:top-20 left-0 right-0 bg-primary/10 border-y border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <p className="text-xs sm:text-sm text-primary font-medium text-center">
            GoGreenlight launches with the casting platform. Next up: AI native departmental integration.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-12 lg:pt-8">
          {/* Left content */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              From Vision
              <br />
              <span className="text-primary">to Screen</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed">
              A creative tool for film and television creators who refuse to let
              chaos stand between their vision and its realisation.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <Link
                href="#signup"
                className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all"
              >
                Test Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#features"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 text-white font-semibold hover:bg-white/5 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Product image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-800">
              <img
                src={PRODUCT_IMAGE}
                alt="GoGreenlight casting platform interface"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
