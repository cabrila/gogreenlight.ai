import { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Information Security Policy | GoGreenlight",
  description: "GoGreenlight Information Security Policy (ISP) - Technical and organizational security measures.",
};

export default function DPAISPPage() {
  return (
    <LegalLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            GoGreenlight
          </h1>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Information Security Policy
          </h2>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/50">
          <p className="text-lg font-semibold text-foreground mb-2">
            GoGreenlight – Information Security Policy (ISP)
          </p>
          <p className="text-sm text-muted-foreground">
            Approved by: GoGreenlight Management
          </p>
          <p className="text-sm text-muted-foreground">
            Version: 1.0
          </p>
          <p className="text-sm text-muted-foreground">
            Date: October 17, 2025
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="p-4 rounded-lg border border-border bg-card/50">
          <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
            <li><a href="#section-1" className="hover:text-primary transition-colors">Purpose</a></li>
            <li><a href="#section-2" className="hover:text-primary transition-colors">Scope</a></li>
            <li><a href="#section-3" className="hover:text-primary transition-colors">Access Control</a></li>
            <li><a href="#section-4" className="hover:text-primary transition-colors">Data Security</a></li>
            <li><a href="#section-5" className="hover:text-primary transition-colors">Incident Response</a></li>
            <li><a href="#section-6" className="hover:text-primary transition-colors">Training and Awareness</a></li>
            <li><a href="#section-7" className="hover:text-primary transition-colors">Data Retention and Deletion</a></li>
            <li><a href="#section-8" className="hover:text-primary transition-colors">Review</a></li>
          </ol>
        </nav>

        {/* 1. Purpose */}
        <section id="section-1" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Purpose</h2>
          <p className="text-muted-foreground leading-relaxed">
            This policy ensures that GoGreenlight protects personal data and other sensitive information against unauthorized access, loss, or misuse.
          </p>
        </section>

        {/* 2. Scope */}
        <section id="section-2" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Scope</h2>
          <p className="text-muted-foreground leading-relaxed">
            This policy applies to all employees, systems, and services operated by GoGreenlight where personal data is processed.
          </p>
        </section>

        {/* 3. Access Control */}
        <section id="section-3" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Access Control</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
            <li>Only authorized personnel may access personal data.</li>
            <li>User accounts are personal and must not be shared.</li>
            <li>Access rights are based on job roles.</li>
          </ul>
        </section>

        {/* 4. Data Security */}
        <section id="section-4" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
            <li>Data is encrypted in transit and at rest.</li>
            <li>All systems are protected by firewalls and antivirus software.</li>
            <li>Security patches are applied regularly.</li>
          </ul>
        </section>

        {/* 5. Incident Response */}
        <section id="section-5" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Incident Response</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
            <li>Security incidents must be reported immediately to the designated contact.</li>
            <li>All incidents are documented and reviewed.</li>
            <li>Data breaches will be notified to affected parties in accordance with the GDPR.</li>
          </ul>
        </section>

        {/* 6. Training and Awareness */}
        <section id="section-6" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Training and Awareness</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
            <li>Employees receive basic training in data protection and IT security.</li>
            <li>Security awareness is part of onboarding and reviewed annually.</li>
          </ul>
        </section>

        {/* 7. Data Retention and Deletion */}
        <section id="section-7" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention and Deletion</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
            <li>Personal data is only retained as long as necessary.</li>
            <li>Upon contract termination, data is deleted or returned as instructed.</li>
          </ul>
        </section>

        {/* 8. Review */}
        <section id="section-8" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Review</h2>
          <p className="text-muted-foreground leading-relaxed">
            This policy is reviewed annually and updated as needed.
          </p>
        </section>

        <div className="p-4 rounded-lg border border-border bg-card/50">
          <p className="text-sm text-muted-foreground">
            <strong>Related Documents:</strong>
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
            <li>
              <Link href="/gogreenlight-dpa" className="text-primary hover:underline">
                Data Processing Agreement (DPA)
              </Link>
            </li>
            <li>
              <Link href="/dpa-appendix-b" className="text-primary hover:underline">
                Sub-Processor List (Appendix B)
              </Link>
            </li>
            <li>
              <Link href="/privacypolicy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm text-muted-foreground pt-8 border-t border-border">
          <p>CVR: 45992705</p>
        </div>
      </div>
    </LegalLayout>
  );
}