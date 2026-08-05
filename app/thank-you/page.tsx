"use client";

import Script from "next/script";

export default function ThankYouPage() {
  return (
    <>
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
      >
        {`
          if (
            window.location.hostname === "sbcmailme.com" ||
            window.location.hostname === "www.sbcmailme.com"
          ) {
            gtag('event', 'conversion', {
              send_to: 'AW-18372150847/yvzhCMk4d0wcEL-Mw7hE'
            });
          }
        `}
      </Script>

      <main>
        <h1>Thank You!</h1>
        <p>Your request has been submitted successfully.</p>
      </main>
    </>
  );
}