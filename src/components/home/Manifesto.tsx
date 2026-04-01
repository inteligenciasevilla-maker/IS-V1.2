"use client";

import React from "react";
import { COPY } from "@/constants/copy";
import { Section } from "@/components/ui/Section";

export const Manifesto = () => {
  return (
    <Section className="bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-up">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-rose-600 mb-6 block">
              POSICIONAMIENTO
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight tracking-tight">
              {COPY.manifesto.title}
            </h2>
          </div>
          
          <div className="reveal-up">
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
              {COPY.manifesto.content}
            </p>
            
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/5">
              {[
                "Consultora estratégica",
                "Auditora tecnológica",
                "Partner de implementación",
                "Crecimiento empresarial"
              ].map((tag, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-600"></div>
                  <span className="text-xs uppercase tracking-widest font-bold text-zinc-500 italic">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
