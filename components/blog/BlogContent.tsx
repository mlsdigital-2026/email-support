"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Blog } from "@/data/blog/type";

export default function BlogContent({ blog }: { blog: Blog }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <article className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-8 prose-li:text-slate-700">
      {blog.sections.map((section, index) => (
        <section
          id={section.heading
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}
          key={index}
          className="mb-12 scroll-mt-28"
        >
          <h2 className="mb-5 text-3xl font-bold">
            {section.heading}
          </h2>

          {section.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="mb-5 leading-8 [&_a]:text-blue-600 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-blue-700"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

          {section.bullets && (
            <ul className="list-disc space-y-3 pl-6">
              {section.bullets.map((item, i) => (
                <li
                  key={i}
                  className="[&_a]:text-blue-600 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-blue-700"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          )}

          {section.afterBullets && (
            <div className="mt-4">
              {section.afterBullets.map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-5 leading-8 [&_a]:text-blue-600 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-blue-700"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          )}
        </section>
      ))}

      {blog.faqs && blog.faqs.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {blog.faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-slate-600 leading-8">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}