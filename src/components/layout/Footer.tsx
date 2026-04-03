import React from "react";
import Link from "next/link";
import { COPY } from "@/constants/copy";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 overflow-hidden border-t border-white/5 relative">
       {/* ThIA Avatar - Sitting on the Footer text */}
      <div className="absolute -top-10 right-20 w-32 h-32 md:w-48 md:h-48 z-20 pointer-events-none animate-float-avatar opacity-80 hidden lg:block">
        <Image 
          src="/thia/thIA-boy-IS-inteligencia-sevila-saluda-sentado.png" 
          alt="ThIA Sentado - Avatar Inteligencia Sevilla" 
          fill 
          className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]" 
        />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-rose-600/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <Link href="/" className="flex flex-col mb-8">
              <span className="font-heading font-bold text-2xl tracking-tighter leading-none">
                INTELIGENCIA <span className="text-rose-600">SEVILLA</span>
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">
                Consultora Experta en <span className="text-white font-bold">IA</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm max-w-[240px]">
              {COPY.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-heading text-lg font-bold mb-6 text-white uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-4">
              <li><Link href="/servicios/desarrollo" className="text-zinc-500 hover:text-rose-500 transition-colors text-sm">Desarrollo</Link></li>
              <li><Link href="/servicios/marketing" className="text-zinc-500 hover:text-rose-500 transition-colors text-sm">Marketing</Link></li>
              <li><Link href="/servicios/ia" className="text-zinc-500 hover:text-rose-500 transition-colors text-sm">IA</Link></li>
              <li><Link href="/servicios/automatizaciones" className="text-zinc-500 hover:text-rose-500 transition-colors text-sm">Automatizaciones</Link></li>
              <li><Link href="/servicios/formacion" className="text-zinc-500 hover:text-rose-500 transition-colors text-sm">Formación</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-heading text-lg font-bold mb-6 text-white uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-4">
              <li><Link href="/contacto" className="text-zinc-500 hover:text-rose-500 transition-colors text-sm">Auditoría Gratuita</Link></li>
              <li><Link href="/contacto" className="text-zinc-500 hover:text-rose-500 transition-colors text-sm">Contacto</Link></li>
              <li><Link href="/legal" className="text-zinc-500 hover:text-rose-500 transition-colors text-sm">Aviso Legal</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-heading text-lg font-bold mb-6 text-white uppercase tracking-wider">Ubícanos</h4>
            <ul className="space-y-4">
              <li className="text-zinc-500 text-sm">Astronomía 1, Torre 2, 8º Mod 2, Sevilla - Torres Torneo</li>
              <li className="text-zinc-500 text-sm">info@inteligenciasevilla.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
            {COPY.footer.copy}
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] uppercase tracking-widest text-zinc-700 italic">Expertise Strategic</span>
          </div>
        </div>
      </div>

      {/* Extreme Visual: Giant background text */}
      <div className="absolute -bottom-20 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <h2 className="text-[150px] lg:text-[250px] font-black text-white whitespace-nowrap -mb-10 font-heading tracking-tighter">
          INTELIGENCIA SEVILLA INTELIGENCIA SEVILLA
        </h2>
      </div>
    </footer>
  );
};
