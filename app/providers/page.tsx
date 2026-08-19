import ProvidersHero from "@/components/providers/ProvidersHero";
import ProvidersGrid from "@/components/providers/ProvidersGrid";
import CTA from "@/components/home/CTA";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";


export default function ProvidersPage() {
  return (
    <main className="bg-white ">
           <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://sbcmailme.com",
          },
          {
            name: "Providers",
            url: "https://sbcmailme.com/providers",
          },
        ]}
      />
      
      <ProvidersHero />

      <section className="mx-auto max-w-7xl px-6">
        <ProvidersGrid />
      </section>

      <CTA />
    </main>
  );
}
// import Hero from "@/components/home/Hero";
// import Stats from "@/components/home/Stats";

// import ProvidersHero from "@/components/providers/ProvidersHero";
// import ProvidersGrid from "@/components/providers/ProvidersGrid";
// import HomeSections from "@/components/home/HomeSections";

// export default function ProvidersPage() {
//   return (
//     <main className="bg-white">

//       <Hero />

//       <Stats />

//       <ProvidersHero />

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <ProvidersGrid />
//       </section>

//       <HomeSections />

//     </main>
//   );
// }