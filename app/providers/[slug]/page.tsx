import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { providers } from "@/data/providers";
import CTA from "@/components/home/CTA";
import BlogNavigation from "@/components/blog/BlogNavigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProviderDetail({ params }: Props) {
  const { slug } = await params;

  const provider = providers.find((item) => item.slug === slug);

  if (!provider) {
    notFound();
  }

  return (
    <main className="bg-white">

      {/* Hero Section */}

      {/* <section className="bg-slate-50 py-14 lg:py-16"> */}
      <section className="bg-red-100 py-0">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Email Provider Guide
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-900">
              {provider.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {provider.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/services"
                className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Contact Us
              </Link>

            </div>

          </div>

          <Image
            src={provider.image}
            alt={provider.name}
            width={550}
            height={450}
            className="mx-auto"
          />

        </div>
      </section>

      {/* Support Topics */}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Popular Topics
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Common {provider.name} Support Guides
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Explore educational guides covering password recovery,
              account access, email setup, security, IMAP, POP3, and
              resources for {provider.name}.
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">
                Password Reset
              </h3>
              <p className="mt-3 text-slate-600">
                Learn how to safely reset or change your email password.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">
                Account Recovery
              </h3>
              <p className="mt-3 text-slate-600">
                Recover your account if you've forgotten your password or lost access.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">
                Login Issues
              </h3>
              <p className="mt-3 text-slate-600">
                Fix common sign-in errors, verification issues, and blocked accounts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">
                IMAP Configuration
              </h3>
              <p className="mt-3 text-slate-600">
                Configure IMAP to synchronize your email across all your devices.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">
                POP3 Configuration
              </h3>
              <p className="mt-3 text-slate-600">
                Learn how POP3 works and configure desktop email applications.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">
                Email Security
              </h3>
              <p className="mt-3 text-slate-600">
                Protect your account with stronger passwords and two-factor authentication.
              </p>
            </div>

          </div>

        </div>
      </section>

      <CTA />

    </main>
  );
}