"use client";

import React from "react";
import { COPY } from "@/constants/copy";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const FinalCTA = () => {
  return (
    <Section className="bg-[#050505] overflow-hidden relative">
       {/* Extreme background visual: Large flowing gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[120%] bg-rose-600/5 blur-[160px] rounded-full pointer-events-none select-none"></div>

      {/* ThIA Avatar - Waving Bottom Left */}
      <div className="absolute bottom-0 left-10 w-40 h-40 md:w-60 md:h-60 z-20 pointer-events-none animate-float-avatar opacity-95">
        <Image 
          src="/thia/thIA-boy-IS-inteligencia-sevila-saluda.png" 
          alt="ThIA Saludando - Avatar Inteligencia Sevilla" 
          fill 
          className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-32 text-center">
        <div className="max-w-4xl mx-auto reveal-up">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-rose-500 mb-8 block">
            ES TU MOMENTO
          </span>
          <h2 className="text-fluid-h1 font-heading font-black mb-12 leading-none tracking-tighter text-white">
            Transforma el futuro de tu <span className="text-rose-600 italic">empresa</span> hoy mismo.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            Descubre en una auditoría gratuita cómo puede ayudarte la tecnología a mejorar y crecer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button variant="primary" size="xl" href="/contacto" className="px-16 py-6 text-xl">
              {COPY.common.cta_audit}
            </Button>
            <Button variant="ghost" size="xl" href="/contacto" className="text-zinc-500 hover:text-white">
               Información personalizada
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
