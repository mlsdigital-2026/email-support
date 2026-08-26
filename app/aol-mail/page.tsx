import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AOL Mail",
  description:
    "AOL Mail login, password recovery, account setup, IMAP, POP3, SMTP settings and troubleshooting.",
  alternates: {
    canonical: "https://sbcmailme.com/aol-mail",
  },
};

export default function AolMailPage() {
  return (
    <iframe
      src="/aol-mail/index.html"
      title="AOL Mail Login & Support Portal"
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