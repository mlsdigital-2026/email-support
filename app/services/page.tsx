import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import CTA from "@/components/home/CTA";

export default function ServicesPage() {
  return (
    <main className="bg-white pt-20">

      <ServicesHero />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <ServicesGrid />
      </section>

      <CTA />

    </main>
  );
}
// import Hero from "@/components/home/Hero";
// import Stats from "@/components/home/Stats";

// import ServicesHero from "@/components/services/ServicesHero";
// import ServicesGrid from "@/components/services/ServicesGrid";
// import HomeSections from "@/components/home/HomeSections";

// export default function ServicesPage() {
//   return (
//     <main className="bg-white">

//       <Hero />

//       <Stats />

//       <ServicesHero />

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <ServicesGrid />
//       </section>

//       <HomeSections />

//     </main>
//   );
// }