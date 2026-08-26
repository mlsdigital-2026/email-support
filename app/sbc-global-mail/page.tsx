import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SBC Global Mail",
  description:
    "SBC Global Mail login, password recovery, account setup, email security, IMAP, POP3, SMTP settings, and troubleshooting guides.",
  alternates: {
    canonical: "https://sbcmailme.com/sbc-global-mail",
  },
  openGraph: {
    title: "SBC Global Mail",
    description:
      "SBC Global Mail login, password recovery, account setup, email security, IMAP, POP3, SMTP settings, and troubleshooting guides.",
    url: "https://sbcmailme.com/sbc-global-mail",
    siteName: "SBC Mail Me",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SBC Global Mail",
    description:
      "SBC Global Mail login, password recovery, account setup, email security, IMAP, POP3, SMTP settings, and troubleshooting guides.",
  },
};

export default function Page() {
  return (
    <iframe
      src="/sbc-global-mail/index.html"
      title="SBC Global Mail Login & Support Portal"
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