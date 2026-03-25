"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function CastingCTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    useCase: "",
  });

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.profession.trim() !== "" &&
    formData.useCase.trim() !== "";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <section id="signup" className="relative py-20 sm:py-24 lg:py-32 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Join creators who are taking their workflow to the next level. Start
            your free beta access today.
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Email client opened!
            </h3>
            <p className="text-white/80">
              Please send the email to complete your request. We will get back
              to you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="profession"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your role
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  placeholder="e.g. Director, Producer, Casting Director..."
                  value={formData.profession}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="useCase"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your project
                </label>
                <textarea
                  id="useCase"
                  name="useCase"
                  rows={3}
                  placeholder="Tell us about your current project."
                  value={formData.useCase}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className={`group w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  isFormValid
                    ? "bg-primary text-white hover:bg-primary/90 cursor-pointer"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              No credit card required. Free 14-day trial. Cancel anytime.
            </p>
          </form>
        )}

        <p className="text-sm text-white/60 mt-6 text-center">
          By submitting you agree to our{" "}
          <a href="/terms" className="text-white hover:underline">
            terms
          </a>{" "}
          and{" "}
          <a href="/privacypolicy" className="text-white hover:underline">
            privacy policy
          </a>
        </p>
      </div>
    </section>
  );
}
