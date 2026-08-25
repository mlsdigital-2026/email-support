"use client";

import Header from "./Header";
import Hero from "./Hero";
import QuickHelp from "./QuickHelp";
import Troubleshooting from "./Troubleshooting";
import Requirements from "./Requirements";
import LiveChat from "../../components/layout/LiveChat";

export default function SBCGlobalMailPage() {
  return (
    <>
      <LiveChat />

      <Header />

      <main>
        <Hero />
        <QuickHelp />
        <Troubleshooting />
        <Requirements />
      </main>
    </>
  );
}