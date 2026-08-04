import ProvidersHero from "@/components/providers/ProvidersHero";
import ProvidersGrid from "@/components/providers/ProvidersGrid";
import CTA from "@/components/home/CTA";

export default function ProvidersPage() {
  return (
    <main className="bg-white pt-20">
      <ProvidersHero />

      <section className="mx-auto max-w-7xl px-6 py-20">
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