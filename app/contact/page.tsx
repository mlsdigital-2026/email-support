import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import CTA from "@/components/home/CTA";

export default function ContactPage() {
  return (
    <main className="bg-white pt-20">

      {/* Hero */}

      <section className="bg-gradient-to-b from-blue-50 to-white py-24">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            We're Here to Help
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Have questions about our educational resources? Reach out using the information below.
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <Image
            src="/images/contact.png"
            alt="Contact"
            width={550}
            height={450}
            className="mx-auto"
          />

          <div>

            <div className="mb-8 flex items-center gap-4 rounded-2xl border p-6">
              <Mail className="text-blue-600" size={30} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-slate-600">
                  support@emailsupport.com
                </p>
              </div>
            </div>

            <div className="mb-8 flex items-center gap-4 rounded-2xl border p-6">
              <Phone className="text-blue-600" size={30} />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-slate-600">
                  +1 (800) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border p-6">
              <MapPin className="text-blue-600" size={30} />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-slate-600">
                  New York, United States
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      <CTA />

    </main>
  );
}