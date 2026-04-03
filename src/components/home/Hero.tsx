"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { COPY } from "@/constants/copy";
import { Button } from "@/components/ui/Button";
import gsap from "gsap";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(".hero-bg", {
        scale: 1.2,
        duration: 2.5,
        ease: "power2.out",
      })
      .from(headlineRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power4.out",
      }, "-=2")
      .from(subheadlineRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      }, "-=0.8")
      .from(ctasRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.6");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero_bg.png"
          alt="Inteligencia Sevilla AI Concept"
          fill
          className="hero-bg object-cover opacity-60 mix-blend-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse mr-2"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
              Consultora experta en <span className="text-white font-bold">IA</span>
            </span>
          </div>
          
          <h1 
            ref={headlineRef}
            className="text-fluid-h1 font-heading font-black mb-8 leading-[1.05] tracking-tighter"
          >
            {COPY.hero.headline.split(" ").map((word, i) => (
              <span key={i} className={word.toLowerCase().includes("ayuda") || word.toLowerCase().includes("crecer") ? "text-rose-600" : "text-white"}>
                {word}{" "}
              </span>
            ))}
          </h1>

          <p 
            ref={subheadlineRef}
            className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {COPY.hero.subheadline}
          </p>

          <div ref={ctasRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary" size="xl" href="/contacto">
              {COPY.common.cta_audit}
            </Button>
            <Button variant="outline" size="xl" href="/servicios">
              {COPY.common.cta_services}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 z-20">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>

      {/* ThIA Avatar - WhatsApp CTA */}
      <a 
        href="https://chat.whatsapp.com/EqnzD3PaYx54rfS4fG4Rx1?mode=gi_t"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 right-10 w-48 h-48 md:w-64 md:h-64 z-30 pointer-events-auto animate-float-avatar opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-300 hidden sm:block cursor-pointer"
      >
        <Image 
          src="/thia/thia-cta-whatsapp-hero-girl.png" 
          alt="Contacta por WhatsApp con Inteligencia Sevilla" 
          fill 
          className="object-contain drop-shadow-[0_10px_30px_rgba(225,29,72,0.3)]" 
        />
      </a>

      {/* Ambient glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-rose-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[0%] -right-[10%] w-[30%] h-[30%] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </div>
  );
};
