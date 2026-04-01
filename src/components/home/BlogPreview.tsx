"use client";

import React from "react";
import Link from "next/link";
import { COPY } from "@/constants/copy";
import { Section } from "@/components/ui/Section";
import { ArrowRight, BookOpen } from "lucide-react";

export const BlogPreview = () => {
  return (
    <Section className="bg-black relative pt-32 pb-48 overflow-hidden">
       {/* Ambient Glow */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-rose-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 reveal-up gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-rose-500 mb-6 block italic">
              CONTRACORRIENTE
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-black leading-[1.1] tracking-tight text-white mb-8">
              Blog & <span className="text-rose-600 italic">Insights</span>.
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              {COPY.blog.description}
            </p>
          </div>
          
          <Link 
            href="/blog" 
            className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-black text-rose-600 hover:underline decoration-rose-600 decoration-2 underline-offset-8"
          >
            VER TODO EL CONTENIDO <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
          {COPY.blog.posts.map((post, i) => (
            <div 
              key={i} 
              className="group cursor-pointer reveal-up"
            >
              <div className="mb-10 text-white font-heading font-medium tracking-wider flex items-center gap-4">
                <span className="text-[10px] py-1 px-3 border border-rose-600/30 text-rose-600 rounded-full lowercase tracking-widest">{post.category}</span>
                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest italic">{post.date}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-black mb-8 leading-tight group-hover:text-rose-600 transition-colors duration-500">
                {post.title}
              </h3>

              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-bold text-zinc-700 group-hover:text-white transition-all transform group-hover:translate-x-2">
                Leer artículo completo <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
