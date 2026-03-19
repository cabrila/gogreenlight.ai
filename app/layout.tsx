import type { Metadata, Viewport } from "next";
import { Gabarito, Inter } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GoGreenlight | Unleash creativity, exponentially.",
  description:
    "Building the AI-native infrastructure for the future of creation. The deterministic Code-to-AI engine for the media industry.",
  keywords: [
    "AI infrastructure",
    "creative assets",
    "film production",
    "media creation",
    "MovieLabs OMC",
    "Code-to-AI",
  ],
  openGraph: {
    title: "GoGreenlight | Unleash creativity, exponentially.",
    description:
      "Building the AI-native infrastructure for the future of creation. The deterministic Code-to-AI engine for the media industry.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2E9551",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body
        className={`${gabarito.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
