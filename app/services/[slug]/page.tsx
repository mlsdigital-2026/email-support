import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  BookOpen,
} from "lucide-react";

import { services } from "@/data/services";
import { serviceContent } from "@/data/serviceContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const content =
    serviceContent[slug as keyof typeof serviceContent];

  return (
    <main className="bg-white py-20">
      <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://sbcmailme.com",
      },
      {
        name: "Services",
        url: "https://sbcmailme.com/services",
      },
      {
        name: service.title,
        url: `https://sbcmailme.com/services/${service.slug}`,
      },
    ]}
  />

      {/* Hero */}

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Email Recovery Guide
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-900">
              {service.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {service.description}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Contact 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

          </div>

          <Image
            src={service.image}
            alt={service.title}
            width={550}
            height={450}
            className="mx-auto"
          />

        </div>
      </section>

      {/* Feature Cards */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border p-8">
              <ShieldCheck className="mb-4 text-blue-600" size={40} />
              <h3 className="mb-3 text-xl font-semibold">
                Secure Guidance
              </h3>
              <p className="text-slate-600">
                Learn official recovery options and security best practices.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <Clock className="mb-4 text-blue-600" size={40} />
              <h3 className="mb-3 text-xl font-semibold">
                Step-by-Step
              </h3>
              <p className="text-slate-600">
                Follow clear recovery instructions.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <BookOpen className="mb-4 text-blue-600" size={40} />
              <h3 className="mb-3 text-xl font-semibold">
                Helpful Resources
              </h3>
              <p className="text-slate-600">
                Educational information for common email issues.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Overview */}

      {content && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-5xl px-6">

            <h2 className="text-4xl font-bold">
              Overview
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              {content.overview}
            </p>

          </div>
        </section>
      )}

      {/* Steps */}

      {content && (
        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-5xl px-6">

            <h2 className="mb-12 text-4xl font-bold">
              Step-by-Step Guide
            </h2>

            <div className="space-y-6">

              {content.steps.map((step, index) => (

                <div
                  key={index}
                  className="flex gap-6 rounded-2xl bg-white p-6 shadow-sm"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="pt-2 text-lg">
                    {step}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>
      )}

      {/* Tips */}

      {content && (
        <section className="py-20">

          <div className="mx-auto max-w-5xl px-6">

            <h2 className="mb-12 text-4xl font-bold">
              Helpful Tips
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              {content.tips.map((tip, index) => (

                <div
                  key={index}
                  className="rounded-2xl border p-6 text-slate-700"
                >
                  ✅ {tip}
                </div>

              ))}

            </div>

          </div>

        </section>
      )}

    </main>
  );
}