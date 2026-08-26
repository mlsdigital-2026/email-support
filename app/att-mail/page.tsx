import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AT&T Mail",
  description:
    "AT&T Mail login, password recovery, account setup, IMAP, POP3, SMTP settings, and troubleshooting guides.",
  alternates: {
    canonical: "https://sbcmailme.com/att-mail",
  },
  openGraph: {
    title: "AT&T Mail",
    description:
      "AT&T Mail login, password recovery, account setup, IMAP, POP3, SMTP settings, and troubleshooting guides.",
    url: "https://sbcmailme.com/att-mail",
  },
  twitter: {
    title: "AT&T Mail",
    description:
      "AT&T Mail login, password recovery, account setup, IMAP, POP3, SMTP settings, and troubleshooting guides.",
  },
};

export default function AttMailPage() {
  return (
    <iframe
      src="/att-mail/index.html"
      title="AT&T Email Login & Support Portal"
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