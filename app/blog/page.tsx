import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Email Recovery & Security Blog | SBC Mail Me",
  description:
    "Read educational guides about email password recovery, email security, account protection, email setup, IMAP, POP3, and best practices.",
};

export default function BlogPage() {
  return (
    <main className="bg-white">
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
        ]}
      />

      <BlogHero />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <BlogGrid />
        </div>
      </section>
    </main>
  );
}