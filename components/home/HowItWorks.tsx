'use client';

import React from 'react';
// ... rest of your imports and code


import {
  FileText,
  Search,
  Mail,
  User,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Describe Your Issue",
    description:
      "Tell us what happened and which email provider you use.",
  },
  {
    number: "2",
    icon: Search,
    title: "Expert Reviews Request",
    description:
      "Our team reviews your case and provides the best solution.",
  },
  {
    number: "3",
    icon: Mail,
    title: "Receive Recovery Guidance",
    description:
      "Get step-by-step instructions tailored to your situation.",
  },
  {
    number: "4",
    icon: User,
    title: "Regain Access",
    description:
      "Follow the guidance and get back to your account.",
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
            Getting Back to Your Email Is Simple
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Follow these 4 easy steps.
          </p>

        </div>

        {/* Steps */}

        <div className="grid gap-6 lg:grid-cols-4">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Step Number */}

                <div className="absolute left-6 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {step.number}
                </div>

                {/* Icon */}

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
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
                    <ArrowRight size={30} className="text-blue-300" />
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