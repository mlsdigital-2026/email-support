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
    <main className="bg-white pt-20">

      {/* Hero */}

      <section className="bg-gradient-to-b from-blue-50 to-white py-20">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {blog.category}
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            {blog.title}
          </h1>

          <p className="mt-6 text-slate-500">
            {blog.date}
          </p>

        </div>

      </section>

      {/* Featured Image */}

      <section className="py-12">

        <div className="mx-auto max-w-5xl px-6">

          <Image
            src={blog.image}
            alt={blog.title}
            width={1000}
            height={550}
            className="rounded-3xl"
          />

        </div>

      </section>

      {/* Article */}

      <section className="pb-20">

        <div className="mx-auto max-w-3xl px-6">

          {blog.content.map((paragraph: string, index: number) => (
            <p
              key={index}
              className="mb-8 text-lg leading-9 text-slate-700"
            >
              {paragraph}
            </p>
          ))}

          <Link
            href="/blog"
            className="mt-12 inline-flex items-center font-semibold text-blue-600"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Blog
          </Link>

        </div>

      </section>

    </main>
  );
}