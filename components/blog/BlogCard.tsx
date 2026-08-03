import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-xl transition">

      <Image
        src={blog.image}
        alt={blog.title}
        width={500}
        height={300}
        className="w-full"
      />

      <div className="p-6">

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          {blog.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold">
          {blog.title}
        </h3>

        <p className="mt-4 text-slate-600">
          {blog.description}
        </p>

        <p className="mt-4 text-sm text-slate-500">
          {blog.date}
        </p>

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-6 inline-flex items-center font-semibold text-blue-600"
        >
          Read More
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>

      </div>

    </div>
  );
}