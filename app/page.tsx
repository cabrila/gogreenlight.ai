import { Header } from "@/components/header";
import { CastingHero } from "@/components/casting-hero";
import { CastingFeatures } from "@/components/casting-features";
import { AboutSection } from "@/components/about-section";
import { CastingPricing } from "@/components/casting-pricing";
import { CastingCTA } from "@/components/casting-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <CastingHero />
      <CastingFeatures />
      <AboutSection />
      <CastingPricing />
      <CastingCTA />
      <Footer />
    </main>
  );
}
