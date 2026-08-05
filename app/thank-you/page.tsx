import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-blue-50 to-white px-6">

      <div className="max-w-2xl rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-xl">

        <CheckCircle2
          className="mx-auto text-green-600"
          size={80}
        />

        <h1 className="mt-6 text-4xl font-bold text-slate-900">
          Thank You!
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Your message has been received successfully.
        </p>

        <p className="mt-4 text-slate-600">
          Thank you for contacting us. Our team will review your request and get back to you within 24 hours.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Back to Home
          </Link>

          {/* <Link
            href="/blog"
            className="rounded-xl border border-slate-300 px-7 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Read Guides
          </Link> */}

        </div>

      </div>

    </main>
  );
}