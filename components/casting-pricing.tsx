import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Clarity of intent is everything. Once everyone understands what you're trying to do, the collaboration becomes powerful.",
    attribution: "Attributed to Christopher Nolan, Director",
    stars: 5,
  },
  {
    quote:
      "Finally a tool that understands the creative workflow. This is exactly what the industry has been waiting for.",
    attribution: "Film Industry Professional",
    stars: 5,
  },
  {
    quote:
      "The clarity this brings to casting decisions is remarkable. No more chaos, just creative focus.",
    attribution: "Television Producer",
    stars: 5,
  },
];

export function CastingPricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by Creators
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what industry professionals have to say about their experience
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Attribution */}
              <p className="text-sm text-gray-500">{testimonial.attribution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
