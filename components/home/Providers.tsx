'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { providers } from "@/data/providers";

// ... rest of your code




export default function Providers() {
  return (
  <section className="bg-slate-50 pt-10 pb-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Guidance Providers
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Popular Email Providers
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Browse recovery guides, login assistance, and password reset
            information for major email providers.
          </p>

        </div>

        {/* Banner Illustration */}

        <div className="mb-20 flex justify-center">

          <Image
            src="/images/providers-banner.png"
            alt="Email Providers"
            width={850}
            height={450}
            className="w-full max-w-5xl rounded-3xl"
          />

        </div>

        {/* Provider Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {providers.map((provider) => (

            <div
              key={provider.id}
             className="rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-slate-700 shadow">
                {provider.name.charAt(0)}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {provider.name}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {provider.description}
              </p>

              <Link
                href={`/providers/${provider.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}