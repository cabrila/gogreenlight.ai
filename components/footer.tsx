import Link from "next/link";
import Image from "next/image";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Logo size="md" />
              <Image
                src="/images/movielabs-industry-forum-logo.png"
                alt="MovieLabs Industry Forum Member"
                width={32}
                height={32}
                className="h-8 w-auto opacity-70"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The tool for creators who refuse to let chaos stand between them and their vision.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 lg:gap-16">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Product
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/legalstack"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Legal Stack
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacypolicy"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Support
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:contact@gogreenlight.ai"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GoGreenlight. All rights reserved.</p>
            <p className="mt-1">Nordtoft 30, 9000 Aalborg, Denmark · CVR: 45992705</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Made with love in Denmark
          </p>
        </div>
      </div>
    </footer>
  );
}
