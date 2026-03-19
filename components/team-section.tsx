"use client";

const coreLeadership = [
  {
    name: "Claus Rosenstand",
    role: "CEO",
    expertise: "Visionary Leadership",
  },
  {
    name: "Carsten Brinch Larsen",
    role: "CTO",
    expertise: "Technical Architecture",
  },
  {
    name: "Christian Haslam",
    role: "Cybersecurity",
    expertise: "Security & Infrastructure",
  },
  {
    name: "Rene McCaine",
    role: "Global Scaling",
    expertise: "International Growth",
  },
  {
    name: "Peter Vistisen",
    role: "Design",
    expertise: "UX & Product Design",
  },
  {
    name: "Krishnasamy",
    role: "User Research",
    expertise: "User Insights",
  },
  {
    name: "Martin Miehe-Renard",
    role: "Chairman",
    expertise: "Strategic Governance",
  },
  {
    name: "Ben Horowitz",
    role: "Int. Producer",
    expertise: "Film Production",
  },
];

const executionTeam = [
  "Lead Developer",
  "Project Manager",
  "AI Integrator",
  "UI Designer",
  "QA Engineer",
  "Full-Stack Dev",
  "Full-Stack Dev",
];

export function TeamSection() {
  return (
    <section id="team" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary border border-border rounded-full text-muted-foreground text-sm font-medium mb-6">
            The Dream Team
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Vision, Expertise &{" "}
            <span className="gradient-text">Execution</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Unmatched academic depth, visionary foresight, absolute domain
            authority, and a live product team executing today.
          </p>
        </div>

        {/* Core Leadership */}
        <div className="mb-12">
          <h3 className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-8">
            Core Leadership — 8 Experts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coreLeadership.map((member, index) => (
              <div
                key={index}
                className="group p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-lg">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h4 className="font-display font-semibold text-foreground">
                  {member.name}
                </h4>
                <p className="text-sm text-primary font-medium">{member.role}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Execution Engine */}
        <div className="p-8 lg:p-10 bg-card border border-border rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="font-display text-xl font-bold">
              The Execution Engine
            </h3>
            <p className="mt-2 text-muted-foreground">
              7-person global development team shipping and scaling our live Beta
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {executionTeam.map((role, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-muted-foreground"
              >
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* Our Edge */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-primary/10 to-card border border-primary/20 rounded-xl text-center">
            <div className="text-3xl font-bold font-display gradient-text">
              Academic
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Unmatched research depth
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-primary/10 to-card border border-primary/20 rounded-xl text-center">
            <div className="text-3xl font-bold font-display gradient-text">
              Visionary
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Forward-thinking leadership
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-primary/10 to-card border border-primary/20 rounded-xl text-center">
            <div className="text-3xl font-bold font-display gradient-text">
              Domain
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Absolute industry authority
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
