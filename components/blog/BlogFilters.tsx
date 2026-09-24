"use client";

import { useEffect, useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import { Blog } from "@/data/blog/type";

interface Props {
  blogs: Blog[];
}

const BLOGS_PER_PAGE = 9;

export default function BlogFilters({ blogs }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(BLOGS_PER_PAGE);

  const safeBlogs = Array.isArray(blogs) ? blogs.filter(Boolean) : [];

  const categories = [
    "All",
    ...new Set(
      safeBlogs
        .filter((blog) => blog && typeof blog.category === "string")
        .map((blog) => blog.category)
    ),
  ];

  const filteredBlogs = useMemo(() => {
    return safeBlogs.filter((blog) => {
      if (!blog || !blog.title || !blog.description) return false;

      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || blog.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [safeBlogs, search, category]);

  useEffect(() => {
    setVisibleCount(BLOGS_PER_PAGE);
  }, [search, category]);

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none focus:border-blue-600 md:max-w-md"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-slate-300 px-5 py-3 outline-none focus:border-blue-600"
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {filteredBlogs.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center text-slate-500">
          No articles found.
        </div>
      ) : (
        <>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleBlogs.map((blog) => (
              <BlogCard key={blog.slug ?? `${blog.title}-${blog.date}`} blog={blog} />
            ))}
          </div>

          {visibleCount < filteredBlogs.length && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + BLOGS_PER_PAGE)}
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Show more articles
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}