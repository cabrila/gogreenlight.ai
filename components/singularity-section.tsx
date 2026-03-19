"use client";

import { Brain, Cpu, Zap, Clock } from "lucide-react";

const challenges = [
  {
    icon: Cpu,
    title: "$1,000 = All Human Intelligence",
    description:
      "By 2045, $1,000 in compute power will equal the combined intelligence of all humanity. This is not speculation — it's the trajectory we're on.",
  },
  {
    icon: Brain,
    title: "Humans & AI Will Merge",
    description:
      "The line between human creativity and AI generation will blur. We need interfaces that can bridge biological minds with infinite computational power.",
  },
  {
    icon: Zap,
    title: "Infinite Creation Becomes Possible",
    description:
      "With our biologically limited brains, we cannot comprehend or manage the infinite 'creation' that becomes possible. New infrastructure is essential.",
  },
  {
    icon: Clock,
    title: "We Must Build Before 2045",
    description:
      "The infrastructure for managing exponential creativity must be in place before the Singularity arrives. There is no catching up after.",
  },
];

export function SingularitySection() {
  return (
    <section
      id="singularity"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary border border-border rounded-full text-muted-foreground text-sm font-medium mb-6">
            The Inevitable Future
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            The Road to{" "}
            <span className="gradient-text">2045</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            The Singularity is not science fiction. It&apos;s a mathematical
            certainty based on the exponential growth of computing power. We are
            building the infrastructure humanity will need.
          </p>
        </div>

        {/* Timeline Visual */}
        <div className="relative mb-16">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-primary" />
              <div className="mt-2 text-sm font-medium">Today</div>
              <div className="text-xs text-muted-foreground">Beta Live</div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary via-primary/50 to-primary/20 mx-4" />
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-primary/50" />
              <div className="mt-2 text-sm font-medium">Tomorrow</div>
              <div className="text-xs text-muted-foreground">All Assets</div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 via-primary/30 to-primary mx-4" />
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-primary glow" />
              <div className="mt-2 text-sm font-medium text-primary">2045</div>
              <div className="text-xs text-muted-foreground">Singularity</div>
            </div>
          </div>
        </div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <challenge.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {challenge.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 p-8 lg:p-12 bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 rounded-2xl text-center">
          <h3 className="font-display text-2xl lg:text-3xl font-bold">
            Our Mission
          </h3>
          <p className="mt-4 text-xl lg:text-2xl text-muted-foreground font-display">
            Curate the World&apos;s creative assets.
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            To survive and thrive in an exponential future, we are building the
            infrastructure to manage, organize, and structure the world&apos;s
            creative assets — an engine that empowers the human mind to navigate
            and harness infinite AI-generated creation.
          </p>
        </div>
      </div>
    </section>
  );
}
