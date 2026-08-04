"use client";

import { useState } from "react";
import CTA from "@/components/home/CTA";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setSuccess("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      setError(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white pt-20">
      {/* Hero */}

      <section className="bg-gradient-to-b from-blue-50 via-white to-white py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900 lg:text-6xl">
            We'd Love to Hear From You
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Have questions about our educational resources, account recovery
            guides, or password assistance? Fill out the form below and we'll
            get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}

    {/* Contact Section */}

<section className="py-20">
  <div className="mx-auto max-w-3xl px-6">

    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-slate-900">
        Send us a Message
      </h2>

      <p className="mt-3 text-slate-600">
        Complete the form below and our team will respond as soon as possible.
      </p>
    </div>

    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
    >
      <input
        type="text"
        name="name"
        placeholder="Full Name *"
        value={formData.name}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address *"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject *"
        value={formData.subject}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
      />

      <textarea
        rows={6}
        name="message"
        placeholder="Write your message..."
        value={formData.message}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
      />

      {success && (
        <div className="rounded-xl border border-green-300 bg-green-50 p-4 text-green-700">
          {success}
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={18} />
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>

  </div>
</section>
      <CTA />
    </main>
  );
}