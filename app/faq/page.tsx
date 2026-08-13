import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQHero from "@/components/faq/FAQHero";
import FAQList from "@/components/faq/FAQList";
import CTA from "@/components/home/CTA";

export default function FAQPage() {
  return (
    <main className="bg-white pt-20">
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://sbcmailme.com",
          },
          {
            name: "FAQ",
            url: "https://sbcmailme.com/faq",
          },
        ]}
      />

      <FAQHero />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <FAQList />
      </section>

      <CTA />
    </main>
  );
}
// import Hero from "@/components/home/Hero";
// import Stats from "@/components/home/Stats";

// import FAQHero from "@/components/faq/FAQHero";
// import FAQList from "@/components/faq/FAQList";
// import HomeSections from "@/components/home/HomeSections";

// export default function FAQPage() {
//   return (
//     <main className="bg-white">

//       <Hero />

//       <Stats />

//       <FAQHero />

//       <section className="mx-auto max-w-5xl px-6 py-20">
//         <FAQList />
//       </section>

//       <HomeSections />

//     </main>
//   );
// }