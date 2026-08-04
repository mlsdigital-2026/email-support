import Image from "next/image";
import {
  ShieldCheck,
  Lock,
  BookOpen,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Security Best Practices",
    description:
      "Learn how to improve your email account security with practical recommendations.",
  },
  {
    icon: Lock,
    title: "Password Recovery Guidance",
    description:
      "Understand the official password reset and recovery options provided by email services.",
  },
  {
    icon: BookOpen,
    title: "Step-by-Step Resources",
    description:
      "Easy-to-follow guides designed to help you navigate common email account issues.",
  },
  {
    icon: CheckCircle,
    title: "Provider-Specific Information",
    description:
      "Helpful resources for Gmail, Outlook, Yahoo Mail, AOL, SBCGlobal, and other providers.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Why Choose Our Resources
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              Helpful Information for Common Email Problems
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our website provides educational guidance to help you understand
              account recovery, password reset, login, and email
              security for popular email providers.
            </p>

            <div className="mt-10 grid gap-6">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-500 hover:shadow-lg"
                >
                  <div className="rounded-xl bg-blue-100 p-3">
                    <feature.icon className="text-blue-600" size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-slate-600 leading-7">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <Image
              src="/images/email-security.png"
              alt="Email Security"
              width={550}
              height={550}
              className="w-full max-w-lg"
            />

          </div>

        </div>

      </div>
    </section>
  );
}