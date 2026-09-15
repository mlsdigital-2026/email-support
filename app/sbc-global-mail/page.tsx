import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SBCGlobal Email Password Reset & Account Help",
  description:
    "Forgot your SBCGlobal email password? Get guidance for password resets, account access and common SBCGlobal email issues.",
  alternates: {
    canonical: "https://sbcmailme.com/sbc-global-mail",
  },
  openGraph: {
    title: "SBCGlobal Email Password Reset & Account Help",
    description:
      "Forgot your SBCGlobal email password? Get guidance for password resets, account access and common SBCGlobal email issues.",
    url: "https://sbcmailme.com/sbc-global-mail",
    siteName: "SBC Mail Me",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SBCGlobal Email Password Reset & Account Help",
    description:
      "Forgot your SBCGlobal email password? Get guidance for password resets, account access and common SBCGlobal email issues.",
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