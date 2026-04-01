"use client";

import React from "react";
import Link from "next/link";
import { COPY } from "@/constants/copy";
import { Section } from "@/components/ui/Section";
import { Code, Megaphone, Cpu, Zap, GraduationCap, ArrowRight } from "lucide-react";

const icons = {
  desarrollo: Code,
  marketing: Megaphone,
  ia: Cpu,
  automatizaciones: Zap,
  formacion: GraduationCap,
};

export const ServicesOverview = () => {
  return (
    <Section className="bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="mb-24 reveal-up text-center max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-rose-600 mb-6 block italic">
            SOLUCIONES ESTRATÉGICAS
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight tracking-tight">
            Nuestras especialidades
          </h2>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            Abordamos el crecimiento de tu empresa desde cinco pilares fundamentales, todos integrados bajo una misma visión estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COPY.services.items.map((service, i) => {
            const Icon = icons[service.id as keyof typeof icons];
            return (
              <Link 
                key={service.id} 
                href={`/servicios/${service.id}`}
                className="group reveal-up bg-zinc-900/10 p-10 rounded-[3rem] border border-white/5 hover:border-rose-600/30 transition-all duration-500 flex flex-col relative overflow-hidden"
              >
                 {/* Visual Glow on hover */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-rose-600/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>

                <div className="h-16 w-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center text-white mb-10 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 border border-white/5">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-rose-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors mb-auto leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center text-xs uppercase tracking-[0.2em] font-bold text-zinc-600 group-hover:text-white transition-all">
                  Saber más <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
