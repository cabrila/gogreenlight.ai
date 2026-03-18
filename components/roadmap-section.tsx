"use client";

import { CheckCircle2, Circle, Rocket } from "lucide-react";

const roadmapSteps = [
  {
    status: "complete",
    title: "Today",
    description: "First Beta is live; revolutionizing casting in Film & TV.",
    highlight: true,
  },
  {
    status: "current",
    title: "Tomorrow",
    description:
      "Expanding to curate all creative assets across industries.",
    highlight: false,
  },
  {
    status: "future",
    title: "Before 2045",
    description:
      "Fully establishing the default infrastructure for human-AI creation.",
    highlight: false,
  },
  {
    status: "future",
    title: "2045",
    description: "We are ready for the Singularity.",
    highlight: true,
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary border border-border rounded-full text-muted-foreground text-sm font-medium mb-6">
            The Journey
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            From Casting to the{" "}
            <span className="gradient-text">Singularity</span>
          </h2>
        </div>

        {/* Roadmap Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

            {/* Steps */}
            <div className="space-y-8">
              {roadmapSteps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    {step.status === "complete" ? (
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        <CheckCircle2 size={24} />
                      </div>
                    ) : step.status === "current" ? (
                      <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary">
                        <Circle size={24} />
                      </div>
                    ) : step.highlight ? (
                      <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/50 flex items-center justify-center text-primary glow">
                        <Rocket size={24} />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground">
                        <Circle size={24} />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 p-6 rounded-xl border ${
                      step.highlight
                        ? "bg-gradient-to-br from-primary/10 to-card border-primary/30"
                        : "bg-card border-border"
                    }`}
                  >
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}