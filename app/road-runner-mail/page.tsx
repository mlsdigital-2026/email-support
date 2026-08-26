import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadrunner Mail",
  description:
    "Roadrunner Mail login, password recovery, account setup, IMAP, POP3, SMTP settings, and troubleshooting guides.",
  alternates: {
    canonical: "https://sbcmailme.com/road-runner-mail",
  },
  openGraph: {
    title: "Roadrunner Mail",
    description:
      "Roadrunner Mail login, password recovery, account setup, IMAP, POP3, SMTP settings, and troubleshooting guides.",
    url: "https://sbcmailme.com/road-runner-mail",
  },
  twitter: {
    title: "Roadrunner Mail",
    description:
      "Roadrunner Mail login, password recovery, account setup, IMAP, POP3, SMTP settings, and troubleshooting guides.",
  },
};

export default function RoadRunnerMailPage() {
  return (
    <iframe
      src="/road-runner-mail/index.html"
      title="Roadrunner Email Login & Support Portal"
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