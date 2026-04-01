"use client";

import React from "react";
import { COPY } from "@/constants/copy";
import { Section } from "@/components/ui/Section";

export const HowWeWork = () => {
  return (
    <Section className="bg-black relative pt-32 pb-48">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 reveal-up text-center max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-rose-600 mb-6 block italic">
            METODOLOGÍA
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black leading-[1.1] tracking-tight">
            El método Estratégico
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
           {/* Visual line connecting steps */}
          <div className="absolute top-[2.5rem] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rose-600/20 to-transparent hidden lg:block"></div>

          {COPY.howWeWork.steps.map((step, i) => (
            <div 
              key={i} 
              className="group reveal-up flex flex-col relative"
            >
              <div className="mb-8 relative">
                <div className="h-20 w-20 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-4xl font-heading font-black text-rose-600 outline outline-transparent group-hover:outline-rose-600/30 outline-[12px] transition-all duration-500 relative z-10">
                  {i + 1}
                </div>
              </div>

              <h3 className="text-xl font-heading font-black mb-4 text-white group-hover:text-rose-600 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-zinc-500 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
