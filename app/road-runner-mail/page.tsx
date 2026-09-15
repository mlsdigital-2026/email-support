import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RoadRunner Email Setup & Configuration Help",
  description:
    "Get help with RoadRunner email setup and configuration, including account settings and common issues accessing your email.",
  alternates: {
    canonical: "https://sbcmailme.com/road-runner-mail",
  },
  openGraph: {
    title: "RoadRunner Email Setup & Configuration Help",
    description:
      "Get help with RoadRunner email setup and configuration, including account settings and common issues accessing your email.",
    url: "https://sbcmailme.com/road-runner-mail",
  },
  twitter: {
    title: "RoadRunner Email Setup & Configuration Help",
    description:
      "Get help with RoadRunner email setup and configuration, including account settings and common issues accessing your email.",
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