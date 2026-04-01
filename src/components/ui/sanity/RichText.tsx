"use client";

import React from "react";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-[400px] my-12 rounded-3xl overflow-hidden border border-white/5">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Imagen del artículo"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-heading font-black text-white mt-16 mb-8 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-heading font-bold text-white mt-12 mb-6 tracking-tight">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-xl leading-relaxed text-zinc-400 font-light mb-8">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-rose-600 pl-6 my-10 italic text-2xl text-zinc-300 font-light">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-xl leading-relaxed text-zinc-400 font-light mb-8 space-y-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-xl leading-relaxed text-zinc-400 font-light mb-8 space-y-4">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-white opacity-80">{children}</em>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a href={value.href} rel={rel} className="text-rose-600 hover:text-rose-500 underline underline-offset-4 decoration-rose-600/30 transition-colors">
          {children}
        </a>
      );
    },
  },
};

interface RichTextProps {
  value: any[];
}

export const RichText = ({ value }: RichTextProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <PortableText value={value} components={components} />
    </div>
  );
};
