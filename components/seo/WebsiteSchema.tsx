export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SBC Mail Me",
    alternateName: "SBCMailMe",
    url: "https://sbcmailme.com",
    description:
      "Educational guides for email account recovery, password reset, email security, and troubleshooting.",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "SBC Mail Me",
    },
//     potentialAction: {
//       "@type": "SearchAction",
//       target: "https://sbcmailme.com/search?q={search_term_string}",
//       "query-input": "required name=search_term_string",
//     },
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