import React from "react";
import { client } from "@/sanity/lib/client";
import { caseStudyBySlugQuery } from "@/sanity/lib/queries";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ArrowLeft, TrendingUp, Key, Zap, ChartBar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { RichText } from "@/components/ui/sanity/RichText";
import { Metadata } from "next";

export const revalidate = 60;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = await client.fetch(caseStudyBySlugQuery, { slug: params.slug });
  if (!caseStudy) return {};

  return {
    title: caseStudy.seoTitle || `Caso de Éxito: ${caseStudy.clientName} | Inteligencia Sevilla`,
    description: caseStudy.seoDescription || caseStudy.summary || `Descubre cómo ayudamos a ${caseStudy.clientName}.`,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const caseStudy = await client.fetch(caseStudyBySlugQuery, { slug: params.slug });

  if (!caseStudy) {
    return (
      <main className="bg-black min-h-screen">
        <Navbar />
        <Section className="pt-40 text-center">
          <h1 className="text-4xl text-white mb-8 font-heading font-black">Caso de éxito no encontrado.</h1>
          <Link href="/casos-de-exito" className="text-rose-600 hover:underline">
            Ver todos los casos
          </Link>
        </Section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen selection:bg-rose-500/30">
      <Navbar />

      <Section className="pt-40 pb-20 overflow-visible relative">
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/casos-de-exito" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-zinc-500 hover:text-white mb-12 transition-colors">
            <ArrowLeft size={14} /> Volver a Casos
          </Link>

          <header className="max-w-5xl mx-auto mb-16 text-center">
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-rose-500 mb-6 block italic">CLIENTE: {caseStudy.clientName}</span>
            <h1 className="text-4xl md:text-7xl font-heading font-black mb-8 leading-[1.05] tracking-tight text-white">
              {caseStudy.title}
            </h1>
            <p className="text-xl md:text-2xl font-light text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              {caseStudy.summary}
            </p>
          </header>

          {caseStudy.coverImage && (
            <div className="relative w-full max-w-6xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden mb-24 border border-white/5 shadow-2xl shadow-rose-900/5">
              <Image
                src={urlFor(caseStudy.coverImage).format("webp").width(1600).url()}
                alt={caseStudy.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Metrics Grid */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
             <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                {caseStudy.metrics.map((metric: any, i: number) => (
                   <div key={i} className="bg-zinc-900/50 p-10 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center text-center">
                     <p className="text-5xl lg:text-6xl font-heading font-black text-rose-500 mb-4 tracking-tighter">{metric.value}</p>
                     <p className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400">{metric.label}</p>
                   </div>
                ))}
             </div>
          )}

          <article className="max-w-3xl mx-auto grid gap-24">
             {/* The Challenge */}
             {caseStudy.challenge && (
               <section>
                 <div className="flex items-center gap-4 mb-8">
                   <div className="h-12 w-12 rounded-full bg-rose-600/10 text-rose-600 flex items-center justify-center">
                      <Key size={24} />
                   </div>
                   <h2 className="text-3xl font-heading font-black text-white">El Desafío</h2>
                 </div>
                 <RichText value={caseStudy.challenge} />
               </section>
             )}

             {/* The Solution */}
             {caseStudy.solution && (
               <section>
                 <div className="flex items-center gap-4 mb-8">
                   <div className="h-12 w-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center">
                      <Zap size={24} />
                   </div>
                   <h2 className="text-3xl font-heading font-black text-white">Nuestra Solución</h2>
                 </div>
                 <RichText value={caseStudy.solution} />
               </section>
             )}

             {/* The Results */}
             {caseStudy.results && (
               <section>
                 <div className="flex items-center gap-4 mb-8">
                   <div className="h-12 w-12 rounded-full bg-white/10 text-white flex items-center justify-center">
                      <ChartBar size={24} />
                   </div>
                   <h2 className="text-3xl font-heading font-black text-white">Impacto y Resultados</h2>
                 </div>
                 <RichText value={caseStudy.results} />
               </section>
             )}
          </article>
        </div>
      </Section>

      {/* Global CTA */}
      <Section className="py-32 bg-rose-600 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
           <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 tracking-tight">¿Tienes un desafío similar?</h2>
           <p className="text-xl text-rose-100 font-light mb-12 max-w-2xl mx-auto">
              Hablemos sobre cómo podemos aplicar una estrategia tecnológica parecida en tu modelo de negocio.
           </p>
           <Link href="/contacto" className="inline-flex items-center gap-4 px-10 py-5 bg-white text-rose-600 rounded-full font-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              Solicitar Auditoría <ArrowRight size={18} />
           </Link>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
