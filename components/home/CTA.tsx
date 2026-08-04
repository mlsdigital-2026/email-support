import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}

            <div className="p-12 lg:p-16">

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                Need Help Getting Started?
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Find the Right Email Recovery Guide Today
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Browse our educational resources covering account recovery,
                password reset, login and email security for
                popular email providers.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/services"
                  className="flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
                >
                  Explore Guides
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-xl border border-white/30 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  <Mail size={18} />
                  Contact Us
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="flex justify-center p-10">

              <Image
                src="/images/cta-support.png"
                alt="Email Recovery Guidance"
                width={550}
                height={450}
                className="w-full max-w-lg"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}