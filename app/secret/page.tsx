"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Home, Maximize, Minimize } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type PointItem = string | { title: string; description: string };
type GuideItem = string | { title: string; description: string };

interface Slide {
  id: number;
  type: string;
  headline: string;
  subheadline?: string;
  attribution?: string;
  points?: PointItem[];
  guide?: GuideItem;
  hero?: { title: string; description: string };
  villain?: { title: string; description: string };
  intro?: string;
  disruption?: { title: string; description: string };
  insight?: { title: string; description: string };
  conclusion?: string;
  focus?: string;
  thesis?: string;
  tech?: { title: string; description: string };
  data?: { title: string; description: string };
  closing?: string;
  traction?: string;
  vision?: string;
  engine?: { title: string; description: string };
  collaboration?: { title: string; description: string };
  strategic?: { title: string; description: string; amount?: string };
}

const slides: Slide[] = [
  {
    id: 1,
    type: "hero",
    headline: "Unleash creativity, exponentially.",
    subheadline: "Building the AI-native infrastructure for the future of creation.",
  },
  {
    id: 2,
    type: "road2045",
    headline: "The Road to 2045",
    points: [
      "By 2045, $1,000 will buy compute equivalent to the combined intelligence of all humanity. (Kurzweil, Ray. The Singularity Is Near, 2005)",
      "As human merges with AI, interaction latency approaches zero. The boundary between our intent and AI generation dissolves.",
    ],
    hero: {
      title: "The Challenge",
      description: "Our biologically limited brains cannot manage the infinite creation that becomes possible. We need new interfaces.",
    },
    villain: {
      title: "The Urgency",
      description: "We must build the underlying infrastructure to curate the world's creative assets before the singularity hits.",
    },
  },
  {
    id: 3,
    type: "content",
    headline: '"We are as gods and might as well get good at it."',
    attribution: "— Brand, Stewart. Whole Earth Catalog, 1968",
    points: [
      "The Power: As AI brings infinite compute to our fingertips, humans are gaining god-like creative abilities.",
      "The Threat: But without the right infrastructure, humans will lose oversight. AI will simply outpace us, and a true Human-AI merge will fail.",
    ],
    guide: 'GoGreenlight is the infrastructure that preserves human control. We empower creators to manage this infinite power, replacing chaos with absolute Clarity of Intent.',
  },
  {
    id: 4,
    type: "architecture",
    headline: "This is the moment. AI meets creative assets.",
    intro: "For the first time in history, AI can truly understand and work with images, video, and audio. This changes everything.",
    disruption: {
      title: "The Netflix Parallel",
      description: "Netflix harvested the exponentially cheaper supply of internet bandwidth and disrupted the video industry. GoGreenlight harvests the exponentially cheaper supply of AI-generated creative assets.",
    },
    insight: {
      title: "Our Unique Position",
      description: "We capture creative DECISIONS, not content. Users keep their assets. We learn from how they curate creative assets — training AI to augment creative work, all mapped to OMC methodology.",
    },
    conclusion: "Content belongs to creators.\nDecisions power the future of AI-augmented creativity.",
  },
  {
    id: 5,
    type: "beachhead",
    headline: "Step One: Revolutionizing Casting",
    intro: "To build the ultimate creative infrastructure, we start with the most complex asset: Human talent and characters.",
    traction: "Casting Beta is Live",
    conclusion: "By solving the complex curation of actors and roles today, we are building the underlying data engine for all creative assets tomorrow.",
    vision: "Curate the World's Creative Assets",
  },
  {
    id: 6,
    type: "movielabs",
    headline: "Making MovieLabs' 2030 Vision Operational",
    intro: "Data must be structured to survive an exponential future.",
    points: [
      "We are building natively on MovieLabs' Ontology for Media Creation (OMC v2.8) from Day 1.",
      "We are mapping our core engine to scale across the entire OMC ontology - starting with Characters and Participants, but built for everything.",
    ],
    closing: "We are not just adopting MovieLabs' 2030 Vision; we are building the execution engine to make it a reality.",
  },
  {
    id: 7,
    type: "moat",
    headline: "Data is no longer the new gold. Intelligence is.",
    intro: "We do not want to scrape or own our users' creative content (scripts, videos, IP).",
    focus: "We capture the creative decision-making process.",
    thesis: "By natively using the MovieLabs OMC schema, we are building an engine trained on high-level human oversight.",
    tech: {
      title: "The Tech",
      description: 'A deterministic "Code-to-AI Compiler". Unlike basic AI wrappers that hallucinate, our system dynamically translates UI structures, codebases, and human creative decisions into machine-readable skills. We are building a domain-agnostic engine that learns directly from how humans curate creative assets - designed to scale from Film & TV to any industry.',
    },
    data: {
      title: "The Intelligence",
      description: "Native integration with MovieLabs OMC v2.8. Every Casting interaction we process today trains the proprietary intelligence engine for tomorrow's Hollywood standard. You can't fake or fast-track this architecture.",
    },
  },
  {
    id: 8,
    type: "expansion",
    headline: "Film & TV is Just the Beachhead",
    points: [
      {
        title: "The Ultimate Proving Ground",
        description: "We start with Film & TV because it is the most complex industry for creating and managing entire worlds. If we can solve Hollywood, we can solve anything.",
      },
      {
        title: "The Platform Expansion",
        description: "GoGreenlight is not just an application; it is an underlying infrastructure platform.",
      },
      {
        title: "The End Goal",
        description: 'We will license our core ontology and AI-engine to other domains. Imagine a "GoGreenlight for Fashion," "GoGreenlight for Architecture," and eventually for personal creative lives.',
      },
      {
        title: "The 2045 Imperative",
        description: "Only by expanding globally across all industries can we truly curate the world's creative assets and be ready for the Singularity.",
      },
    ],
  },
  {
    id: 9,
    type: "ask",
    headline: "The $10M Strategic Ask",
    subheadline: "We are raising $10M to cross the chasm and establish the global infrastructure for AI creation.",
    points: [
      {
        title: "$1M: AI Infrastructure & Compute",
        description: "Powering our proprietary Code-to-AI engine.",
      },
      {
        title: "$4M: Platform Abstraction (R&D)",
        description: "Our architecture handles Film & TV. These funds abstract the engine for any industry domain.",
      },
      {
        title: "$2M: Go-To-Market (Enterprise & AI-Automated PLG)",
        description: "Scaling our \"Beachhead\" by aggressively penetrating Hollywood studios and automating long-tail adoption.",
      },
      {
        title: "$3M: Strategic Acceleration Fund",
        description: "Our war chest to scale aggressively at market inflection points.",
      },
    ],
  },
];

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displaySlide, setDisplaySlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Toggle fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length && !isTransitioning) {
      setIsTransitioning(true);
      setDirection(index > currentSlide ? "next" : "prev");
      
      // After fade out, change slide and fade in
      setTimeout(() => {
        setDisplaySlide(index);
        setCurrentSlide(index);
      }, 300);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }
  }, [isTransitioning, currentSlide]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [nextSlide, prevSlide, toggleFullscreen]);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const slide = slides[displaySlide];

  return (
    <div 
      className="min-h-screen bg-[#050505] text-white overflow-hidden relative"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(46,149,81,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(46,149,81,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6 flex items-center justify-between">
        <Link href="/" className="opacity-50 hover:opacity-100 transition-opacity">
          <Home className="w-5 h-5" />
        </Link>
        <Image
          src="/images/gogreenlight-logo.png"
          alt="GoGreenlight"
          width={140}
          height={28}
          className="opacity-80"
        />
        <div className="text-xs text-muted-foreground">
          {currentSlide + 1} / {slides.length}
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-8 py-24">
        <div
          className={`max-w-5xl w-full transition-all duration-300 ease-out ${
            isTransitioning 
              ? `opacity-0 ${direction === "next" ? "translate-x-8" : "-translate-x-8"}` 
              : "opacity-100 translate-x-0"
          }`}
        >
          {/* Slide 1: Hero */}
          {slide.type === "hero" && (
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-balance">
                <span className="gradient-text">{slide.headline}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {slide.subheadline}
              </p>
            </div>
          )}

          {/* Slide 2: The Hook - "We are as gods" */}
          {slide.type === "content" && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic text-foreground mb-4 text-balance">
                  {slide.headline}
                </h2>
                {slide.attribution && (
                  <p className="text-lg text-muted-foreground">{slide.attribution}</p>
                )}
              </div>
              
              <div className="grid gap-6 max-w-3xl mx-auto">
                {slide.points?.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-border/50">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-lg text-foreground/90">{typeof point === 'string' ? point : point.description}</p>
                  </div>
                ))}
              </div>

              {/* The Guide box */}
              <div className="max-w-3xl mx-auto mt-12">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 relative">
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    The Guide
                  </div>
                  <p className="text-lg text-foreground/90 mt-2 leading-relaxed font-medium">
                    {typeof slide.guide === 'string' ? slide.guide : slide.guide?.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Slide 3: The Road to 2045 */}
          {slide.type === "road2045" && (
            <div className="space-y-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-balance">
                <span className="gradient-text">{slide.headline}</span>
              </h2>
              
              <div className="grid gap-6 max-w-3xl mx-auto">
                {slide.points?.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-border/50">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-lg text-foreground/90">{typeof point === 'string' ? point : point.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
                {/* The Challenge */}
                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/30">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{slide.hero?.title}</h3>
                  <p className="text-foreground/80">{slide.hero?.description}</p>
                </div>
                {/* The Urgency */}
                <div className="p-6 rounded-2xl bg-accent/10 border border-accent/30">
                  <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{slide.villain?.title}</h3>
                  <p className="text-foreground/80">{slide.villain?.description}</p>
                </div>
              </div>
            </div>
          )}

          {/* Slide 4: Architecture / AI Disruption */}
          {slide.type === "architecture" && (
            <div className="space-y-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 text-balance">
                <span className="gradient-text">{slide.headline}</span>
              </h2>
              
              <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
                {slide.intro}
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 relative">
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    {slide.disruption?.title}
                  </div>
                  <p className="text-lg text-foreground/90 mt-4 leading-relaxed">
                    {slide.disruption?.description}
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 border border-accent/30 relative">
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                    {slide.insight?.title}
                  </div>
                  <p className="text-lg text-foreground/90 mt-4 leading-relaxed">
                    {slide.insight?.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-card/50 border border-primary/50 text-center max-w-3xl mx-auto">
                <p className="text-xl text-foreground font-semibold whitespace-pre-line">
                  {slide.conclusion}
                </p>
              </div>
            </div>
          )}

          {/* Slide 5: The Moat / Data vs Intelligence */}
          {slide.type === "moat" && (
            <div className="space-y-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 text-balance">
                <span className="gradient-text">{slide.headline}</span>
              </h2>

              {/* Intro and thesis */}
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <p className="text-lg text-muted-foreground">{slide.intro}</p>
                <p className="text-xl text-primary font-semibold">{slide.focus}</p>
                <p className="text-lg text-foreground/80">{slide.thesis}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                {/* The Tech */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 relative">
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    {slide.tech?.title}
                  </div>
                  <p className="text-base text-foreground/90 mt-4 leading-relaxed">
                    {slide.tech?.description}
                  </p>
                </div>

                {/* The Data */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 border border-accent/30 relative">
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                    {slide.data?.title}
                  </div>
                  <p className="text-base text-foreground/90 mt-4 leading-relaxed">
                    {slide.data?.description}
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
                  <span className="text-primary font-semibold">Defensible by Design</span>
                </div>
              </div>
            </div>
          )}

          {/* Slide 6: MovieLabs */}
          {slide.type === "movielabs" && (
            <div className="space-y-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 text-balance">
                <span className="gradient-text">{slide.headline}</span>
              </h2>
              
              <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
                {slide.intro}
              </p>

              <div className="grid gap-6 max-w-3xl mx-auto mt-12">
                {slide.points?.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-primary/30">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{i + 1}</span>
                    </div>
                    <p className="text-lg text-foreground/90">
                      {typeof point === 'string' ? point : point.description}
                    </p>
                  </div>
                ))}
              </div>

              {slide.closing && (
                <div className="max-w-3xl mx-auto mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/10 border border-primary/30 text-center">
                  <p className="text-lg text-foreground font-medium italic">{slide.closing}</p>
                </div>
              )}

              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
                  <span className="text-primary font-semibold">OMC v2.8 Native</span>
                </div>
              </div>
            </div>
          )}

          {/* Slide 6: Beachhead */}
          {slide.type === "beachhead" && (
            <div className="space-y-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 text-balance">
                <span className="gradient-text">{slide.headline}</span>
              </h2>
              
              <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
                {slide.intro}
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
                <a 
                  href="https://app.ggl.cx/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground text-xl font-bold hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  {slide.traction}
                </a>
                <a 
                  href="https://www.youtube.com/watch?v=Fe_ZPCY4Qi8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground text-xl font-bold hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  Watch Platform Prototype
                </a>
              </div>

              <div className="max-w-3xl mx-auto mt-12 p-8 rounded-2xl bg-card/50 border border-accent/30 text-center">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  {slide.conclusion}
                </p>
              </div>

              {/* Vision statement */}
              <div className="text-center mt-12 pt-8 border-t border-primary/20">
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  {slide.vision}
                </p>
              </div>
            </div>
          )}

          {/* Slide 8: Expansion */}
          {slide.type === "expansion" && (
            <div className="space-y-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 text-balance">
                <span className="gradient-text">{slide.headline}</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {slide.points?.map((point, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-card/50 border border-primary/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {typeof point !== 'string' && point.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {typeof point === 'string' ? point : point.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-xl text-foreground font-semibold">
                  From Hollywood to the World
                </p>
              </div>
            </div>
          )}

          {/* Slide 9: The Ask */}
          {slide.type === "ask" && (
            <div className="space-y-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 text-balance">
                <span className="gradient-text">{slide.headline}</span>
              </h2>
              
              <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
                {slide.subheadline}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
                {slide.points?.map((point, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-card/50 border border-primary/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {typeof point !== 'string' && point.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {typeof point === 'string' ? point : point.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary/20 border border-primary/50">
                  <span className="text-2xl font-bold text-primary">$10M</span>
                  <span className="text-foreground/80">to build the future of creation</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Navigation */}
      <nav className="absolute bottom-8 left-0 right-0 z-50 flex items-center justify-center gap-8">
        {/* Prev button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-card/50 border border-border hover:bg-card hover:border-primary/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 rounded-full bg-card/50 border border-border hover:bg-card hover:border-primary/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </nav>

      {/* Fullscreen button */}
      <button
        onClick={toggleFullscreen}
        className="absolute bottom-8 right-8 p-2 rounded-lg bg-card/30 border border-border/50 hover:bg-card hover:border-primary/50 transition-all opacity-50 hover:opacity-100"
        title="Toggle fullscreen (F)"
      >
        {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
      </button>

      {/* Keyboard hint */}
      <div className="absolute bottom-8 left-8 text-xs text-muted-foreground/50">
        Arrow keys to navigate | F for fullscreen
      </div>
    </div>
  );
}