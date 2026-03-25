import Link from "next/link";
import { Logo } from "./logo";
import { Linkedin, Twitter, Instagram, Github } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "mailto:contact@gogreenlight.ai" },
  ],
  Support: [
    { label: "Help Center", href: "mailto:contact@gogreenlight.ai" },
    { label: "Contact Us", href: "mailto:contact@gogreenlight.ai" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacypolicy" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Logo size="sm" />
            <p className="text-sm text-gray-400 mt-4 max-w-xs leading-relaxed">
              Empowering creative teams with intuitive solutions for seamless workflows.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} GoGreenlight. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Nordtoft 30, 9000 Aalborg, Denmark &middot; CVR: 45992705
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
