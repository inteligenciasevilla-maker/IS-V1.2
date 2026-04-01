import React from "react";
import { client } from "@/sanity/lib/client";
import { caseStudiesQuery } from "@/sanity/lib/queries";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Éxito | Inteligencia Sevilla",
  description: "Descubre cómo hemos transformado empresas mediante inteligencia artificial y automatización estratégica.",
};

export const revalidate = 60;

export default async function CasosDeExitoPage() {
  const cases = await client.fetch(caseStudiesQuery);

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      <Section className="pt-40 pb-20 overflow-visible relative">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto reveal-up">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-rose-500 mb-6 block">
              IMPACTO REAL
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 leading-none tracking-tight text-white">
              Casos de <span className="text-rose-600 italic">Éxito</span>.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Empresas reales que ya cuentan con una ventaja competitiva gracias a la tecnología.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pb-32">
        <div className="container mx-auto px-6">
          {cases.length === 0 ? (
            <div className="text-center py-20 text-zinc-500 font-light">
              <p>Aún estamos documentando nuestros casos de éxito.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {cases.map((caseStudy: any) => (
                <Link 
                  href={`/casos-de-exito/${caseStudy.slug}`} 
                  key={caseStudy._id}
                  className="group flex flex-col reveal-up bg-zinc-900/40 border border-white/5 rounded-[3rem] overflow-hidden hover:border-rose-600/30 transition-all duration-700"
                >
                  <div className="relative w-full aspect-[16/9] bg-zinc-900 overflow-hidden">
                    {caseStudy.coverImage && (
                      <Image
                        src={urlFor(caseStudy.coverImage).format("webp").width(800).url()}
                        alt={caseStudy.title}
                        fill
                        className="object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-10 left-10 text-white">
                       <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-rose-500 mb-2 italic">CLIENTE</p>
                       <h3 className="text-3xl md:text-4xl font-heading font-black">{caseStudy.clientName}</h3>
                    </div>
                  </div>

                  <div className="p-10 flex flex-col flex-1 h-full">
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-6">
                       {caseStudy.sector && (
                          <span className="bg-white/5 px-3 py-1.5 rounded-full border border-white/10">{caseStudy.sector}</span>
                       )}
                    </div>

                    <h4 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-rose-600 transition-colors leading-tight">
                      {caseStudy.title}
                    </h4>
                    
                    {caseStudy.summary && (
                      <p className="text-zinc-400 font-light leading-relaxed mb-10 flex-1">
                        {caseStudy.summary}
                      </p>
                    )}

                    {/* Best Metric Preview if available */}
                    {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                       <div className="bg-white/5 p-6 rounded-3xl border border-white/5 flex items-center gap-6 mb-10">
                          <div className="h-12 w-12 shrink-0 rounded-full bg-rose-600/20 flex items-center justify-center text-rose-600">
                             <TrendingUp size={20} />
                          </div>
                          <div>
                             <p className="text-2xl font-black font-heading tracking-tight text-rose-500">{caseStudy.metrics[0].value}</p>
                             <p className="text-xs uppercase tracking-widest font-bold text-zinc-500 mt-1">{caseStudy.metrics[0].label}</p>
                          </div>
                       </div>
                    )}

                    <div className="mt-auto border-t border-white/5 pt-6 flex justify-between items-center w-full">
                      <span className="text-xs uppercase tracking-[0.2em] font-bold text-rose-600 group-hover:text-white transition-colors">
                        Ver análisis completo 
                      </span>
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-rose-600 text-zinc-500 group-hover:text-white transition-all transform group-hover:translate-x-2">
                         <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
