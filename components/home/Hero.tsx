"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";

interface HeroFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface RecoveryFormData {
  name: string;
  email: string;
  phone: string;
}

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [showRecoveryModal, setShowRecoveryModal] = useState(false);
  const [error, setError] = useState("");

  const [heroForm, setHeroForm] = useState<HeroFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [recoveryForm, setRecoveryForm] = useState<RecoveryFormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleHeroChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHeroForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRecoveryChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecoveryForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleHeroSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: heroForm.name,
          email: heroForm.email,
          phone: heroForm.phone,
          message: heroForm.message,
          subject: "Homepage Enquiry",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit enquiry.");
      }

      setHeroForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Show inline success panel instead of alert
      setEnquirySubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  

  const handleRecoverySubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: recoveryForm.name,
          email: recoveryForm.email,
          phone: recoveryForm.phone,
          subject: "Recovery Request",
          message: "Customer requested email recovery.",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit request.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  const openRecoveryModal = () => {
    setSubmitted(false);
    setError("");

    setRecoveryForm({
      name: "",
      email: "",
      phone: "",
    });

    setShowRecoveryModal(true);
  };

  const closeRecoveryModal = () => {
    setShowRecoveryModal(false);
    setSubmitted(false);
    setError("");
  };

  // removed chat-embedding and startChat helpers per simplified UI request
  return (
        <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* ===========================
                LEFT CONTENT
            =========================== */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">
                  Trusted Email Recovery Experts
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold leading-snug text-slate-900 md:text-4xl lg:text-5xl">
                Recover Your
                <span className="block text-blue-600">
                  Email Account Securely
                </span>
              </h1>

              <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-4 shadow-md">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Need Immediate Assistance?
                </p>

                <a
                  href="tel:+18555290095"
                  className="mt-3 flex items-center gap-3 text-3xl font-bold text-slate-900 hover:text-blue-600"
                >
                  <Phone className="h-7 w-7" />
                  +1 (855) 529-0095
                </a>

              </div>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                Get back into your email account quickly and securely with
                expert recovery assistance. Our specialists help recover
                locked, hacked, or inaccessible email accounts safely.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <button
                  type="button"
                  onClick={openRecoveryModal}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Start Recovery
                  <ArrowRight className="h-5 w-5" />
                </button>

                <a
                  href="tel:+18555290095"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  <Phone className="h-5 w-5" />
                  Call Now • +1 (855) 529-0095
                </a>

              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Secure Recovery
                    </h3>
                    <p className="text-sm text-slate-500">
                      Safe and verified recovery assistance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      24/7 Support
                    </h3>
                    <p className="text-sm text-slate-500">
                      Help whenever you need it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Fast Assistance
                    </h3>
                    <p className="text-sm text-slate-500">
                      Quick response from recovery specialists.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Trusted Team
                    </h3>
                    <p className="text-sm text-slate-500">
                      Professional email support you can trust.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* ===========================
                RIGHT ENQUIRY FORM
            =========================== */}

            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <div className="mb-8 flex items-center gap-4">

                <div className="rounded-2xl bg-blue-100 p-3">
                  <Mail className="h-7 w-7 text-blue-600" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Start Your Enquiry
                  </h2>

                  <p className="text-sm text-slate-500">
                    Complete the form below and we'll contact you shortly.
                  </p>
                </div>

              </div>

              {enquirySubmitted && (
                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <p>We've received your enquiry. Our team will contact you shortly.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setEnquirySubmitted(false)}
                      className="ml-4 rounded px-2 py-1 text-sm font-semibold text-green-700 hover:bg-green-100"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleHeroSubmit}
                className="space-y-5"
              >
                                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={heroForm.name}
                    onChange={handleHeroChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={heroForm.email}
                    onChange={handleHeroChange}
                    placeholder="Enter your email address"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </div>

                {/* Contact removed as requested */}

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={heroForm.phone}
                    onChange={handleHeroChange}
                    placeholder=""
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={heroForm.message}
                    onChange={handleHeroChange}
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </div>

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}

                  {!loading && (
                    <ArrowRight className="h-5 w-5" />
                  )}
                </button>

                <p className="text-center text-xs text-slate-500">
                  Your information is secure and will never be shared.
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>
            {/* =========================
          RECOVERY MODAL
      ========================= */}
      {showRecoveryModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={closeRecoveryModal}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeRecoveryModal}
              className="absolute right-5 top-5 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-8 text-center">

                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900">
                    Start Recovery
                  </h2>

                  <p className="mt-3 text-slate-600">
                    Complete this form and one of our recovery specialists
                    will contact you as soon as possible.
                  </p>

                </div>

                <form
                  onSubmit={handleRecoverySubmit}
                  className="space-y-5"
                >

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={recoveryForm.name}
                      onChange={handleRecoveryChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={recoveryForm.email}
                      onChange={handleRecoveryChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={recoveryForm.phone}
                      onChange={handleRecoveryChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                      required
                    />
                  </div>

                  {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
                  >
                    {loading
                      ? "Submitting..."
                      : "Submit Recovery Request"}

                    {!loading && (
                      <ArrowRight className="h-5 w-5" />
                    )}
                  </button>

                </form>

              </>
            ) : (
              <>
                <div className="text-center">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>

                  <h2 className="mt-6 text-3xl font-bold text-slate-900">
                    Thank You!
                  </h2>

                  <p className="mt-4 text-slate-600">
                    Your recovery request has been submitted successfully.
                    Our team will contact you shortly.
                  </p>

                  <div className="mt-8 space-y-4">
                    <p className="text-sm text-center text-slate-500">Need instant help?</p>
                    <a
                      href="tel:+18555290095"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                    >
                      <Phone className="h-5 w-5" />
                      Call Now • +1 (855) 529-0095
                    </a>

               <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
  <h3 className="text-2xl font-bold text-slate-900">
    Need Instant Help?
  </h3>

  <p className="mt-2 text-slate-600">
    Connect with one of our support specialists now.
  </p>

  <div className="mt-6">
    <div
      data-id="4216f8efb1"
      className="livechat_button"
    >
      <a
        href="https://www.livechat.com/utm-builder/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_19881537"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-xl"
      >
        💬 Chat With Support
      </a>
    </div>
  </div>
</div>
                    <button
                      type="button"
                      onClick={closeRecoveryModal}
                      className="w-full rounded-xl border border-slate-300 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      Close
                    </button>

                  </div>

                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
              