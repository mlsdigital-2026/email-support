import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Providers from "@/components/home/Providers";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import ServicePreview from "@/components/home/ServicePreview";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebsiteSchema from "@/components/seo/WebsiteSchema";

export default function Home() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://sbcmailme.com",
          },
        ]}
      />
            <OrganizationSchema />
            <WebsiteSchema/>


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