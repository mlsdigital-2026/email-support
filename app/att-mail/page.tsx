import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AT&T Email Login & Setup Help",
  description:
    "Need AT&T email login or setup help? Get guidance for signing in, configuring your account and resolving common password issues.",
  alternates: {
    canonical: "https://sbcmailme.com/att-mail",
  },
  openGraph: {
    title: "AT&T Email Login & Setup Help | SBC Mail Me",
    description:
      "Need AT&T email login or setup help? Get guidance for signing in, configuring your account and resolving common password issues.",
    url: "https://sbcmailme.com/att-mail",
  },
  twitter: {
    title: "AT&T Email Login & Setup Help | SBC Mail Me",
    description:
      "Need AT&T email login or setup help? Get guidance for signing in, configuring your account and resolving common password issues.",
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