"use client";

import { useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import { Blog } from "@/data/blog/type";

interface Props {
  blogs: Blog[];
}

export default function BlogFilters({ blogs }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category)),
  ];

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || blog.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, search, category]);

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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </>
  );
}