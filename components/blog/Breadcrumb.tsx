import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  title: string;
}

export default function Breadcrumb({ title }: Props) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">

      <Link
        href="/"
        className="transition hover:text-blue-600"
      >
        Home
      </Link>

      <ChevronRight size={16} />

      <Link
        href="/blog"
        className="transition hover:text-blue-600"
      >
        Blog
      </Link>

      <ChevronRight size={16} />

      <span className="font-medium text-slate-800">
        {title}
      </span>

    </nav>
  );
}