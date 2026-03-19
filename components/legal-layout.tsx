"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

const legalNavItems = [
  { href: "/legalstack", label: "Legal Stack" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacypolicy", label: "Privacy Policy" },
  { href: "/gogreenlight-dpa", label: "Data Processing Agreement" },
  { href: "/dpa-appendix-b", label: "Sub-Processor List" },
  { href: "/dpa-isp", label: "Information Security Policy" },
];

export function LegalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="sm" />
            </Link>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="lg:sticky lg:top-24">
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Legal Documents
              </h3>
              <ul className="space-y-1">
                {legalNavItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        pathname === item.href
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-card"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <article className="prose prose-invert prose-green max-w-none">
              {children}
            </article>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} GoGreenlight ApS. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              CVR: 45992705 | Nordtoft 30, 9000 Aalborg, Denmark
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
