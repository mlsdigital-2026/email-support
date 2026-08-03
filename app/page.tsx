import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ServicesPreview from "@/components/home/ServicePreview";
import Providers from "@/components/home/Providers";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import ServicePreview from "@/components/home/ServicePreview";


export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicePreview />
      <Providers />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}