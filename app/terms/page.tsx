import { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Terms and Conditions | SBC Mail Me",
  description:
    "Read the Terms and Conditions governing the use of SBC Mail Me and our independent email support services.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white">
      <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://sbcmailme.com",
      },
      {
        name: "Terms and Conditions",
        url: "https://sbcmailme.com/terms-and-conditions",
      },
    ]}
  />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900">
          Terms and Conditions
        </h1>

        <p className="mt-4 text-slate-600">
          Last Updated: August 2026
        </p>

        <p className="mt-8 leading-8 text-slate-700">
          These Terms and Conditions govern the use of the SBCMAILME.COM
          website and services. By accessing or using our website, you agree
          to these terms.
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
            Service Description
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            We provide independent email account recovery, password recovery,
            troubleshooting, maintenance guidance, and technical assistance.
            We are not affiliated with, authorized by, or endorsed by any
            email provider or brand.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Use of Services
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            By using our services, you agree to provide accurate and complete
            information regarding your email account and related issue. We are
            not responsible for delays or failures caused by inaccurate,
            incomplete, or misleading information supplied by the user.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            No Guarantee of Results
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Email account recovery and troubleshooting outcomes depend on
            account status, security settings, service provider policies, and
            other external factors. Therefore, we cannot guarantee that every
            issue can be successfully resolved or that account recovery will
            always be possible.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            User Responsibility
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Any changes, adjustments, or actions taken based on our guidance
            are performed at your own discretion and risk. Users remain
            responsible for ensuring that any actions are appropriate for
            their device and account.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Intellectual Property
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            All website content, including text, graphics, design, logos, and
            layout, is owned by SBCMAILME.COM unless otherwise stated.
            Unauthorized copying, reproduction, or redistribution is
            prohibited.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Third-Party Disclaimer
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            We may reference third-party brands, products, or services solely
            for identification purposes. We are not responsible for any
            third-party websites, products, or services.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Limitation of Liability
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            To the maximum extent permitted by law, SBCMAILME.COM shall not be
            liable for any direct, indirect, incidental, consequential, or
            special damages arising from the use of our website, services, or
            guidance.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Changes to Terms
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            We reserve the right to update these Terms and Conditions at any
            time. Updated versions will be published on this page with the
            revised effective date.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Contact Information
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            If you have any questions regarding these Terms and Conditions,
            please contact us:
          </p>

          <p className="mt-4 font-semibold">
            Email: info@sbcmailme.com
          </p>
        </section>
      </section>
    </main>
  );
}