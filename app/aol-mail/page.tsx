import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AOL Mail Setup & Configuration Help",
  description:
    "Get help with AOL mail setup, account configuration and common email settings so you can access and use your AOL account.",
  alternates: {
    canonical: "https://sbcmailme.com/aol-mail",
  },
};

export default function AolMailPage() {
  return (
    <iframe
      src="/aol-mail/index.html"
      title="AOL Mail Setup & Configuration Help | SBC Mail Me"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        background: "#ffffff",
      }}
    />
  );
}