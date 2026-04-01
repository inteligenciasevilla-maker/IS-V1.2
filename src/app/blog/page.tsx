import React from "react";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Inteligencia Sevilla",
  description: "Artículos, noticias y reflexiones estratégicas sobre la inteligencia artificial y su impacto en las empresas.",
};

// Next.js config for caching
export const revalidate = 60; // revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Blog */}
      <Section className="pt-40 pb-20 overflow-visible relative">
        <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-rose-600/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto reveal-up">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-rose-500 mb-6 block">
              CONTRACORRIENTE
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 leading-none tracking-tight">
              Blog & <span className="text-rose-600 italic">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Análisis profundo sobre tecnología real para empresas que quieren resultados reales.
            </p>
          </div>
        </div>
      </Section>

      {/* Blog Listing */}
      <Section className="pb-32">
        <div className="container mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-zinc-500 font-light">
              <p>No hay artículos publicados aún. Vuelve pronto.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-20">
              {posts.map((post: any) => (
                <Link 
                  href={`/blog/${post.slug}`} 
                  key={post._id}
                  className="group flex flex-col reveal-up"
                >
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 border border-white/5 bg-zinc-900">
                    {post.coverImage && (
                      <Image
                        src={urlFor(post.coverImage).format("webp").width(800).url()}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                      />
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                    
                    {/* Category Tags */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="absolute top-6 left-6 flex gap-2">
                        {post.categories.map((cat: string, idx: number) => (
                          <span key={idx} className="bg-rose-600/90 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-6">
                      <div className="flex items-center gap-2">
                         <Calendar size={14} className="text-rose-600" />
                         {new Date(post.publishedAt || new Date()).toLocaleDateString("es-ES", { day: 'numeric', month: 'long', year: 'numeric' })}
                      </div>
                      {post.readTime && (
                         <div className="flex items-center gap-2">
                            <Clock size={14} className="text-rose-600" />
                            {post.readTime} min
                         </div>
                      )}
                    </div>

                    <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-4 group-hover:text-rose-600 transition-colors leading-tight tracking-tight">
                      {post.title}
                    </h2>
                    
                    {post.excerpt && (
                      <p className="text-zinc-400 font-light leading-relaxed mb-8 flex-1">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                           <User size={14} />
                         </div>
                         <span className="text-xs text-zinc-300 font-medium">{post.authorName || "Equipo IS"}</span>
                      </div>
                      <div className="text-xs uppercase tracking-[0.2em] font-bold text-rose-600 inline-flex items-center group-hover:translate-x-2 transition-transform">
                        Leer <ArrowRight size={14} className="ml-2" />
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
