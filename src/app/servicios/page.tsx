"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Section } from "@/components/ui/Section";

export default function ServiciosPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Section className="pt-40">
        <div className="container mx-auto px-6 text-center reveal-up">
           <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-rose-500 mb-6 block">
              PORTAFOLIO ESTRATÉGICO
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 leading-tight tracking-tight">
              Todos nuestros <span className="text-rose-600 italic">servicios</span>.
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
              Implementación de extremo a extremo para elevar el nivel tecnológico de tu empresa.
            </p>
        </div>
      </Section>
      <ServicesOverview />
      <Footer />
    </main>
  );
}
