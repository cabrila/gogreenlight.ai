"use client";

import { Film, Users, Layers, GitBranch, FileCode, Workflow } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Users,
    title: "Human Talent Curation",
    description:
      "Revolutionary casting system for managing actors, roles, and creative talent at scale.",
  },
  {
    icon: Layers,
    title: "MovieLabs OMC Integration",
    description:
      "Built on industry-standard Open Media Creation infrastructure for seamless studio integration.",
  },
  {
    icon: GitBranch,
    title: "AI-Native Architecture",
    description:
      "Auto-generated documentation that stays 100% synchronized with your actual product capabilities.",
  },
  {
    icon: FileCode,
    title: "skills.md Framework",
    description:
      "Machine-readable skill files that define capabilities, preconditions, and expected outcomes.",
  },
  {
    icon: Workflow,
    title: "Automated Pipelines",
    description:
      "CI/CD integration that regenerates AI knowledge on every GitHub or Figma change.",
  },
  {
    icon: Film,
    title: "Film & TV First",
    description:
      "Starting where humans have historically created and managed entire worlds.",
  },
];

export function ProductSection() {
  return (
    <section id="product" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Casting Beta is Live
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            The Product <span className="gradient-text">Today</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We begin with the most critical and complex creative asset of all:
            human talent and characters. By solving casting today, we build the
            data engine for all creative assets tomorrow.
          </p>
        </div>

        {/* Beachhead Explanation */}
        <div className="mb-16 p-8 lg:p-10 bg-card border border-border rounded-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Film size={32} />
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl lg:text-2xl font-bold">
                Why Film & TV?
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To build the ultimate creative infrastructure, we start where
                humans have historically created, managed, and shared entire
                worlds. Film & TV is the ultimate proving ground — a highly
                complex industry built entirely on managing creative assets and
                collaborative processes.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Prototype Video CTA */}
        <div className="mt-16 relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="font-display text-2xl lg:text-3xl font-bold">
                  See the AI-Native Architecture
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Watch our prototype video demonstrating the automated AI
                  documentation system that keeps your AI assistant 100%
                  synchronized with your actual product capabilities — no more
                  outdated FAQ articles.
                </p>
              </div>
              <Link
                href="https://www.youtube.com/watch?v=Fe_ZPCY4Qi8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                Watch Prototype Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
