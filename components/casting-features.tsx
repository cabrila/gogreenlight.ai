import { Users, Share2, Shield, Eye } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Clarity over Chaos",
    description:
      "Replace fragmented workflows with one clear picture on one clear platform. See everything vividly, communicate precisely, and keep your vision intact.",
  },
  {
    icon: Users,
    title: "Powerful Collaboration",
    description:
      '"Clarity of intent is everything. Once everyone understands what you\'re trying to do, the collaboration becomes powerful."',
    author: "Attributed to Christopher Nolan, Director",
  },
  {
    icon: Share2,
    title: "Smart Organisation",
    description:
      "Organize talent by projects, roles, and characters. Streamlined and efficient workflows let you focus on the creative decisions that matter.",
  },
  {
    icon: Shield,
    title: "Security, Compliancy & GDPR",
    description:
      "GDPR compliant by design. Enterprise-grade security with EU data hosting. Talent consent management, data retention policies, and audit trails built in.",
  },
];

export function CastingFeatures() {
  return (
    <section id="features" className="relative pt-4 pb-12 sm:pt-6 sm:pb-14 lg:pt-10 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.author && (
                    <p className="text-xs text-muted-foreground/70 mt-3">
                      {feature.author}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
