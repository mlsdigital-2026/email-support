export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SBCMailMe",
    url: "https://sbcmailme.com",
  logo: "https://sbcmailme.com/images/logo.png",
    description:
      "SBCMailMe provides educational guides and resources for email account recovery, login troubleshooting, password assistance, and account security.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-855-529-0095",
      contactType: "Customer Support",
      availableLanguage: "English",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}