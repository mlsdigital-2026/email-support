import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
}

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="bg-slate-50 p-6">

        <Image
          src={service.image}
          alt={service.title}
          width={320}
          height={220}
          className="mx-auto transition duration-300 group-hover:scale-105"
        />

      </div>

      <div className="p-8">

        <h3 className="text-3xl font-bold text-slate-900">
          {service.title}
        </h3>

        <p className="mt-5 text-slate-600 leading-8">
          {service.description}
        </p>

        <Link
          href={`/services/${service.slug}`}
          className="mt-8 inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
        >
          Learn More
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>

      </div>

    </div>
  );
}