import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { providers } from "@/data/providers";

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

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Email Provider Guide
            </span>

            <h1 className="mt-6 text-5xl font-bold">
              {provider.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {provider.description}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Contact Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

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

    </main>
  );
}