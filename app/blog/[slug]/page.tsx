import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogs } from "@/data/blogs";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="bg-gradient-to-b from-blue-50 to-white py-20">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {blog.category}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            {blog.title}
          </h1>

          <p className="mt-5 text-slate-500">
            {blog.date}
          </p>

        </div>

      </section>

      {/* Featured Image */}

      <section className="pb-10">

        <div className="mx-auto max-w-6xl px-6">

          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={650}
            className="w-full rounded-3xl object-cover"
            priority
          />

        </div>

      </section>

      {/* Article */}

      <section className="pb-20">

        <div className="mx-auto max-w-4xl px-6">

          {blog.content.map((paragraph, index) => (

            <p
              key={index}
              className="mb-8 text-lg leading-9 text-slate-700"
            >
              {paragraph}
            </p>

          ))}

          <div className="mt-16 rounded-3xl bg-blue-50 p-8">

            <h3 className="text-2xl font-bold text-slate-900">
              Need More Email Help?
            </h3>

            <p className="mt-4 text-slate-600">
              Browse our email recovery guides, password reset tutorials,
              account security resources, and provider-specific support
              articles.
            </p>

            <Link
              href="/services"
              className="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Services
            </Link>

          </div>

          <Link
            href="/blog"
            className="mt-12 inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Blog
          </Link>

        </div>

      </section>

    </main>
  );
}