"use client";

import { Link2 } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function ShareButtons() {
  const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  return (
    <div className="rounded-2xl border p-6">
      <h3 className="mb-5 text-xl font-bold">
        Share Article
      </h3>

      <div className="flex gap-4">
        <button className="rounded-full bg-blue-600 p-3 text-white">
          <FaFacebookF size={20} />
        </button>

        <button className="rounded-full bg-sky-500 p-3 text-white">
          <FaLinkedinIn size={20} />
        </button>

        <button
          onClick={copy}
          className="rounded-full bg-slate-800 p-3 text-white"
        >
          <Link2 size={20} />
        </button>
      </div>
    </div>
  );
}