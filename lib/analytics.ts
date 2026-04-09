// Google Analytics 4 event tracking utilities

export const GA_MEASUREMENT_ID = "G-YR9Z1RENXK";

// Type for gtag function
declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

// Track custom events
export function trackEvent(
  eventName: string,
  parameters?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
  }
}

// Predefined events
export const events = {
  testPlatformClick: (location: string) =>
    trackEvent("test_platform_click", {
      button_location: location,
    }),
};
