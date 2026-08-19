import { Blog } from "@/data/blog/type";

export default function TableOfContents({
  blog,
}: {
  blog: Blog;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h3 className="mb-5 text-xl font-bold text-slate-900">
        Table of Contents
      </h3>

      <ul className="space-y-3">

        {blog.sections.map((section) => (
          <li key={section.heading}>

            <a
              href={`#${section.heading
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`}
              className="block text-slate-600 transition hover:text-blue-600"
            >
              {section.heading}
            </a>

          </li>
        ))}

      </ul>

    </div>
  );
}