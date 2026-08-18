"use client";

import { useState } from "react";
import {
  X,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface RecoveryModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RecoveryModal({
  open,
  onClose,
}: RecoveryModalProps) {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const closeRecoveryModal = () => {
    setShowSuccess(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
    });

    onClose();
  };

  if (!open) return null;

  return (
    <>
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4">
    <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

      <button
        type="button"
        onClick={closeRecoveryModal}
        className="absolute right-5 top-5 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="p-8 md:p-10">

        {!showSuccess ? (
          <>
            <div className="mb-8 text-center">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>

              <h2 className="text-3xl font-bold text-slate-900">
                Start Recovery Request
              </h2>

              <p className="mt-3 text-slate-600">
                Complete the form below and our recovery team will contact you shortly.
              </p>

            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                setLoading(true);

                try {
                  const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      ...formData,
                      subject: "Recovery Request",
                      message: "Recovery form submitted.",
                    }),
                  });

                  if (!response.ok) {
                    throw new Error("Submission failed");
                  }

                  setShowSuccess(true);
                } catch (err) {
                  console.error(err);
                } finally {
                  setLoading(false);
                }
              }}
              className="space-y-5"
            >

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>
                            <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Recovery Request
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

            </form>

          </>
       ) : (
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

    <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">

      <h3 className="text-lg font-semibold text-slate-900">
        Need Instant Help?
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        Connect with our support team using any of the options below.
      </p>

      <div className="mt-6 space-y-4">

        <a
          href="tel:+18555290095"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          <Phone className="h-5 w-5" />
          Call Now • +1 (855) 529-0095
        </a>

        <div
          data-id="4216f8efb1"
          className="livechat_button flex justify-center rounded-xl bg-slate-900 px-6 py-4"
        >
          <a
            href="https://www.livechat.com/utm-builder/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_19881537"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white"
          >
            Start Live Chat
          </a>
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

  </div>
)}

      </div>
    </div>
  </div>
</>
  );
}