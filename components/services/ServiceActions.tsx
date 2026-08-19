'use client';

import React from 'react';
// ... rest of your code

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">

      <button
        type="button"
        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        onClick={() => {
          // Open your recovery popup here
          alert("Open Recovery Popup");
        }}
      >
        Start Recovery
        <ArrowRight className="ml-2 inline h-5 w-5" />
      </button>

      <a
        href="tel:+18555290095"
        className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800"
      >
        Call Now • +1 (855) 529-0095
      </a>

      <Link
        href="/contact"
        className="rounded-xl border border-slate-300 px-6 py-3 font-semibold"
      >
        Contact
      </Link>

    </div>
  );
}