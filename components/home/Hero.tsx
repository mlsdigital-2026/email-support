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
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-100 opacity-50 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-100 opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-8 lg:pt-24 lg:pb-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Trusted Email Recovery Guides
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Recover Your
              <br />
              <span className="text-blue-600">Email Account</span>
              <br />
              in Minutes.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Forgot your password? Lost access to your email? SBCMailMe
              provides step-by-step recovery guides to help you regain access
              safely and securely,no technical knowledge required.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Start Recovery
                <ArrowRight size={18} />
              </Link>

              {/* <Link
                href="/contact"
                className="rounded-xl border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Get Guidance
              </Link> */}
            </div>

            {/* Features */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-600" />
                <span className="text-slate-700">
                  Secure Recovery Guides
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Lock className="text-blue-600" />
                <span className="text-slate-700">
                  Password Reset Help
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span className="text-slate-700">
                  Guidance for Multiple Email Providers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600" />
                <span className="text-slate-700">
                  Simple Step-by-Step Instructions
                </span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">
            <Image
              src="/images/hero-support.png"
              alt="Email Recovery Guidance"
              width={650}
              height={550}
              priority
              className="w-full max-w-xl"
            />

            {/* Floating Card 1 */}
            <div className="absolute left-0 top-8 hidden rounded-2xl bg-white p-4 shadow-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <CheckCircle2
                    className="text-green-600"
                    size={20}
                  />
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
                  <ShieldCheck
                    className="text-blue-600"
                    size={20}
                  />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Security Tips
                  </p>

                  <p className="text-sm text-slate-500">
                    Keep your account protected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
     {/* What You'll Learn */}
<div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

  <div className="text-center">
    <h2 className="text-3xl font-bold text-slate-900">
      Everything You Need to Recover Your Email Account
    </h2>

    <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
     Explore expert guidance for recovering email accounts, fixing login problems, resetting passwords, and keeping your email secure.
    </p>
  </div>

  <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

    <div>
      <h3 className="font-bold text-xl">Recover Access</h3>
      <p className="mt-3 text-slate-600">
        Learn how to regain access to locked or forgotten email accounts.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-xl">Reset Passwords</h3>
      <p className="mt-3 text-slate-600">
        Follow easy password recovery and reset instructions.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-xl">Secure Your Account</h3>
      <p className="mt-3 text-slate-600">
        Protect your email with stronger passwords and security settings.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-xl">Fix Login Issues</h3>
      <p className="mt-3 text-slate-600">
        Resolve common sign-in and account verification problems.
      </p>
    </div>

  </div>
  </div>

</div>
    </section>
  );
}