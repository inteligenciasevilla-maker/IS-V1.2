"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { COPY } from "@/constants/copy";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function ContactoPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      <Section className="pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center reveal-up">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-rose-500 mb-6 block">
              DÉJANOS AYUDARTE
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight tracking-tight">
              Solicita tu <span className="text-rose-600">auditoría</span> gratuita.
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
              Analizaremos tu empresa durante 3 horas sin coste alguno para identificar dónde la tecnología y la IA pueden marcar la diferencia.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="reveal-up space-y-12">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-8 text-white">Información de contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email</p>
                      <p className="text-white">hola@inteligenciasevilla.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Teléfono</p>
                      <p className="text-white">+34 900 000 000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Ubicación</p>
                      <p className="text-white">Sevilla, España</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/5 blur-[60px] rounded-full"></div>
                <p className="text-zinc-400 font-light italic relative z-10">
                  "No vendemos tecnología. Vendemos soluciones que funcionan y tienen sentido para tu cuenta de resultados."
                </p>
              </div>
            </div>

            <div className="reveal-up">
              <form className="space-y-6 bg-zinc-900/20 p-8 md:p-12 rounded-[3rem] border border-white/5 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-2">Nombre completo</label>
                    <input 
                      type="text" 
                      placeholder="Tu nombre" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-rose-600/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-2">Empresa</label>
                    <input 
                      type="text" 
                      placeholder="Nombre de tu empresa" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-rose-600/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-2">Email corporativo</label>
                  <input 
                    type="email" 
                    placeholder="email@empresa.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-rose-600/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-2">¿Cómo podemos ayudarte?</label>
                  <textarea 
                    rows={4} 
                    placeholder="Cuéntanos brevemente qué necesitas mejorar..." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-rose-600/50 transition-all resize-none"
                  ></textarea>
                </div>

                <Button variant="primary" size="xl" className="w-full py-6">
                  Enviar solicitud <Send size={18} className="ml-2" />
                </Button>

                <p className="text-[10px] text-zinc-600 text-center uppercase tracking-widest">
                  Al enviar aceptas nuestra política de privacidad.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Section>
      
      <Footer />
    </main>
  );
}
