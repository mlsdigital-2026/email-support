'use client';

import React from 'react';
// ... rest of your imports and code


import {
  Search,
  BookOpen,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Choose Your Email Provider",
    description:
      "Select the email provider or topic related to your account issue.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Follow the Recovery Guide",
    description:
      "Read the step-by-step instructions for password reset, login issues, or account recovery.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Secure Your Account",
    description:
      "Review recommended security practices to help keep your email account protected.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Get Started in Three Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Quickly find the right guidance for recovering access to your email
            account and improving its security.
          </p>

        </div>

        {/* Steps */}

        <div className="grid gap-10 lg:grid-cols-3">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Step Number */}

                <div className="absolute right-8 top-8 text-5xl font-extrabold text-blue-100">
                  {step.number}
                </div>

                {/* Icon */}

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-blue-600" size={30} />
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-slate-600">
                  {step.description}
                </p>

                {/* Arrow */}

                {index < steps.length - 1 && (
                  <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 lg:block">
                    <ArrowRight
                      size={36}
                      className="text-blue-300"
                    />
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}