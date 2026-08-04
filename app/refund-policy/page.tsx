import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | SBC Mail Me",
  description:
    "Read the Refund Policy for SBC Mail Me regarding our independent email account recovery and technical support services.",
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900">
          Refund Policy
        </h1>

        <p className="mt-4 text-slate-600">
          Last Updated: August 2026
        </p>

        <p className="mt-8 leading-8 text-slate-700">
          This Refund Policy applies to all services provided by
          <strong> SBCMAILME.COM</strong>. Please read this policy carefully
          before purchasing or using our services.
        </p>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Business Information
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            SBCMAILME.COM
            <br />
            Email: info@sbcmailme.com
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Nature of Our Services
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            We provide independent email account recovery, password recovery,
            troubleshooting, maintenance guidance, and technical assistance.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Since our services involve diagnostics, technical guidance, and
            resolution efforts, outcomes may vary depending on account status,
            device configuration, software, security settings, verification
            requirements, and the policies of the respective email service
            provider.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Refund Eligibility
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Refunds are considered only where a service has not been delivered
            as described or where there has been a verified failure to provide
            the agreed service.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Once troubleshooting assistance, consultation, guidance, or
            technical support has been delivered, the service is considered
            completed and is generally non-refundable.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Non-Refundable Situations
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Refunds will generally not be issued under the following
            circumstances:
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-700">
            <li>
              The issue cannot be resolved because of account security
              restrictions, verification requirements, or the policies of the
              respective email service provider.
            </li>

            <li>
              Incorrect, incomplete, or misleading information provided by the
              user prevents successful delivery of the service.
            </li>

            <li>
              The user changes their mind after technical work or consultation
              has started or after the requested service has been delivered.
            </li>

            <li>
              The requested issue requires direct assistance from the email
              service provider or additional account ownership verification
              beyond our control.
            </li>

            <li>
              The issue falls outside the scope of the services offered by
              SBCMAILME.COM.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Service Outcomes
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            We do not guarantee that every email account recovery or
            troubleshooting issue can be fully resolved. Results depend on
            technical limitations, account status, provider policies, device
            condition, and other external factors that are beyond our control.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Refund Request Process
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            If you believe you qualify for a refund under this policy, please
            contact us with your service details and the reason for your
            request.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Every refund request is reviewed individually. Approval or denial
            is based on the circumstances of the service provided and the terms
            outlined in this Refund Policy.
          </p>

          <p className="mt-6 font-semibold text-slate-900">
            Email: info@sbcmailme.com
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Changes to This Policy
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            We reserve the right to update or modify this Refund Policy at any
            time. Any changes will be published on this page together with the
            revised effective date.
          </p>
        </section>
      </section>
    </main>
  );
}