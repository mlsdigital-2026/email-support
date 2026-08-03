import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Mail,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-50" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Email Account Recovery & Password Help
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Recover Your
              <span className="text-blue-600"> Email Account </span>
              With Step-by-Step Guidance
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Find easy-to-follow resources for password reset, login issues,
              account recovery, email security, and provider-specific help for
              Gmail, Outlook, Yahoo, AOL, SBCGlobal, and more.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Contact Support
              </Link>
            </div>

            {/* Features */}

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-600" />
                <span className="text-slate-700">
                  Secure Recovery Guidance
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Lock className="text-blue-600" />
                <span className="text-slate-700">
                  Password Reset Resources
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span className="text-slate-700">
                  Multiple Email Providers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600" />
                <span className="text-slate-700">
                  Easy Step-by-Step Guides
                </span>
              </div>
            </div>
          </div>

          {/* Right Content */}

          <div className="relative flex justify-center">
            <Image
              src="/images/hero-support.png"
              alt="Email Support"
              width={650}
              height={550}
              priority
              className="w-full max-w-xl"
            />

            {/* Floating Card 1 */}

            <div className="absolute left-0 top-8 hidden rounded-2xl bg-white p-4 shadow-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <CheckCircle2 className="text-green-600" size={20} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Recovery Guides
                  </p>
                  <p className="text-sm text-slate-500">
                    Easy-to-follow instructions
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}

            <div className="absolute bottom-10 right-0 hidden rounded-2xl bg-white p-4 shadow-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <ShieldCheck className="text-blue-600" size={20} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Security Tips
                  </p>
                  <p className="text-sm text-slate-500">
                    Protect your email account
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}

        <div className="mt-20 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 text-center md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">20+</h3>
              <p className="text-slate-600">Email Topics Covered</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">6+</h3>
              <p className="text-slate-600">Popular Providers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
              <p className="text-slate-600">Helpful Resources</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">100%</h3>
              <p className="text-slate-600">Free Guides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}