export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About GoGreenlight
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            GoGreenlight is where creative thinkers, computer scientists,
            designers, and experienced film practitioners come together to
            reimagine how film and television is produced. Rooted in real
            production experience and powered by cutting-edge technology,
            GoGreenlight brings fresh energy to an industry ready for change.
          </p>

          <p>
            At its core, GoGreenlight is both a vision and a platform—designed
            to reduce friction, cut through clutter, and connect teams around a
            shared creative direction. It replaces fragmented workflows and
            siloed tools with an intuitive, clear, unified platform that
            supports the pace, complexity, and competition of modern production.
          </p>

          <p>
            Looking ahead, the ambition is bold: from casting to locations,
            props, costumes, and beyond, GoGreenlight will integrate the entire
            production machine into a cohesive, intelligent, and open ecosystem.
            This isn&apos;t a passing trend—it&apos;s a long-term shift toward a more
            connected, collaborative, and creatively empowered future.
          </p>

          {/* Tagline */}
          <p className="text-2xl sm:text-3xl font-bold text-primary text-center pt-6">
            GoGreenlight - Unleashing Creativity.
          </p>
        </div>
      </div>
    </section>
  );
}
