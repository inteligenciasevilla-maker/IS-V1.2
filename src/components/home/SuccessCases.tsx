"use client";

import React from "react";
import { COPY } from "@/constants/copy";
import { Section } from "@/components/ui/Section";
import { TrendingUp, ArrowUpRight } from "lucide-react";

export const SuccessCases = () => {
  return (
    <Section className="bg-[#050505] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-rose-600/[0.02] -skew-x-12 translate-x-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 reveal-up">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-rose-600 mb-6 block">
            RESULTADOS REALES
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight tracking-tight text-white">
            Transformación con <span className="text-rose-600 italic">impacto</span> real.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COPY.cases.items.map((item, i) => (
            <div 
              key={i} 
              className="group reveal-up bg-zinc-900/30 p-10 rounded-[3rem] border border-white/5 hover:border-rose-600/30 transition-all duration-700 flex flex-col h-full relative"
            >
              <div className="absolute top-8 right-8 text-rose-600 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                <ArrowUpRight size={24} />
              </div>
              
              <div className="mb-10 text-white group-hover:translate-x-2 transition-transform duration-500">
                 <p className="text-xs uppercase tracking-widest text-rose-500 font-bold mb-4 italic">CLIENTE: {item.client}</p>
                 <h3 className="text-2xl font-heading font-bold mb-6">Desafío: {item.challenge}</h3>
              </div>

              <div className="mb-12">
                 <div className="w-8 h-[1px] bg-zinc-700 mb-6"></div>
                 <p className="text-zinc-400 font-light leading-relaxed">
                    Solución: {item.solution}
                 </p>
              </div>

              <div className="mt-auto p-6 rounded-[2rem] bg-white/5 border border-white/5 flex items-center gap-4 group-hover:bg-rose-600 group-hover:border-rose-600 transition-all duration-700">
                 <div className="h-12 w-12 rounded-full bg-rose-600/20 flex items-center justify-center text-rose-600 group-hover:bg-white/20 group-hover:text-white transition-all">
                    <TrendingUp size={20} />
                 </div>
                 <span className="text-lg font-heading font-black text-rose-500 group-hover:text-white transition-colors tracking-tight">
                    {item.result}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
