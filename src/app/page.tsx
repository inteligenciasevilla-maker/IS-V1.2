import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FreeAudit } from "@/components/home/FreeAudit";
import { HowWeWork } from "@/components/home/HowWeWork";
import { FinalCTA } from "@/components/home/FinalCTA";

import { SuccessCases } from "@/components/home/SuccessCases";
import { BlogPreview } from "@/components/home/BlogPreview";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Manifesto />
      <FreeAudit />
      <ServicesOverview />
      <SuccessCases />
      <HowWeWork />
      <BlogPreview />
      <FinalCTA />
      <Footer />
    </main>
  );
}

