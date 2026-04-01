import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";

export default function LegalPage() {
  return (
    <main className="bg-black min-h-screen text-zinc-400">
      <Navbar />
      <Section className="pt-40">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-heading font-black text-white mb-12">Aviso Legal y Privacidad</h1>
          <div className="space-y-8 font-light leading-relaxed">
            <p>De acuerdo con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, informamos que esta web pertenece a Inteligencia Sevilla.</p>
            <h2 className="text-2xl text-white font-bold mt-12">Protección de Datos</h2>
            <p>En cumplimiento con lo dispuesto en el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, los datos de carácter personal que nos facilite a través de los formularios de esta web serán tratados de forma confidencial.</p>
            <h3 className="text-xl text-white font-bold mt-8">Finalidad</h3>
            <p>Los datos recogidos a través de los formularios de contacto se utilizarán exclusivamente para gestionar su solicitud de información y/o auditoría gratuita detallada en la web.</p>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
