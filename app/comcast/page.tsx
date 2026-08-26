import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comcast Mail",
  description:
    "Comcast Mail login, password recovery, email account setup, IMAP, POP3, SMTP settings, and troubleshooting guides.",
  alternates: {
    canonical: "https://sbcmailme.com/comcast",
  },
  openGraph: {
    title: "Comcast Mail",
    description:
      "Comcast Mail login, password recovery, email account setup, IMAP, POP3, SMTP settings, and troubleshooting guides.",
    url: "https://sbcmailme.com/comcast",
  },
  twitter: {
    title: "Comcast Mail",
    description:
      "Comcast Mail login, password recovery, email account setup, IMAP, POP3, SMTP settings, and troubleshooting guides.",
  },
};

export default function ComcastPage() {
  return (
    <iframe
      src="/comcast/index.html"
      title="Comcast Email Login & Support Portal"
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