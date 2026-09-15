import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comcast Email Setup & Configuration Help",
  description:
    "Get help with Comcast email setup and configuration, including account settings and common issues when accessing your email.",
  alternates: {
    canonical: "https://sbcmailme.com/comcast",
  },
  openGraph: {
    title: "Comcast Email Setup & Configuration Help | SBC Mail Me",
    description:
      "Get help with Comcast email setup and configuration, including account settings and common issues when accessing your email.",
    url: "https://sbcmailme.com/comcast",
  },
  twitter: {
    title: "Comcast Email Setup & Configuration Help | SBC Mail Me",
    description:
      "Get help with Comcast email setup and configuration, including account settings and common issues when accessing your email.",
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