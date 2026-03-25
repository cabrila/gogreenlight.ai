import { Users, Share2, Shield, Eye, Zap, Cloud } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Clarity over Chaos",
    description:
      "Replace fragmented workflows with one clear picture on one clear platform. See everything vividly and communicate precisely.",
  },
  {
    icon: Shield,
    title: "Security & GDPR",
    description:
      "Built on MovieLabs OMC standard and GDPR compliant by design. Enterprise-grade security with EU data hosting.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Powerful collaboration that makes intent clear. When everyone understands the vision, magic happens.",
  },
  {
    icon: Share2,
    title: "Smart Organisation",
    description:
      "Organize talent by projects, roles, and characters. Streamlined workflows let you focus on creative decisions.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description:
      "Real-time synchronisation keeps your entire team aligned. Access your projects from anywhere, anytime.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description:
      "Lightning fast performance optimised for creative workflows. Spend less time waiting, more time creating.",
  },
];

export function CastingFeatures() {
  return (
    <section id="features" className="relative py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed, all in one place
          </p>
        </div>

        {/* Features grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
