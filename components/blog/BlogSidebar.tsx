import { Blog } from "@/data/blog/type";
import TableOfContents from "./TableOfContents";
import BlogNavigation from "./BlogNavigation";

export default function BlogSidebar({
  blog,
}: {
  blog: Blog;
}) {
  return (
    <aside className="space-y-8">

      <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-1">

        <TableOfContents blog={blog} />

        <div className="mt-8">
          <BlogNavigation currentSlug={blog.slug} />
        </div>

      </div>

    </aside>
  );
}