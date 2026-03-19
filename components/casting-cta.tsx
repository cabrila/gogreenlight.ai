"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function CastingCTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    useCase: "",
  });

  const isFormValid = formData.name.trim() !== "" && 
                      formData.profession.trim() !== "" && 
                      formData.useCase.trim() !== "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataObj = new FormData(e.currentTarget);
    const name = formDataObj.get("name");
    const profession = formDataObj.get("profession");
    const useCase = formDataObj.get("useCase");
    
    // Create mailto link with pre-filled data
    const subject = encodeURIComponent("GoGreenlight Beta Access Request");
    const body = encodeURIComponent(
      `Hi GoGreenlight Team,\n\nI would like to request access to the GoGreenlight Casting Beta.\n\nName: ${name}\nProfession: ${profession}\n\nHow I plan to use GoGreenlight:\n${useCase}\n\nPlease send the access link to this email.\n\nBest regards`
    );
    
    window.location.href = `mailto:contact@gogreenlight.ai?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <section id="signup" className="relative py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-border bg-card p-6 lg:p-10 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready for One Clear Picture on One Clear Platform?
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto">
                Send us your information and we will send you an access link.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Email client opened!</h3>
                <p className="text-muted-foreground">
                  Please send the email to complete your request. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-foreground mb-2">
                    Your role
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    placeholder="e.g. Director, Producer, Casting Director..."
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-foreground mb-2">
                    Your project
                  </label>
                  <textarea
                    id="useCase"
                    name="useCase"
                    rows={3}
                    placeholder="Tell us about your current project."
                    value={formData.useCase}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`group w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    isFormValid 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer" 
                      : "bg-primary/50 text-primary-foreground/50 cursor-not-allowed"
                  }`}
                >
                  SUBMIT REQUEST TO TEST FOR FREE
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}

            <p className="text-sm text-muted-foreground mt-6 text-center">
              By submitting you agree to our{" "}
              <a href="/terms" className="text-primary hover:underline">
                terms
              </a>{" "}
              and{" "}
              <a href="/privacypolicy" className="text-primary hover:underline">
                privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
