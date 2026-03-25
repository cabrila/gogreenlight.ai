import { Check } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Built for creatives by creatives",
  "Built on MovieLabs OMC standard",
  "GDPR compliant with EU hosting",
  "Real-time team collaboration",
  "Free beta access available now",
];

const PRODUCT_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0orIt2Gm3hXPskgrA8Y15aqn1Ooz2P.png";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Why Choose Us
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={PRODUCT_IMAGE}
                alt="GoGreenlight actor detail view"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Built for Modern Teams
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our platform is designed with your team&apos;s success in mind.
              Powerful features meet intuitive design for the ultimate
              creative workflow experience.
            </p>

            {/* Benefits list */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#signup"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
