import { blogs } from "@/data/blog";
import BlogFilters from "./BlogFilters";

export default function BlogGrid() {
  return <BlogFilters blogs={blogs} />;
}