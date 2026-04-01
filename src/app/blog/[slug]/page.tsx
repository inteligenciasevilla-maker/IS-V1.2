import React from "react";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery } from "@/sanity/lib/queries";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { RichText } from "@/components/ui/sanity/RichText";
import { Metadata } from "next";

export const revalidate = 60;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug });
  if (!post) return {};

  return {
    title: post.seoTitle || `${post.title} | Inteligencia Sevilla Blog`,
    description: post.seoDescription || post.excerpt || "Insight tecnológico de Inteligencia Sevilla",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug });

  if (!post) {
    return (
      <main className="bg-black min-h-screen">
        <Navbar />
        <Section className="pt-40 text-center">
          <h1 className="text-4xl text-white mb-8 font-heading font-black">Artículo no encontrado.</h1>
          <Link href="/blog" className="text-rose-600 hover:underline">
            Volver al blog
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
          <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-zinc-500 hover:text-white mb-12 transition-colors">
            <ArrowLeft size={14} /> Volver a insights
          </Link>

          <header className="max-w-4xl mx-auto mb-16 text-center">
             {post.categories && post.categories.length > 0 && (
                <div className="flex items-center justify-center gap-4 mb-8">
                  {post.categories.map((cat: string, idx: number) => (
                      <span key={idx} className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-rose-500 font-bold">
                        <Tag size={12} /> {cat}
                      </span>
                  ))}
                </div>
             )}

            <h1 className="text-4xl md:text-7xl font-heading font-black mb-12 leading-[1.1] tracking-tight text-white">
              {post.title}
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 border-y border-white/5 py-8">
              {post.author && (
                <div className="flex items-center gap-4">
                  {post.author.image ? (
                     <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                       <Image src={urlFor(post.author.image).width(100).url()} alt={post.author.name} fill className="object-cover" />
                     </div>
                  ) : (
                     <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold">
                       {post.author.name.charAt(0)}
                     </div>
                  )}
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">{post.author.name}</p>
                    {post.author.role && <p className="text-[10px] text-zinc-600 font-light italic">{post.author.role}</p>}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-10 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-rose-600" />
                  {new Date(post.publishedAt || new Date()).toLocaleDateString("es-ES", { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                {post.readTime && (
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-rose-600" />
                    {post.readTime} min lectura
                  </div>
                )}
              </div>
            </div>
          </header>

          {post.coverImage && (
            <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[2.35/1] rounded-[3rem] overflow-hidden mb-24 border border-white/5 shadow-2xl shadow-rose-900/10">
              <Image
                src={urlFor(post.coverImage).format("webp").width(1200).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <article className="max-w-3xl mx-auto">
            {post.body ? (
               <RichText value={post.body} />
            ) : (
               <p className="text-center text-zinc-500">El contenido no está disponible temporalmente.</p>
            )}

            {/* Author Bio Footer */}
            {post.author && post.author.bio && (
               <div className="mt-24 p-10 rounded-[2rem] bg-zinc-900/40 border border-white/5 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  {post.author.image && (
                     <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-rose-600/30">
                        <Image src={urlFor(post.author.image).width(200).url()} alt={post.author.name} fill className="object-cover" />
                     </div>
                  )}
                  <div>
                     <p className="text-[10px] uppercase font-bold tracking-widest text-rose-500 mb-2">SOBRE EL AUTOR</p>
                     <h4 className="text-xl font-heading font-black text-white mb-4">{post.author.name}</h4>
                     <p className="text-zinc-400 font-light leading-relaxed">{post.author.bio}</p>
                  </div>
               </div>
            )}
          </article>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
