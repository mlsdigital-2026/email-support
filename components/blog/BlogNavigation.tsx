import Link from "next/link";
import { blogs } from "@/data/blog";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  currentSlug: string;
}

export default function BlogNavigation({ currentSlug }: Props) {
  const currentIndex = blogs.findIndex(
    (blog) => blog.slug === currentSlug
  );

  const previous =
    currentIndex > 0 ? blogs[currentIndex - 1] : null;

  const next =
    currentIndex < blogs.length - 1
      ? blogs[currentIndex + 1]
      : null;

  return (
    <section className="space-y-6">
      {previous && (
        <Link
          href={`/blog/${previous.slug}`}
          className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-600 hover:shadow-md"
        >
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-600">
            <ArrowLeft size={16} />
            Previous Article
          </div>

          <h3 className="text-lg font-semibold leading-7 text-slate-900">
            {previous.title}
          </h3>
        </Link>
      )}

      {next && (
        <Link
          href={`/blog/${next.slug}`}
          className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-600 hover:shadow-md"
        >
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-600">
            Next Article
            <ArrowRight size={16} />
          </div>

          <h3 className="text-lg font-semibold leading-7 text-slate-900">
            {next.title}
          </h3>
        </Link>
      )}
    </section>
  );
}