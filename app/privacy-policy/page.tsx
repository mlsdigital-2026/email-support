import { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Privacy Policy | SBC Mail Me",
  description:
    "Read the Privacy Policy for SBC Mail Me to understand how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
       <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://sbcmailme.com",
      },
      {
        name: "Privacy Policy",
        url: "https://sbcmailme.com/privacy-policy",
      },
    ]}
  />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900">
          Privacy Policy
        </h1>

        <p className="mt-4 text-slate-600">
          Last Updated: August 2026
        </p>

        <p className="mt-8 leading-8 text-slate-700">
          This Privacy Policy explains how <strong>sbcmailme.com</strong>
          collects, uses, and protects information when you visit or use our
          website.
        </p>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">Business Information</h2>

          <p className="mt-5 leading-8 text-slate-700">
            SBCMAILME.COM
            <br />
            Email: info@sbcmailme.com
          </p>

          <p className="mt-6 leading-8 text-slate-700">
            We are an independent third-party provider of email account
            recovery, troubleshooting, and maintenance services. We are not
            affiliated with, authorized by, or endorsed by any email
            manufacturer or brand. All brand names, trademarks, and logos are
            used only for identification purposes and remain the property of
            their respective owners.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Information We Collect
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            We may collect basic personal information such as your name, email
            address, phone number, and email issue details when you contact us.
            We may also collect non-personal information including browser type,
            device information, and website usage data for analytics and
            performance improvement.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            How We Use Information
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            We use collected information to respond to inquiries, provide
            troubleshooting guidance, improve website performance, and
            communicate with users. We do not sell, rent, or trade personal
            information.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Cookies and Tracking
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Our website may use cookies and analytics tools to improve user
            experience and understand website performance. You may disable
            cookies through your browser settings at any time.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Data Sharing
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            We do not share personal information with third parties except where
            required by law or necessary to operate our website and provide
            requested services.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Data Security
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            We take reasonable measures to protect user information. However,
            no internet transmission or storage method is completely secure, and
            we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            External Links
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Our website may contain links to third-party websites. We are not
            responsible for the content or privacy practices of those websites.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Your Consent
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            By using our website, you agree to this Privacy Policy.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Updates to This Policy
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with a revised effective date.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Contact Information
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            If you have any questions regarding this Privacy Policy, please
            contact us:
          </p>

          <p className="mt-4 font-semibold">
            Email: info@sbcmailme.com
          </p>
        </section>
      </section>
    </main>
  );
}