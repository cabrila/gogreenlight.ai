import { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | GoGreenlight",
  description: "GoGreenlight Privacy Policy - How we process personal data when acting as data controller under GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            GoGreenlight - Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-2">
            <strong>Standard Contractual Clauses</strong>
          </p>
          <p className="text-sm text-muted-foreground mb-1">
            Last modified: 25.02.26
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Notice of update - None
          </p>
          <p className="text-sm text-muted-foreground italic mb-8">
            Updates reflects our ongoing commitment to data privacy, transparency, and minimizing external data dependencies.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="p-4 rounded-lg border border-border bg-card/50">
          <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
            <li><a href="#section-1" className="hover:text-primary transition-colors">Introduction</a></li>
            <li><a href="#section-2" className="hover:text-primary transition-colors">When We Act as Data Processor</a></li>
            <li><a href="#section-3" className="hover:text-primary transition-colors">Personal Data We Collect Directly</a></li>
            <li><a href="#section-4" className="hover:text-primary transition-colors">Purpose and Legal Basis</a></li>
            <li><a href="#section-5" className="hover:text-primary transition-colors">AI Features</a></li>
            <li><a href="#section-6" className="hover:text-primary transition-colors">Sub-Processors and Transfers</a></li>
            <li><a href="#section-7" className="hover:text-primary transition-colors">Data Retention</a></li>
            <li><a href="#section-8" className="hover:text-primary transition-colors">Security</a></li>
            <li><a href="#section-9" className="hover:text-primary transition-colors">Your Rights</a></li>
            <li><a href="#section-10" className="hover:text-primary transition-colors">Complaints</a></li>
            <li><a href="#section-11" className="hover:text-primary transition-colors">Cookies</a></li>
            <li><a href="#section-12" className="hover:text-primary transition-colors">Changes to This Policy</a></li>
          </ol>
        </nav>

        {/* 1. Introduction */}
        <section id="section-1" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>This Privacy Policy explains how GoGreenlight ApS processes personal data when you:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Visit our website</li>
              <li>Create an account</li>
              <li>Use the GoGreenlight platform</li>
              <li>Contact us</li>
            </ul>
            <div className="mt-4 space-y-1">
              <p>GoGreenlight ApS</p>
              <p>Nordtoft 30</p>
              <p>9000 Aalborg</p>
              <p>Denmark</p>
              <p>CVR: 45992705</p>
              <p>
                Email:{" "}
                <a href="mailto:contact@gogreenlight.ai" className="text-primary hover:underline">
                  contact@gogreenlight.ai
                </a>
              </p>
            </div>
            <p>We are the data controller for personal data described in this Privacy Policy unless otherwise stated.</p>
          </div>
        </section>

        {/* 2. When We Act as Data Processor */}
        <section id="section-2" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">2. When We Act as Data Processor</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              When customers use the GoGreenlight platform to upload and manage personal data, GoGreenlight acts as data processor on behalf of the customer.
            </p>
            <p>Processing in such cases is governed by the applicable Data Processing Agreement (DPA), available at:</p>
            <p>
              <Link href="/gogreenlight-dpa" className="text-primary hover:underline">
                /gogreenlight-dpa
              </Link>
            </p>
            <p>If your personal data has been uploaded by one of our customers, please contact that customer directly.</p>
          </div>
        </section>

        {/* 3. Personal Data We Collect Directly */}
        <section id="section-3" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Personal Data We Collect Directly</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>We may collect and process the following categories of personal data:</p>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Account Information</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>Company name</li>
                <li>Role within organization</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Technical Information</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP address</li>
                <li>Device type</li>
                <li>Browser type</li>
                <li>Login timestamps</li>
                <li>Usage logs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Communication Data</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Information you provide when contacting us</li>
                <li>Support requests</li>
                <li>Email correspondence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Purpose and Legal Basis */}
        <section id="section-4" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Purpose and Legal Basis</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>We process personal data for the following purposes:</p>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">To Provide the Platform</h3>
              <p>Legal basis: Contract (Art. 6(1)(b) GDPR)</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">To Manage Accounts and Billing</h3>
              <p>Legal basis: Contract (Art. 6(1)(b))</p>
              <p>Legal obligation (accounting requirements)</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">To Improve and Secure the Platform</h3>
              <p>Legal basis: Legitimate interest (Art. 6(1)(f))</p>
              <p>We use aggregated and anonymized usage data to improve performance and security.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">To Communicate With You</h3>
              <p>Legal basis: Contract or legitimate interest</p>
            </div>
          </div>
        </section>

        {/* 5. AI Features */}
        <section id="section-5" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">5. AI Features</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>The platform includes AI-assisted functionality.</p>
            <p>AI processing may involve:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Temporary processing of user inputs</li>
              <li>Automated generation of visual or textual outputs</li>
            </ul>
            <p>Unless explicitly agreed:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>User Content is not used to train third-party foundation models</li>
              <li>We do not use identifiable personal data to train general AI systems</li>
            </ul>
            <p>AI functionality may rely on authorized sub-processors as described below.</p>
          </div>
        </section>

        {/* 6. Sub-processors and Transfers */}
        <section id="section-6" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Sub-processors and Transfers</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>We use trusted service providers for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Cloud hosting</li>
              <li>Database services</li>
              <li>Authentication</li>
              <li>Email delivery</li>
            </ul>
            <p>An updated list of authorized sub-processors is available at:</p>
            <p>
              <Link href="/dpa-appendix-b" className="text-primary hover:underline">
                /dpa-appendix-b
              </Link>
            </p>
            <p>Processing primarily takes place within the EU/EEA.</p>
            <p>
              Where personal data is transferred outside the EU/EEA, appropriate safeguards such as the EU-US Data Privacy Framework and Standard Contractual Clauses are applied.
            </p>
          </div>
        </section>

        {/* 7. Data Retention */}
        <section id="section-7" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>We retain personal data:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>For as long as necessary to provide services</li>
              <li>As required by law (e.g., accounting obligations)</li>
              <li>In accordance with customer instructions, when acting as data processor</li>
            </ul>
            <p>Upon termination of services, data is handled in accordance with the DPA.</p>
          </div>
        </section>

        {/* 8. Security */}
        <section id="section-8" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Security</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              We implement appropriate technical and organizational measures in accordance with applicable data protection laws, including Article 32 of the General Data Protection Regulation (GDPR), to protect personal data against unauthorized access, alteration, disclosure, loss, or destruction.
            </p>
            <p>
              Such measures are designed to ensure a level of security appropriate to the risk, taking into account the nature, scope, context, and purposes of processing.
            </p>
            <p>Where GoGreenlight acts as a data processor, security measures are further governed by the applicable DPA.</p>
          </div>
        </section>

        {/* 9. Your Rights */}
        <section id="section-9" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">9. Your Rights</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Erase data (where applicable)</li>
              <li>Restrict processing</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>
            <p>If we process your data as a data processor, please contact the relevant data controller first.</p>
          </div>
        </section>

        {/* 10. Complaints */}
        <section id="section-10" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">10. Complaints</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you believe we process your data unlawfully, you have the right to lodge a complaint with the Danish Data Protection Agency (Datatilsynet).
          </p>
        </section>

        {/* 11. Cookies */}
        <section id="section-11" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">11. Cookies</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>Our website may use necessary technical cookies to ensure functionality.</p>
            <p>If additional cookies are used, this will be disclosed via a cookie notice.</p>
          </div>
        </section>

        {/* 12. Changes to This Policy */}
        <section id="section-12" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to This Policy</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>We may update this Privacy Policy from time to time.</p>
            <p>Material changes will be communicated appropriately.</p>
          </div>
        </section>

        <div className="text-sm text-muted-foreground pt-8 border-t border-border">
          <p>CVR: 45992705</p>
        </div>
      </div>
    </LegalLayout>
  );
}