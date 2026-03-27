import type { Metadata, Viewport } from "next";
import { Gabarito, Inter } from "next/font/google";
import "./globals.css";
import { FullscreenHandler } from "@/components/fullscreen-handler";

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
  title: "GoGreenlight | AI Infrastructure for Creative Production",
  description:
    "Curating the world's creative assets before the Singularity arrives. Join the beta and build the future of film and media creation.",
  keywords: [
    "AI infrastructure",
    "creative assets",
    "film production",
    "media creation",
    "MovieLabs OMC",
    "Code-to-AI",
  ],
  openGraph: {
    title: "GoGreenlight | AI Infrastructure for Creative Production",
    description:
      "Curating the world's creative assets before the Singularity arrives. Join the beta and build the future of film and media creation.",
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
        <FullscreenHandler />
        {children}
      </body>
    </html>
  );
}
