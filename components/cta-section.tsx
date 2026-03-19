"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Join Us in Scaling Today
        </h2>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          So we are ready to unleash creativity exponentially tomorrow.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="mailto:contact@gogreenlight.com"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all glow text-lg"
          >
            Get in Touch
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=Fe_ZPCY4Qi8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors border border-border text-lg"
          >
            Watch Demo
          </Link>
        </div>

        {/* The Ask */}
        <div className="mt-16 p-8 lg:p-10 bg-card/50 backdrop-blur border border-border rounded-2xl text-left max-w-2xl mx-auto">
          <h3 className="font-display text-xl font-bold text-center mb-6">
            The Ask
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Investors:</span>{" "}
                Join us in scaling our Beta and building the infrastructure for
                human-AI creation.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">
                  Industry Partners:
                </span>{" "}
                Collaborate with us on MovieLabs OMC integration and creative
                asset management.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">
                  Beta Testers:
                </span>{" "}
                Experience the future of casting and help shape the product.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
