import Image from "next/image";
import CTA from "@/components/home/CTA";
// import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export default function AboutPage() {
  return (
   <main className="bg-white">
       <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://sbcmailme.com",
          },
          {
            name: "About",
            url: "https://sbcmailme.com/about",
          },
        ]}
      />

  {/* <Hero /> */}

  <Stats />

      <section className="bg-gradient-to-b from-blue-50 to-white py-24">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            About Email Recovery
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            Helping Users Understand Email Recovery
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Email provides educational resources to help users understand
            account recovery, password reset, login issues, and email security
            for popular email providers.
          </p>

        </div>

      </section>

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <Image
            src="/images/about.png"
            alt="About"
            width={550}
            height={450}
            className="mx-auto"
          />

          <div>

            <h2 className="text-4xl font-bold">
              Our Mission
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our goal is to provide clear, easy-to-understand educational
              content about email account recovery and online account security.
            </p>

            <div className="mt-10 space-y-4">

              <div>✅ Easy-to-follow guides</div>

              <div>✅ Educational resources</div>

              <div>✅ Security best practices</div>

              <div>✅ Provider-specific information</div>

            </div>

          </div>

        </div>

      </section>

      <CTA />

    </main>
  );
}