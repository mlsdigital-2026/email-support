'use client';

import { Users, ShieldCheck, Clock3, Mail } from "lucide-react";
import React from 'react';

// ... rest of your code



const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Users Assisted",
  },
  {
    icon: Mail,
    value: "100K+",
    label: "Email Issues Solved",
  },
  {
    icon: ShieldCheck,
    value: "99%",
    label: "Customer Satisfaction",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Guidance Available",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className="mx-auto mb-4 text-blue-600" size={34} />

              <h3 className="text-3xl font-bold text-slate-900">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-600">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}