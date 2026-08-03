import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Provider {
  id: number;
  slug: string;
  name: string;
  image: string;
  description: string;
}

export default function ProviderCard({
  provider,
}: {
  provider: Provider;
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <div className="bg-slate-50 p-6">

        <Image
          src={provider.image}
          alt={provider.name}
          width={300}
          height={220}
          className="mx-auto"
        />

      </div>

      <div className="p-8">

        <h3 className="text-2xl font-bold">
          {provider.name}
        </h3>

        <p className="mt-4 text-slate-600">
          {provider.description}
        </p>

        <Link
          href={`/providers/${provider.slug}`}
          className="mt-6 inline-flex items-center font-semibold text-blue-600"
        >
          Learn More
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>

      </div>

    </div>
  );
}