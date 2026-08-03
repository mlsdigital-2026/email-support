import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import CTA from "@/components/home/CTA";

export default function BlogPage() {
  return (
    <main className="bg-white pt-20">

      <BlogHero />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <BlogGrid />
      </section>

      <CTA />

    </main>
  );
}