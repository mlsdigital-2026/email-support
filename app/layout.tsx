import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LiveChat from "@/components/layout/LiveChat";

export const metadata: Metadata = {
  metadataBase: new URL("https://sbcmailme.com"),

  title: {
    default: "SBC Mail Me",
    template: "%s | SBC Mail Me",
  },

  description:
    "Educational guides about email password recovery, email security, account protection, email setup, IMAP, POP3, SMTP, and email best practices.",

  keywords: [
    "email recovery",
    "email password reset",
    "mail password",
    "email login",
    "email security",
    "email account recovery",
    "email setup",
    "IMAP",
    "POP3",
    "SMTP",
    "email configuration",
    "password recovery",
    "secure email",
    "email troubleshooting",
  ],

  authors: [
    {
      name: "SBC Mail Me",
      url: "https://sbcmailme.com",
    },
  ],

  creator: "SBC Mail Me",
  publisher: "SBC Mail Me",
  applicationName: "SBC Mail Me",
  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://sbcmailme.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sbcmailme.com",
    siteName: "SBC Mail Me",
    title: "SBC Mail Me",
    description:
      "Educational guides about email password recovery, email security, account protection, email setup, IMAP, POP3, SMTP, and email best practices.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SBC Mail Me",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SBC Mail Me",
    description:
      "Educational guides about email password recovery, email security, account protection, email setup, IMAP, POP3, SMTP, and email best practices.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KWGCC8RJ');
          `}
        </Script>
      </head>

      <body className="bg-white text-slate-900 antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KWGCC8RJ"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-18YL7M74QY"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-18YL7M74QY');
          `}
        </Script>

        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18372150847"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18372150847');
          `}
        </Script>

        <Navbar />

        <main>{children}</main>

        <Footer />

        <LiveChat />
      </body>
    </html>
  );
}