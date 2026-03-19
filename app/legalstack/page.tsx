import { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "LegalStack | GoGreenlight",
  description: "GoGreenlight Legal Stack - Terms of Service, Privacy Policy, Data Processing Agreement, and more.",
};

export default function LegalStackPage() {
  return (
    <LegalLayout>
      <div className="space-y-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            GoGreenlight - Legal Stack
          </h1>
          <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-8">
            <li><a href="#terms" className="hover:text-primary transition-colors">Terms of Services</a></li>
            <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#dpa" className="hover:text-primary transition-colors">Data Processing Agreement (DPA)</a></li>
            <li><a href="#appendix-b" className="hover:text-primary transition-colors">Sub-Processor List (Appendix B)</a></li>
            <li><a href="#isp" className="hover:text-primary transition-colors">Information Security Policy (ISP)</a></li>
          </ol>
        </div>

        {/* 1. Terms of Services */}
        <section id="terms" className="p-6 rounded-xl border border-border bg-card/50 scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-2">1. Terms of Services</h2>
          <Link href="/terms" className="text-primary hover:underline text-sm mb-4 block">
            /terms
          </Link>
          <p className="text-muted-foreground leading-relaxed">
            Governs access to and use of the GoGreenlight platform, including subscription terms, user responsibilities, intellectual property, AI functionality, liability limitations, and termination conditions.
          </p>
        </section>

        {/* 2. Privacy Policy */}
        <section id="privacy" className="p-6 rounded-xl border border-border bg-card/50 scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-2">2. Privacy Policy</h2>
          <Link href="/privacypolicy" className="text-primary hover:underline text-sm mb-4 block">
            /privacypolicy
          </Link>
          <p className="text-muted-foreground leading-relaxed">
            Explains how GoGreenlight ApS processes personal data when acting as data controller, including data collection, legal basis, retention, transfers, and user rights under GDPR.
          </p>
        </section>

        {/* 3. Data Processing Agreement */}
        <section id="dpa" className="p-6 rounded-xl border border-border bg-card/50 scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-2">3. Data Processing Agreement (DPA)</h2>
          <Link href="/gogreenlight-dpa" className="text-primary hover:underline text-sm mb-4 block">
            /gogreenlight-dpa
          </Link>
          <p className="text-muted-foreground leading-relaxed">
            Regulates the processing of personal data where GoGreenlight acts as data processor on behalf of customers, in accordance with Article 28 GDPR.
          </p>
        </section>

        {/* 4. Sub-Processor List */}
        <section id="appendix-b" className="p-6 rounded-xl border border-border bg-card/50 scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-2">4. Sub-Processor List (Appendix B)</h2>
          <Link href="/dpa-appendix-b" className="text-primary hover:underline text-sm mb-4 block">
            /dpa-appendix-b
          </Link>
          <p className="text-muted-foreground leading-relaxed">
            Provides an up-to-date list of authorized sub-processors used for hosting, database management, authentication, and communication services, including applicable transfer safeguards.
          </p>
        </section>

        {/* 5. Information Security Policy */}
        <section id="isp" className="p-6 rounded-xl border border-border bg-card/50 scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-2">5. Information Security Policy (ISP)</h2>
          <Link href="/dpa-isp" className="text-primary hover:underline text-sm mb-4 block">
            /dpa-isp
          </Link>
          <p className="text-muted-foreground leading-relaxed">
            Describes GoGreenlight&apos;s technical and organizational security measures, including encryption, access controls, incident management, and infrastructure safeguards.
          </p>
        </section>

        <div className="text-sm text-muted-foreground pt-8 border-t border-border">
          <p>CVR: 45992705</p>
        </div>
      </div>
    </LegalLayout>
  );
}
