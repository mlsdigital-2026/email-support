"use client";

import Link from "next/link";
import Script from "next/script";
import { CheckCircle, ArrowRight } from "lucide-react";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export default function ThankYouPage() {
  return (
    <>
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
      >
        {`
          if (
            window.location.hostname === "sbcmailme.com" ||
            window.location.hostname === "www.sbcmailme.com"
          ) {
            gtag('event', 'conversion', {
              send_to: 'AW-18372150847/yvzhCMk4d0wcEL-Mw7hE'
            });
          }
        `}
      </Script>

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://sbcmailme.com",
          },
          {
            name: "Thank You",
            url: "https://sbcmailme.com/thank-you",
          },
        ]}
      />

      <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6 py-20">
        <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="mt-8 text-4xl font-bold text-slate-900">
            Thank You!
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Your enquiry has been submitted successfully.
            <br />
            Our team has received your request and will get back to you as soon as possible.
          </p>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Back to Home
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}