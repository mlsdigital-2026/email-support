import { notFound } from "next/navigation";
import { blogs } from "@/data/blog";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogContent from "@/components/blog/BlogContent";
import Breadcrumb from "@/components/blog/Breadcrumb";
import RelatedBlogs from "@/components/blog/RelatedBlogs";
import ReadingTime from "@/components/blog/ReadingTime";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {};
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,

    alternates: {
      canonical: `/blog/${blog.slug}`,
    },

    openGraph: {
      type: "article",
      url: `/blog/${blog.slug}`,
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [
        {
          url: blog.image,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.image],
    },
  };
}
export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription,
    image: `https://sbcmailme.com${blog.image}`,
    author: {
      "@type": "Organization",
      name: "SBC Mail Me",
    },
    publisher: {
      "@type": "Organization",
      name: "SBC Mail Me",
      logo: {
        "@type": "ImageObject",
        url: "https://sbcmailme.com/logo.png",
      },
    },
    datePublished: blog.date,
    dateModified: blog.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sbcmailme.com/blog/${blog.slug}`,
    },
  };

  return (
    <main className="bg-white pt-20">
       <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://sbcmailme.com",
      },
      {
        name: "Blog",
        url: "https://sbcmailme.com/blog",
      },
      {
        name: blog.title,
        url: `https://sbcmailme.com/blog/${blog.slug}`,
      },
    ]}
  />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd),
  }}
/>

      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14">

          <Breadcrumb title={blog.title} />

          <span className="mt-6 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {blog.category}
          </span>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight text-slate-900">
            {blog.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-slate-600">
            <span>{blog.author}</span>

            <span>{blog.date}</span>

            <ReadingTime
              text={blog.sections
                .flatMap((section) => [
                  section.heading,
                  ...section.paragraphs,
                  ...(section.bullets ?? []),
                ])
                .join(" ")}
            />
          </div>

        </div>
      </section>

      <section className="py-16">

        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_320px]">

      <div>
  <BlogContent blog={blog} />
</div>

          <BlogSidebar blog={blog} />

        </div>

      </section>

      <RelatedBlogs currentSlug={blog.slug} />

    </main>
  );
}