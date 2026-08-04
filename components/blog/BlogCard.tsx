import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface Blog {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Blog Image */}

      <div className="overflow-hidden">

        <Image
          src={blog.image}
          alt={blog.title}
          width={600}
          height={360}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      {/* Content */}

      <div className="p-7">

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            {blog.category}
          </span>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Calendar size={15} />
            {blog.date}
          </div>

        </div>

        <h3 className="mt-5 text-2xl font-bold leading-snug text-slate-900 transition group-hover:text-blue-600">
          {blog.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {blog.description}
        </p>

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
        >
          Read Article

          <ArrowRight size={18} />
        </Link>

      </div>

    </article>
  );
}