import { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "DPA Appendix B - Sub-Processor List | GoGreenlight",
  description: "GoGreenlight authorized sub-processors list for data processing agreement compliance.",
};

export default function DPAAppendixBPage() {
  return (
    <LegalLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Appendix B
          </h1>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            GoGreenlight Sub-Processor List
          </h2>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/50">
          <p className="text-muted-foreground leading-relaxed mb-4">
            This appendix forms part of the{" "}
            <Link href="/gogreenlight-dpa" className="text-primary hover:underline">
              Data Processing Agreement (DPA)
            </Link>{" "}
            between the Data Controller and GoGreenlight (the Data Processor).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The list of authorized sub-processors will be maintained and updated as necessary to reflect any changes in our data processing arrangements.
          </p>
        </div>

        <section>
          <h3 className="text-xl font-bold text-foreground mb-4">Authorized Sub-Processors</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            On commencement of the Clauses, the data controller authorizes the engagement of the following sub-processors for the processing described for that party. The data processor shall not be entitled – without the data controller&apos;s general written authorization – to engage a sub-processor for a &apos;different&apos; processing than the one which has been agreed upon or have another sub-processor perform the described processing.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg">
              <thead>
                <tr className="bg-card/50">
                  <th className="text-left p-4 border-b border-border text-foreground font-semibold">Sub-Processor</th>
                  <th className="text-left p-4 border-b border-border text-foreground font-semibold">Purpose</th>
                  <th className="text-left p-4 border-b border-border text-foreground font-semibold">Location</th>
                  <th className="text-left p-4 border-b border-border text-foreground font-semibold">Transfer Safeguards</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr>
                  <td className="p-4 border-b border-border">Google Cloud Platform</td>
                  <td className="p-4 border-b border-border">Cloud hosting and infrastructure</td>
                  <td className="p-4 border-b border-border">EU/EEA</td>
                  <td className="p-4 border-b border-border">N/A (EU processing)</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-border">Supabase</td>
                  <td className="p-4 border-b border-border">Database services and authentication</td>
                  <td className="p-4 border-b border-border">EU/EEA</td>
                  <td className="p-4 border-b border-border">N/A (EU processing)</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-border">Vercel</td>
                  <td className="p-4 border-b border-border">Application hosting and deployment</td>
                  <td className="p-4 border-b border-border">EU/EEA</td>
                  <td className="p-4 border-b border-border">N/A (EU processing)</td>
                </tr>
                <tr>
                  <td className="p-4">Resend</td>
                  <td className="p-4">Email delivery services</td>
                  <td className="p-4">USA</td>
                  <td className="p-4">EU-US Data Privacy Framework, SCCs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-foreground mb-4">Changes to Sub-Processors</h3>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              The data processor shall inform in writing the data controller of any intended changes concerning the addition or replacement of sub-processors at least 5 work days in advance, thereby giving the data controller the opportunity to object to such changes prior to the engagement of the concerned sub-processor(s).
            </p>
            <p>
              For questions regarding sub-processors, please contact:{" "}
              <a href="mailto:contact@gogreenlight.ai" className="text-primary hover:underline">
                contact@gogreenlight.ai
              </a>
            </p>
          </div>
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
              <Link href="/dpa-isp" className="text-primary hover:underline">
                Information Security Policy (ISP)
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