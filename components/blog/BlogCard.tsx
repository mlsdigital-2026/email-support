import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Blog } from "@/data/blog/type";

export default function BlogCard({
  blog,
}: {
  blog: Blog;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <Image
        src={blog.image}
        alt={blog.title}
        width={600}
        height={350}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          {blog.category}
        </span>

        <h2 className="mt-5 text-2xl font-bold text-slate-900">
          {blog.title}
        </h2>

        <p className="mt-4 text-slate-600">
          {blog.description}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Calendar size={16} />
            {blog.date}
          </div>

          <Link
            href={`/blog/${blog.slug}`}
            className="font-semibold text-blue-600 hover:underline"
          >
            Read More →
          </Link>

        </div>

      </div>
    </article>
  );
}