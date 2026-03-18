import { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service | GoGreenlight",
  description: "GoGreenlight Terms of Service - Standard Contractual Clauses governing access to and use of the platform.",
};

export default function TermsPage() {
  return (
    <LegalLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            GoGreenlight - Terms of Service
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
            <li><a href="#section-1" className="hover:text-primary transition-colors">Company Information</a></li>
            <li><a href="#section-2" className="hover:text-primary transition-colors">Scope and Acceptance</a></li>
            <li><a href="#section-3" className="hover:text-primary transition-colors">Description of the Platform</a></li>
            <li><a href="#section-4" className="hover:text-primary transition-colors">Accounts</a></li>
            <li><a href="#section-5" className="hover:text-primary transition-colors">Commercial Terms</a></li>
            <li><a href="#section-6" className="hover:text-primary transition-colors">User Content and Responsibility</a></li>
            <li><a href="#section-7" className="hover:text-primary transition-colors">Data Protection and DPA</a></li>
            <li><a href="#section-8" className="hover:text-primary transition-colors">AI and Automated Features</a></li>
            <li><a href="#section-9" className="hover:text-primary transition-colors">Sub-Processors and International Transfers</a></li>
            <li><a href="#section-10" className="hover:text-primary transition-colors">Confidentiality</a></li>
            <li><a href="#section-11" className="hover:text-primary transition-colors">Intellectual Property</a></li>
            <li><a href="#section-12" className="hover:text-primary transition-colors">Security</a></li>
            <li><a href="#section-13" className="hover:text-primary transition-colors">Warranties Disclaimer</a></li>
            <li><a href="#section-14" className="hover:text-primary transition-colors">Limitation of Liability</a></li>
            <li><a href="#section-15" className="hover:text-primary transition-colors">Termination</a></li>
            <li><a href="#section-16" className="hover:text-primary transition-colors">Governing Law and Venue</a></li>
            <li><a href="#section-17" className="hover:text-primary transition-colors">Changes to These Terms</a></li>
            <li><a href="#section-18" className="hover:text-primary transition-colors">Contact</a></li>
          </ol>
        </nav>

        {/* 1. Company Information */}
        <section id="section-1" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Company Information</h2>
          <div className="text-muted-foreground leading-relaxed space-y-1">
            <p>GoGreenlight ApS</p>
            <p>Nordtoft 30</p>
            <p>9000 Aalborg</p>
            <p>Denmark</p>
            <p>CVR: 45992705</p>
            <p className="mt-4">(&quot;GoGreenlight&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;)</p>
          </div>
        </section>

        {/* 2. Scope and Acceptance */}
        <section id="section-2" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Scope and Acceptance</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern access to and use of the GoGreenlight platform, including related websites, software, and services (the &quot;Platform&quot;).
            </p>
            <p>
              By creating an account, accessing, or using the Platform, you agree to be bound by these Terms.
            </p>
            <p>
              If you enter into these Terms on behalf of a company or organization, you represent that you have the authority to bind that entity.
            </p>
          </div>
        </section>

        {/* 3. Description of the Platform */}
        <section id="section-3" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Description of the Platform</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              GoGreenlight is a decision-making and creative asset management platform designed for film, TV, and related creative productions.
            </p>
            <p>The Platform enables users to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Manage roles, casting candidates, and creative assets</li>
              <li>Organize and document approvals (&quot;greenlighting&quot;)</li>
              <li>Use AI-assisted features for visualization and decision support</li>
              <li>Collaborate securely within production teams</li>
            </ul>
            <p>
              GoGreenlight may make certain features or versions of the Platform available on a beta or pre-release basis (&quot;Beta Services&quot;). Beta Services are provided free of charge for evaluation purposes and are made available &quot;as is&quot; and &quot;as available&quot;. Beta Services may contain errors or incomplete functionality and may be modified, suspended, or discontinued at any time without notice. GoGreenlight does not guarantee availability, performance, or data retention in connection with Beta Services. Use of Beta Services is at your own risk.
            </p>
          </div>
        </section>

        {/* 4. Accounts */}
        <section id="section-4" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Accounts</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>You are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Maintaining the confidentiality of login credentials</li>
              <li>All activity occurring under your account</li>
              <li>Ensuring users within your organization comply with these Terms</li>
            </ul>
            <p>You must provide accurate and lawful information when registering.</p>
            <p>We may suspend accounts in case of suspected misuse or breach.</p>
          </div>
        </section>

        {/* 5. Commercial Terms */}
        <section id="section-5" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Commercial Terms</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>Access to the Platform is provided on a subscription basis.</p>
            <p>Unless otherwise agreed in writing:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Subscriptions run on a rolling monthly basis</li>
              <li>Either party may terminate with 30 days&apos; written notice</li>
              <li>Fees are non-refundable for the active billing period</li>
            </ul>
            <p>GoGreenlight may adjust pricing with reasonable prior notice.</p>
          </div>
        </section>

        {/* 6. User Content and Responsibility */}
        <section id="section-6" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">6. User Content and Responsibility</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              You retain ownership of all content, materials, data, files, images, recordings, text, and other information uploaded or generated within the Platform (&quot;User Content&quot;).
            </p>
            <p>You are solely responsible for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Ensuring you have the necessary rights, licenses, consents, or other legal basis to upload, process, modify, share, and use User Content;</li>
              <li>Ensuring that your use of the Platform does not infringe intellectual property rights, privacy rights, or other rights of third parties;</li>
              <li>Ensuring that personal data is processed in compliance with applicable data protection laws;</li>
              <li>Ensuring that any commercial use of third-party material is legally permitted.</li>
            </ul>
            <p>
              You may use the Platform as a closed creative workspace, including for internal reference, collaboration, mood board development, and creative exploration.
            </p>
            <p>
              GoGreenlight acts solely as a technical service provider and does not review, verify, or monitor intellectual property rights in User Content.
            </p>
            <p>
              AI-generated outputs derived from User Content are considered part of User Content. You remain fully responsible for the legality and use of such outputs, including any commercial exploitation.
            </p>
            <p>You must not use the Platform to upload or process content that:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Is unlawful, infringing, defamatory, discriminatory, or abusive;</li>
              <li>Violates intellectual property rights or contractual obligations;</li>
              <li>Is uploaded without a valid legal basis;</li>
              <li>Is used for deceptive impersonation, fraud, or malicious manipulation.</li>
            </ul>
            <p>GoGreenlight reserves the right to remove content or suspend access if these Terms are breached.</p>
          </div>
        </section>

        {/* 7. Data Protection and DPA */}
        <section id="section-7" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Protection and DPA</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              Where GoGreenlight processes personal data on behalf of a customer acting as data controller, the Data Processing Agreement (DPA) available at:
            </p>
            <p>
              <Link href="/gogreenlight-dpa" className="text-primary hover:underline">
                /gogreenlight-dpa
              </Link>
            </p>
            <p>shall apply.</p>
            <p>The DPA forms an integral part of these Terms where applicable.</p>
            <p>Information regarding authorized sub-processors is available at:</p>
            <p>
              <Link href="/dpa-appendix-b" className="text-primary hover:underline">
                /dpa-appendix-b
              </Link>
            </p>
          </div>
        </section>

        {/* 8. AI and Automated Features */}
        <section id="section-8" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">8. AI and Automated Features</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              The Platform may include AI-assisted, automated, and generative features designed to support creative decision-making, visualization, and workflow processes.
            </p>
            <p>You acknowledge and agree that:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>AI-generated outputs may be incomplete, inaccurate, biased, or otherwise imperfect;</li>
              <li>AI features are intended as decision-support tools only and do not constitute professional, legal, or creative advice;</li>
              <li>You remain solely responsible for evaluating, validating, and approving any AI-generated output before relying on or using it.</li>
            </ul>
            <p>
              AI-generated outputs derived from User Content are considered part of User Content and remain subject to your responsibility regarding intellectual property rights, lawful use, and regulatory compliance.
            </p>
            <p>GoGreenlight does not guarantee the originality, non-infringement, or suitability of AI-generated results.</p>
            <p>Unless explicitly agreed in writing:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>User Content is not used to train or improve third-party foundation models;</li>
              <li>GoGreenlight does not claim ownership of User Content or AI outputs generated from it.</li>
            </ul>
            <p>GoGreenlight may use aggregated, anonymized, and irreversibly de-identified usage data to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improve platform performance and usability;</li>
              <li>Develop and enhance features;</li>
              <li>Improve system reliability and security;</li>
              <li>Analyze general usage trends.</li>
            </ul>
            <p>Such data will not identify individual users, productions, or personal data subjects.</p>
            <p>
              AI functionality may rely on authorized sub-processors and cloud infrastructure as described in the Data Processing Agreement and related appendices.
            </p>
          </div>
        </section>

        {/* 9. Sub-Processors and International Transfers */}
        <section id="section-9" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">9. Sub-Processors and International Transfers</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              GoGreenlight uses authorized sub-processors, including cloud infrastructure and email service providers, as described in{" "}
              <Link href="/dpa-appendix-b" className="text-primary hover:underline">
                Appendix B
              </Link>
              .
            </p>
            <p>Processing primarily occurs within the EU/EEA.</p>
            <p>Where international transfers occur, appropriate safeguards are applied in accordance with GDPR.</p>
          </div>
        </section>

        {/* 10. Confidentiality */}
        <section id="section-10" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">10. Confidentiality</h2>
          <p className="text-muted-foreground leading-relaxed">
            Each party agrees to keep confidential information received from the other party confidential and not disclose it except as necessary to perform obligations under these Terms.
          </p>
        </section>

        {/* 11. Intellectual Property */}
        <section id="section-11" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">11. Intellectual Property</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              All rights, title, and interest in and to the Platform, including software, architecture, and design, remain the exclusive property of GoGreenlight ApS.
            </p>
            <p>
              These Terms grant a limited, non-exclusive, non-transferable right to use the Platform during the subscription period.
            </p>
            <p>No rights are granted beyond what is explicitly stated.</p>
          </div>
        </section>

        {/* 12. Security */}
        <section id="section-12" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">12. Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            GoGreenlight implements appropriate technical and organizational measures in accordance with Article 32 GDPR, as described in the DPA.
          </p>
        </section>

        {/* 13. Warranties Disclaimer */}
        <section id="section-13" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">13. Warranties Disclaimer</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>The Platform is provided &quot;as is&quot; and &quot;as available&quot;.</p>
            <p>
              To the maximum extent permitted by law, GoGreenlight disclaims all implied warranties, including fitness for a particular purpose and non-infringement.
            </p>
            <p>We do not warrant uninterrupted or error-free operation.</p>
          </div>
        </section>

        {/* 14. Limitation of Liability */}
        <section id="section-14" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">14. Limitation of Liability</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>To the maximum extent permitted by law:</p>
            <p>
              GoGreenlight&apos;s total aggregate liability arising out of or relating to these Terms shall not exceed the greater of:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>(a) the total fees paid by the customer in the 12 months preceding the claim, or</li>
              <li>(b) DKK 50,000</li>
            </ul>
            <p>GoGreenlight shall not be liable for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Indirect or consequential damages</li>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Decisions made based on AI outputs</li>
            </ul>
            <p>Nothing in these Terms limits liability where such limitation is not permitted by law.</p>
          </div>
        </section>

        {/* 15. Termination */}
        <section id="section-15" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">15. Termination</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>Either party may terminate the subscription with 30 days&apos; written notice.</p>
            <p>Upon termination:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access to the Platform will cease</li>
              <li>Data will be handled in accordance with the DPA</li>
            </ul>
          </div>
        </section>

        {/* 16. Governing Law and Venue */}
        <section id="section-16" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">16. Governing Law and Venue</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>These Terms are governed by Danish law.</p>
            <p>Any dispute shall be submitted to the courts of Denmark.</p>
          </div>
        </section>

        {/* 17. Changes to These Terms */}
        <section id="section-17" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">17. Changes to These Terms</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>GoGreenlight may update these Terms from time to time.</p>
            <p>Material changes will be communicated with reasonable notice.</p>
            <p>Continued use after changes constitutes acceptance.</p>
          </div>
        </section>

        {/* 18. Contact */}
        <section id="section-18" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">18. Contact</h2>
          <div className="text-muted-foreground leading-relaxed space-y-1">
            <p>
              <a href="mailto:contact@gogreenlight.ai" className="text-primary hover:underline">
                contact@gogreenlight.ai
              </a>
            </p>
            <p className="mt-4">GoGreenlight ApS</p>
            <p>Nordtoft 30</p>
            <p>9000 Aalborg</p>
            <p>Denmark</p>
            <p className="mt-4">CVR: 45992705</p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}