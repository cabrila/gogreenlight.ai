import { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Data Processing Agreement | GoGreenlight",
  description: "GoGreenlight Data Processing Agreement (DPA) - Based on the Danish Data Protection Agency standard template.",
};

export default function DPAPage() {
  return (
    <LegalLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Data Processing Agreement
          </h1>
          <p className="text-sm text-muted-foreground mb-2">
            <strong>Standard Contractual Clauses</strong>
          </p>
          <p className="text-sm text-muted-foreground mb-1">
            Last modified: 15.10.25
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
            <li><a href="#section-2" className="hover:text-primary transition-colors">Preamble</a></li>
            <li><a href="#section-3" className="hover:text-primary transition-colors">The Rights and Obligations of the Data Controller</a></li>
            <li><a href="#section-4" className="hover:text-primary transition-colors">The Data Processor Acts According to Instructions</a></li>
            <li><a href="#section-5" className="hover:text-primary transition-colors">Confidentiality</a></li>
            <li><a href="#section-6" className="hover:text-primary transition-colors">Security of Processing</a></li>
            <li><a href="#section-7" className="hover:text-primary transition-colors">Use of Sub-Processors</a></li>
            <li><a href="#section-8" className="hover:text-primary transition-colors">Transfer of Data to Third Countries or International Organizations</a></li>
            <li><a href="#section-9" className="hover:text-primary transition-colors">Assistance to the Data Controller</a></li>
            <li><a href="#section-10" className="hover:text-primary transition-colors">Notification of Personal Data Breach</a></li>
            <li><a href="#section-11" className="hover:text-primary transition-colors">Erasure and Return of Data</a></li>
            <li><a href="#section-12" className="hover:text-primary transition-colors">Audit and Inspection</a></li>
            <li><a href="#section-13" className="hover:text-primary transition-colors">The Parties&apos; Agreement on Other Terms</a></li>
            <li><a href="#section-14" className="hover:text-primary transition-colors">Commencement and Termination</a></li>
            <li><a href="#section-15" className="hover:text-primary transition-colors">Data Controller and Data Processor Contact/Contact Points</a></li>
          </ol>
          <p className="mt-4 text-sm text-muted-foreground">Appendices:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
            <li>Appendix A: Information About the Processing</li>
            <li>
              <Link href="/dpa-appendix-b" className="text-primary hover:underline">
                Appendix B: Authorized Sub-Processors
              </Link>
            </li>
            <li>Appendix C: Instruction Pertaining to the Use of Personal Data</li>
            <li>Appendix D: The Parties&apos; Terms of Agreement on Other Subjects</li>
          </ul>
        </nav>

        {/* 1. Introduction */}
        <section id="section-1" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              This Data Processing Agreement is based on The Danish Data Protection Agency&apos;s standard template for Data Processing Agreements. The Danish Data Protection Agency is the independent authority that supervises compliance with the rules on protection of personal data in Denmark.
            </p>
            <p>
              This Data Processing Agreement is based on the standard processor agreement that has been adopted by the Danish SA pursuant to Article 28(8) GDPR and aims at helping organizations to meet the requirements of Article 28(3) and (4), given that the contract between controller and processor cannot merely restate the provisions of the GDPR but must further specify them, e.g. with regard to the assistance provided by the processor to the controller.
            </p>
            <p>
              The possibility of using SCCs adopted by a Supervisory Authority (SA) does not prevent the parties from adding other clauses or additional safeguards, provided that they do not contradict, directly or indirectly, the adopted clauses or prejudice the fundamental rights or freedoms of the data subjects.
            </p>
            <p className="text-sm italic">
              Note: As of March 2024, the clause concerning the designation of the controller as a third-party beneficiary in case of the processor&apos;s insolvency or legal cessation has been made optional and its wording aligned with the European Commission&apos;s 2021 SCCs.
            </p>
            <p>
              For the purposes of Article 28(3) of Regulation 2016/679 (the GDPR):
            </p>
            <p>the data processor</p>
            <p>and</p>
            <p>the data controller</p>
            <p>each a &apos;party&apos;; together &apos;the parties&apos;</p>
            <p>
              have agreed on the following Contractual Clauses (the Clauses) in order to meet the requirements of the GDPR and to ensure the protection of the rights of the data subject.
            </p>
          </div>
        </section>

        {/* 2. Preamble */}
        <section id="section-2" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Preamble</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              These Contractual Clauses (the Clauses) set out the rights and obligations of the data controller and the data processor, when processing personal data on behalf of the data controller.
            </p>
            <p>
              In the context of providing the GoGreenlight platform – a decision-making and creative asset selection software used for e.g., casting, location, and production approvals in film, TV, theatre, and other creative productions – the data processor will process personal data on behalf of the data controller in accordance with these Clauses.
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>The Clauses shall not exempt the data processor from obligations to which the data processor is subject pursuant to the General Data Protection Regulation (the GDPR) or other legislation.</li>
              <li>The Clauses along with appendices shall be retained in writing, including electronically, by both parties.</li>
              <li>Appendix D contains provisions for other activities which are not covered by the Clauses.</li>
              <li>Appendix C contains the data controller&apos;s instructions with regards to the processing of personal data, the minimum security measures to be implemented by the data processor and how audits of the data processor and any sub-processors are to be performed.</li>
              <li>
                <Link href="/dpa-appendix-b" className="text-primary hover:underline">
                  Appendix B
                </Link>{" "}
                contains the data controller&apos;s conditions for the data processor&apos;s use of sub-processors and a list of sub-processors authorised by the data controller.
              </li>
              <li>Appendix A contains details about the processing of personal data, including the purpose and nature of the processing, type of personal data, categories of data subject and duration of the processing.</li>
              <li>Four appendices are attached to the Clauses and form an integral part of the Clauses.</li>
              <li>The Clauses shall take priority over any similar provisions contained in other agreements between the parties.</li>
              <li>The Clauses have been designed to ensure the parties&apos; compliance with Article 28(3) of Regulation 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC (General Data Protection Regulation).</li>
            </ol>
          </div>
        </section>

        {/* 3. Rights and Obligations */}
        <section id="section-3" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">3. The Rights and Obligations of the Data Controller</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>The data controller shall be responsible, among other, for ensuring that the processing of personal data, which the data processor is instructed to perform, has a legal basis.</li>
              <li>The data controller has the right and obligation to make decisions about the purposes and means of the processing of personal data.</li>
              <li>The data controller is responsible for ensuring that the processing of personal data takes place in compliance with the GDPR (see Article 24 GDPR), the applicable EU or Member State* data protection provisions and the Clauses.</li>
            </ol>
          </div>
        </section>

        {/* 4. Data Processor Acts According to Instructions */}
        <section id="section-4" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">4. The Data Processor Acts According to Instructions</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>The data processor shall immediately inform the data controller if instructions given by the data controller, in the opinion of the data processor, contravene the GDPR or the applicable EU or Member State data protection provisions.</li>
              <li>The data processor shall process personal data only on documented instructions from the data controller, unless required to do so by Union or Member State law to which the processor is subject. Such instructions shall be specified in appendices A and C. Subsequent instructions can also be given by the data controller throughout the duration of the processing of personal data, but such instructions shall always be documented and kept in writing, including electronically, in connection with the Clauses.</li>
            </ol>
          </div>
        </section>

        {/* 5. Confidentiality */}
        <section id="section-5" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Confidentiality</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>The data processor shall at the request of the data controller demonstrate that the concerned persons under the data processor&apos;s authority are subject to the abovementioned confidentiality.</li>
              <li>The data processor shall only grant access to the personal data being processed on behalf of the data controller to persons under the data processor&apos;s authority who have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality and only on a need to know basis. The list of persons to whom access has been granted shall be kept under periodic review. On the basis of this review, such access to personal data can be withdrawn, if access is no longer necessary, and personal data shall consequently not be accessible anymore to those persons.</li>
            </ol>
          </div>
        </section>

        {/* 6. Security of Processing */}
        <section id="section-6" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Security of Processing</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              Article 32 GDPR stipulates that, taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, the data controller and data processor shall implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk. The data controller shall evaluate the risks to the rights and freedoms of natural persons inherent in the processing and implement measures to mitigate those risks. Depending on their relevance, the measures may include the following:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>a process for regularly testing, assessing, and evaluating the effectiveness of technical and organizational measures for ensuring the security of processing.</li>
              <li>the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident;</li>
              <li>the ability to ensure ongoing confidentiality, integrity, availability, and resilience of processing systems and services;</li>
              <li>Pseudonymisation and encryption of personal data;</li>
            </ol>
          </div>
        </section>

        {/* 7. Use of Sub-Processors */}
        <section id="section-7" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Use of Sub-Processors</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>If the sub-processor does not fulfil his data protection obligations, the data processor shall remain fully liable to the data controller as regards the fulfilment of the obligations of the sub-processor. This does not affect the rights of the data subjects under the GDPR – in particular those foreseen in Articles 79 and 82 GDPR – against the data controller and the data processor, including the sub-processor.</li>
              <li>The data processor shall agree a third-party beneficiary clause with the sub-processor where – in the event of bankruptcy of the data processor – the data controller shall be a third-party beneficiary to the sub-processor agreement and shall have the right to enforce the agreement against the sub-processor engaged by the data processor, e.g. enabling the data controller to instruct the sub-processor to delete or return the personal data.</li>
              <li>A copy of such a sub-processor agreement and subsequent amendments shall – at the data controller&apos;s request – be submitted to the data controller, thereby giving the data controller the opportunity to ensure that the same data protection obligations as set out in the Clauses are imposed on the sub-processor. Clauses on business related issues that do not affect the legal data protection content of the sub-processor agreement, shall not require submission to the data controller.</li>
              <li>Where the data processor engages a sub-processor for carrying out specific processing activities on behalf of the data controller, the same data protection obligations as set out in the Clauses shall be imposed on that sub-processor by way of a contract or other legal act under EU or Member State law, in particular providing sufficient guarantees to implement appropriate technical and organisational measures in such a manner that the processing will meet the requirements of the Clauses and the GDPR. The data processor shall therefore be responsible for requiring that the sub-processor at least complies with the obligations to which the data processor is subject pursuant to the Clauses and the GDPR.</li>
              <li>
                The data processor has the data controller&apos;s general authorisation for the engagement of sub-processors. The data processor shall inform in writing the data controller of any intended changes concerning the addition or replacement of sub-processors at least 5 work days in advance, thereby giving the data controller the opportunity to object to such changes prior to the engagement of the concerned sub-processor(s). Longer time periods of prior notice for specific sub-processing services can be provided in{" "}
                <Link href="/dpa-appendix-b" className="text-primary hover:underline">
                  Appendix B
                </Link>
                . The list of sub-processors already authorised by the data controller can be found in{" "}
                <Link href="/dpa-appendix-b" className="text-primary hover:underline">
                  Appendix B
                </Link>
                .
              </li>
              <li>The data processor shall therefore not engage another processor (sub-processor) for the fulfilment of the Clauses without the prior general written authorisation of the data controller.</li>
              <li>The data processor shall meet the requirements specified in Article 28(2) and (4) GDPR in order to engage another processor (a sub-processor).</li>
              <li>If subsequently – in the assessment of the data controller – mitigation of the identified risks require further measures to be implemented by the data processor, than those already implemented by the data processor pursuant to Article 32 GDPR, the data controller shall specify these additional measures to be implemented in Appendix C.</li>
            </ol>
          </div>
        </section>

        {/* 8. Transfer of Data */}
        <section id="section-8" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Transfer of Data to Third Countries or International Organizations</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>Without documented instructions from the data controller, the data processor therefore cannot within the framework of the Clauses:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>have the personal data processed in by the data processor in a third country</li>
              <li>transfer the processing of personal data to a sub-processor in a third country</li>
              <li>Transfer personal data to a data controller or a data processor in a third country or in an international organization</li>
            </ol>
          </div>
        </section>

        {/* 9. Assistance to the Data Controller */}
        <section id="section-9" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">9. Assistance to the Data Controller</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              Taking into account the nature of the processing, the data processor shall assist the data controller by appropriate technical and organisational measures, insofar as this is possible, in the fulfilment of the data controller&apos;s obligations to respond to requests for exercising the data subject&apos;s rights laid down in Chapter III GDPR. This entails that the data processor shall, insofar as this is possible, assist the data controller in the data controller&apos;s compliance with:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>the right not to be subject to a decision based solely on automated processing, including profiling</li>
              <li>the right to object</li>
              <li>the right to data portability</li>
              <li>notification obligation regarding rectification or erasure of personal data or restriction of processing</li>
              <li>the right to restriction of processing</li>
              <li>the right to erasure (&apos;the right to be forgotten&apos;)</li>
              <li>the right to rectification</li>
              <li>the right of access by the data subject</li>
              <li>the right to be informed when personal data have not been obtained from the data subject</li>
              <li>the right to be informed when collecting personal data from the data subject</li>
            </ol>
            <p>
              In addition to the data processor&apos;s obligation to assist the data controller pursuant to Clause 6.3., the data processor shall furthermore, taking into account the nature of the processing and the information available to the data processor, assist the data controller in ensuring compliance with:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>the data controller&apos;s obligation to consult the competent supervisory authority, The Danish Data Protection Agency, prior to processing where a data protection impact assessment indicates that the processing would result in a high risk in the absence of measures taken by the data controller to mitigate the risk.</li>
              <li>the data controller&apos;s obligation to carry out an assessment of the impact of the envisaged processing operations on the protection of personal data (a data protection impact assessment);</li>
              <li>the data controller&apos;s obligation to without undue delay communicate the personal data breach to the data subject, when the personal data breach is likely to result in a high risk to the rights and freedoms of natural persons;</li>
              <li>The data controller&apos;s obligation to without undue delay and, where feasible, not later than 72 hours after having become aware of it, notify the personal data breach to the competent supervisory authority, unless the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons;</li>
            </ol>
          </div>
        </section>

        {/* 10. Notification of Personal Data Breach */}
        <section id="section-10" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">10. Notification of Personal Data Breach</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>The parties shall define in Appendix C all the elements to be provided by the data processor when assisting the data controller in the notification of a personal data breach to the competent supervisory authority.</li>
              <li>
                In accordance with Clause 9(2)(a), the data processor shall assist the data controller in notifying the personal data breach to the competent supervisory authority, meaning that the data processor is required to assist in obtaining the information listed below which, pursuant to Article 33(3)GDPR, shall be stated in the data controller&apos;s notification to the competent supervisory authority:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>The nature of the personal data including where possible, the categories and approximate number of data subjects concerned, and the categories and approximate number of personal data records concerned;</li>
                  <li>the likely consequences of the personal data breach;</li>
                  <li>the measures taken or proposed to be taken by the controller to address the personal data breach, including, where appropriate, measures to mitigate its possible adverse effects.</li>
                </ul>
              </li>
              <li>The data processor&apos;s notification to the data controller shall, if possible, take place within 72 hours after the data processor has become aware of the personal data breach to enable the data controller to comply with the data controller&apos;s obligation to notify the personal data breach to the competent supervisory authority, cf. Article 33 GDPR.</li>
              <li>In case of any personal data breach, the data processor shall, without undue delay after having become aware of it, notify the data controller of the personal data breach.</li>
              <li>The parties shall define in Appendix C the appropriate technical and organisational measures by which the data processor is required to assist the data controller as well as the scope and the extent of the assistance required. This applies to the obligations foreseen in Clause 9.1. and 9.2.</li>
            </ol>
          </div>
        </section>

        {/* 11. Erasure and Return of Data */}
        <section id="section-11" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">11. Erasure and Return of Data</h2>
          <p className="text-muted-foreground leading-relaxed">
            On termination of the provision of personal data processing services, the data processor shall be under obligation to delete all personal data processed on behalf of the data controller and certify to the data controller that it has done so unless Union or Member State law requires storage of the personal data.
          </p>
        </section>

        {/* 12. Audit and Inspection */}
        <section id="section-12" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">12. Audit and Inspection</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>The data processor shall be required to provide the supervisory authorities, which pursuant to applicable legislation have access to the data controller&apos;s and data processor&apos;s facilities, or representatives acting on behalf of such supervisory authorities, with access to the data processor&apos;s physical facilities on presentation of appropriate identification.</li>
              <li>Procedures applicable to the data controller&apos;s audits, including inspections, of the data processor and sub-processors are specified in appendices C.7. and C.8.</li>
              <li>The data processor shall make available to the data controller all information necessary to demonstrate compliance with the obligations laid down in Article 28 and the Clauses and allow for and contribute to audits, including inspections, conducted by the data controller or another auditor mandated by the data controller.</li>
            </ol>
          </div>
        </section>

        {/* 13. The Parties' Agreement on Other Terms */}
        <section id="section-13" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">13. The Parties&apos; Agreement on Other Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            The parties may agree other clauses concerning the provision of the personal data processing service specifying e.g. liability, as long as they do not contradict directly or indirectly the Clauses or prejudice the fundamental rights or freedoms of the data subject and the protection afforded by the GDPR.
          </p>
        </section>

        {/* 14. Commencement and Termination */}
        <section id="section-14" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">14. Commencement and Termination</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Signature: [Parties signatures]</li>
              <li>If the provision of personal data processing services is terminated, and the personal data is deleted or returned to the data controller pursuant to Clause 11.1. and Appendix C.4., the Clauses may be terminated by written notice by either party.</li>
              <li>The Clauses shall apply for the duration of the provision of personal data processing services. For the duration of the provision of personal data processing services, the Clauses cannot be terminated unless other Clauses governing the provision of personal data processing services have been agreed between the parties.</li>
              <li>Both parties shall be entitled to require the Clauses renegotiated if changes to the law or inexpediency of the Clauses should give rise to such renegotiation.</li>
              <li>The Clauses shall become effective on the date of both parties&apos; signature.</li>
            </ol>
          </div>
        </section>

        {/* 15. Contact Points */}
        <section id="section-15" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">15. Data Controller and Data Processor Contact/Contact Points</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>The parties shall be under obligation continuously to inform each other of changes to contacts/contact points.</li>
              <li>The parties may contact each other using the following contacts/contact points: [Name, mail etc.]</li>
            </ol>
          </div>
        </section>

        {/* Appendix A */}
        <section className="pt-8 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Appendix A: Information about the Processing</h2>
          <p className="text-sm text-muted-foreground mb-4 italic">
            This Annex forms part of the Data Processing Agreement between the Data Controller and GoGreenlight (the Data Processor).
          </p>
          <div className="text-muted-foreground leading-relaxed space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">1. Subject-matter and purpose of the processing</h3>
              <p>
                The Data Processor shall process personal data on behalf of the Data Controller for the purpose of providing access to the GoGreenlight platform. The platform supports casting and production management in creative industries (including film, TV, theatre, and related sectors) by enabling project teams to manage roles, creative asset selection (e.g. actors, locations, and props), and associated metadata.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">2. Categories of data subjects</h3>
              <p>The processing concerns the following categories of data subjects:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Actors and other casting candidates (e.g. extras)</li>
                <li>Creative and technical personnel involved in productions (e.g., directors, producers, make-up artists)</li>
                <li>Employees or collaborators of the Data Controller with access to the platform</li>
                <li>Other individuals whose data may be uploaded in connection with a production project</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">3. Categories of personal data</h3>
              <p>The processing includes the following categories of personal data:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Identification data (e.g., name, email address, phone number)</li>
                <li>Role-related data (e.g., audition materials, CVs, visual and audio recordings, annotations)</li>
                <li>Internal project metadata (e.g., casting status, selection history, project assignments)</li>
                <li>Technical data (e.g., user ID, login time, user activity logs)</li>
                <li>Communication records where applicable</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">4. Nature of the processing</h3>
              <p>The personal data will be subject to the following processing activities:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Collection, storage, and retrieval</li>
                <li>Structuring and organizing</li>
                <li>Access and sharing between authorized users</li>
                <li>Synchronization between local and central systems</li>
                <li>Erasure upon request or contract termination</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">5. Duration of the processing</h3>
              <p>
                Personal data will be processed for the duration of the agreement between the parties. Upon termination, the data shall be deleted or returned according to the instructions of the Data Controller.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">6. Processing location</h3>
              <p>
                Processing will primarily take place within the EU/EEA. If data is transferred to a third country, such transfer will be subject to appropriate safeguards in accordance with Chapter V of the GDPR.
              </p>
            </div>
          </div>
        </section>

        {/* Appendix B Reference */}
        <section className="pt-8 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Appendix B: Authorized Sub-Processors</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-2">B1: Approved sub-processors</h3>
            <p>
              On commencement of the Clauses, the data controller authorises the engagement of the following sub-processors, available on this webpage:
            </p>
            <p>
              <Link href="/dpa-appendix-b" className="text-primary hover:underline">
                View Sub-Processor List (Appendix B)
              </Link>
            </p>
            <p>
              The data controller shall on the commencement of the Clauses authorise the use of the sub-processors listed in the document available above for the processing described for that party. The data processor shall not be entitled – without the data controller&apos;s general written authorisation – to engage a sub-processor for a &apos;different&apos; processing than the one which has been agreed upon or have another sub-processor perform the described processing.
            </p>
          </div>
        </section>

        {/* Appendix C */}
        <section className="pt-8 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Appendix C: Instruction Pertaining to the Use of Personal Data</h2>
          <p className="text-sm text-muted-foreground mb-4 italic">
            Annex C: Description of Security Measures
          </p>
          <p className="text-sm text-muted-foreground mb-4 italic">
            This Annex forms part of the Data Processing Agreement between the Data Controller and GoGreenlight (the Data Processor).
          </p>
          <div className="text-muted-foreground leading-relaxed space-y-6">
            <p>
              The Data Processor shall implement the following appropriate technical and organizational security measures, as required under Article 32 of the GDPR, to ensure a level of security appropriate to the risk:
            </p>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">1. Access control</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Unique user authentication for each platform user</li>
                <li>Role-based access to limit permissions by function (e.g., caster, director, production)</li>
                <li>Two-factor authentication for administrator accounts</li>
                <li>Automatic session timeout and inactivity logout</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">2. Data encryption</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Encryption of data in transit using HTTPS/TLS 1.2 or higher</li>
                <li>Encryption of stored data on secure servers (e.g., at rest using AES-256)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">3. Data integrity and system resilience</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Regular data backups with geographically redundant storage</li>
                <li>Load-balanced infrastructure for high availability</li>
                <li>Automated monitoring and alerts for critical system operations</li>
                <li>Version control and audit trails for data modification</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">4. Physical security</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Data centers certified under ISO 27001 or equivalent security standards</li>
                <li>Restricted physical access to server locations</li>
                <li>Cloud infrastructure hosted with established providers (e.g., Google Cloud Platform)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">5. Internal policies and training</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Staff training on data protection and secure development</li>
                <li>Internal data processing and incident response policies</li>
                <li>Access to production systems limited to authorized personnel only</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">6. Incident management</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Procedures for detection, investigation, and reporting of personal data breaches</li>
                <li>Prompt notification to the Data Controller in accordance with the DPA</li>
                <li>Logging and documentation of incidents</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">7. Testing and evaluation</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Regular internal and external security testing (e.g., vulnerability scans, code reviews)</li>
                <li>Penetration testing of platform components</li>
                <li>Ongoing security and compliance assessments</li>
              </ul>
            </div>

            <p>The security measures shall be reviewed and updated regularly to ensure continuous protection of personal data.</p>
          </div>
        </section>

        {/* Appendix D */}
        <section className="pt-8 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Appendix D: The Parties&apos; Terms of Agreement on Other Subjects</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p className="italic">
              *References to &quot;Member States&quot; made throughout the Clauses shall be understood as references to &quot;EEA Member States&quot;.
            </p>
            <p className="italic">
              *Information Security Policy can be sent on request
            </p>
          </div>
        </section>

        <div className="text-sm text-muted-foreground pt-8 border-t border-border">
          <p>CVR: 45992705</p>
        </div>
      </div>
    </LegalLayout>
  );
}