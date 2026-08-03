"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Find Answers to Common Questions
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Browse answers about email account recovery, password reset,
            login issues, and account security.
          </p>

        </div>

        {/* Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Illustration */}

          <div className="flex justify-center">

            <Image
              src="/images/faq-support.png"
              alt="FAQ Support"
              width={550}
              height={550}
              className="w-full max-w-lg"
            />

          </div>

          {/* Accordion */}

          <div className="space-y-5">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >

                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >

                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {openIndex === index && (
                  <div className="border-t border-slate-100 px-6 pb-6 pt-4 text-slate-600 leading-8">
                    {faq.answer}
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}