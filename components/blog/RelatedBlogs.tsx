import Link from "next/link";
import { blogs } from "@/data/blog";

export default function RelatedBlogs({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const related = blogs
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="border-t bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-4xl font-bold text-slate-900">
          Related Articles
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {related.map((blog) => (
            <article
              key={blog.slug}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {blog.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {blog.title}
              </h3>

              <p className="mt-4 line-clamp-3 text-slate-600">
                {blog.description}
              </p>

              <Link
                href={`/blog/${blog.slug}`}
                className="mt-6 inline-flex font-semibold text-blue-600 hover:underline"
              >
                Read Article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}