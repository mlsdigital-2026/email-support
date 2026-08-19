import type { Blog } from "@/data/blog/type";

export default function BlogContent({ blog }: { blog: Blog }) {
  return (
    <article className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-8 prose-li:text-slate-700">
      {blog.sections.map((section, index) => (
        <section
  id={section.heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}
  key={index}
  className="mb-12"
>
          <h2 className="mb-5 text-3xl font-bold">
            {section.heading}
          </h2>

          {section.paragraphs.map((paragraph, i) => (
            <p key={i} className="mb-5 leading-8">
              {paragraph}
            </p>
          ))}

          {section.bullets && (
            <ul className="list-disc space-y-3 pl-6">
              {section.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </article>
  );
}