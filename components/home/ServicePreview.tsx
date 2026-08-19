'use client';

import React from 'react';
// ... rest of your code


import Link from "next/link";
import { services } from "@/data/services";

import ServiceCard from "@/components/services/ServiceCard";

export default function ServicePreview() {
  const featured = services.slice(0, 4);

  return (
    <section className="py-24 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Featured Services
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Popular Email  Guides
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Browse our most popular educational resources for email account
            recovery, password reset, login help, and account security.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {featured.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

        <div className="mt-14 text-center">

          <Link
            href="/services"
            className="inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
          >
            View All Services
          </Link>

        </div>

      </div>

    </section>
  );
}