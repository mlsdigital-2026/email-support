'use client';

import React from 'react';
// ... rest of your page.tsx code


import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ServicePreview from "@/components/home/ServicePreview";
import Providers from "@/components/home/Providers";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicePreview />
      <Providers />
    </>
  );
}