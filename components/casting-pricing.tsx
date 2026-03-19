import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const includedFeatures = [
  "Unlimited projects",
  "Real-time team collaboration",
  "Talent organization & tags",
  "MovieLabs OMC alignment",
  "Priority support",
  "Full feature access",
];

export function CastingPricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Test GoGreenlight's Casting Platform
          </h2>
        </div>

        {/* Pricing card */}
        <div className="relative rounded-3xl border border-primary/30 bg-card p-8 lg:p-12 glow">
          {/* Features */}
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              Everything included
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8" />

          {/* CTA */}
          <div className="flex justify-center">
            <div className="text-center">
              <Link
                href="#signup"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all text-lg"
              >
                Test the casting platform for free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-sm text-muted-foreground mt-3">
                No credit card required
              </p>
            </div>
          </div>
        </div>

        {/* FAQ teaser */}
        <p className="text-center text-muted-foreground mt-8">
          Have questions?{" "}
          <Link href="mailto:contact@gogreenlight.ai" className="text-primary hover:underline">
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
}
