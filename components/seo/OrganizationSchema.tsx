export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SBC Mail Me",
    url: "https://sbcmailme.com",
    logo: "https://sbcmailme.com/logo.png",
    email: "info@sbcmailme.com",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}