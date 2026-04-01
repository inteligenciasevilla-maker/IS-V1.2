"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { LucideIcon, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ServiceLayoutProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  outcomes: string[];
}

export const ServiceLayout = ({ id, title, description, icon: Icon, outcomes }: ServiceLayoutProps) => {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Service */}
      <Section className="pt-40 pb-20 overflow-visible relative">
         {/* Subtle pattern background for subpages */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-rose-600/5 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal-up">
            <div className="inline-flex h-20 w-20 rounded-[2.5rem] bg-rose-600 text-white items-center justify-center mb-10 shadow-lg shadow-rose-600/20">
              <Icon size={40} strokeWidth={1.5} />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 leading-none tracking-tight">
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              {description}
            </p>

            <div className="flex justify-center">
              <Button variant="primary" size="xl" href="/contacto">
                Solicitar auditoría de {title}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Main Content */}
      <Section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="reveal-up">
              <h2 className="text-3xl font-heading font-black mb-8 text-white uppercase tracking-wider italic opacity-80 underline decoration-rose-600 decoration-4 underline-offset-8">
                Lo que conseguimos
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-6 p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all group">
                    <div className="mt-1 h-2 w-2 rounded-full bg-rose-600 shrink-0 group-hover:scale-150 transition-transform duration-500"></div>
                    <span className="text-xl text-zinc-300 font-medium">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-up space-y-12">
               <div>
                  <h3 className="text-2xl font-heading font-bold mb-8 text-white">Por qué elegirnos</h3>
                  <p className="text-lg text-zinc-400 leading-relaxed font-light mb-8">
                    En Inteligencia Sevilla no somos meros ejecutores. Somos estrategas que entienden el impacto del {title.toLowerCase()} en la cuenta de resultados de tu negocio. 
                  </p>
                  <p className="text-lg text-zinc-400 leading-relaxed font-light mb-12">
                    Nuestra metodología combina rigor técnico con un enfoque obsesivo por la rentabilidad y la eficiencia operativa.
                  </p>
               </div>

               <div className="p-12 rounded-[4rem] bg-rose-600 relative overflow-hidden group border border-rose-400/20">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 blur-[80px] rounded-full group-hover:scale-110 transition-all duration-700"></div>
                  <h4 className="text-2xl font-heading font-black text-white mb-6 relative z-10">
                    ¿Hablamos hoy?
                  </h4>
                  <p className="text-white/80 mb-10 relative z-10 font-medium">
                    Analizamos tu empresa gratis. Es hora de dejar de oír hablar de tecnología y empezar a ver resultados reales.
                  </p>
                  <Link 
                    href="/contacto" 
                    className="inline-flex items-center text-sm uppercase tracking-[0.3em] font-black text-white hover:underline decoration-white decoration-2 underline-offset-8 relative z-10"
                  >
                    RESERVAR AUDITORÍA <ArrowRight size={16} className="ml-2" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
};
