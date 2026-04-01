"use client";

import React from "react";
import Image from "next/image";
import { COPY } from "@/constants/copy";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export const FreeAudit = () => {
  return (
    <Section className="bg-black relative">
       {/* Visual element: Vertical lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="container h-full mx-auto px-6 border-x border-white/20 relative">
          <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-white/20"></div>
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/20"></div>
          <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-white/20"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-zinc-900/40 p-8 md:p-20 rounded-[4rem] border border-white/5 backdrop-blur-3xl overflow-hidden group hover:border-rose-600/30 transition-all duration-700">
          {/* Abstract Glow in card */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-600/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-rose-600/20 transition-all duration-700"></div>

          {/* ThIA Avatar - Investigating */}
          <div className="absolute -top-16 -left-16 w-40 h-40 md:w-56 md:h-56 z-20 pointer-events-none animate-float-avatar opacity-95 hidden lg:block">
            <Image 
              src="/thia/thIA-boy-IS-inteligencia-sevila-investiga.png" 
              alt="ThIA Investigando - Avatar Inteligencia Sevilla" 
              fill 
              className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]" 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <div className="h-12 w-12 rounded-2xl bg-rose-600/20 flex items-center justify-center text-rose-600 mb-8 border border-rose-600/10">
                <CheckCircle size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 leading-tight tracking-tight">
                {COPY.audit.title}
              </h2>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-10">
                {COPY.audit.description}
              </p>
              <Button variant="primary" size="xl" href="/contacto">
                {COPY.common.cta_audit}
              </Button>
            </div>

            <div className="reveal-up space-y-8">
              <div className="grid grid-cols-1 gap-6">
                {COPY.audit.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-default">
                    <div className="mt-1 w-2 h-2 rounded-full bg-rose-600 shrink-0"></div>
                    <span className="text-lg text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 italic text-zinc-500 font-medium">
                No se trata de aplicar tecnología por aplicar. Se trata de identificar qué tiene sentido para tu empresa y ejecutarlo bien.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
