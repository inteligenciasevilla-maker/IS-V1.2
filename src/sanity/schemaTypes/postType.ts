import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Artículo de Blog",
  type: "document",
  groups: [
    { name: "content", title: "Contenido Principal" },
    { name: "metrics", title: "Métricas y Visibilidad" },
    { name: "seo", title: "Configuración SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "seo",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Extracto Breve",
      type: "text",
      rows: 3,
      group: "content",
      description: "Resumen corto que aparece en la tarjeta del blog.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Imagen de Portada",
      type: "image",
      group: "content",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de Publicación",
      type: "datetime",
      group: "metrics",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categorías Relacionadas",
      type: "array",
      group: "content",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "featured",
      title: "Destacar Artículo",
      type: "boolean",
      group: "metrics",
      description: "Márcalo si quieres que este post resalte sobre otros.",
      initialValue: false,
    }),
    defineField({
      name: "readTime",
      title: "Tiempo de Lectura (Minutos)",
      type: "number",
      group: "metrics",
    }),
    defineField({
      name: "body",
      title: "Contenido del Artículo",
      type: "array",
      group: "content",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "Título SEO",
      type: "string",
      group: "seo",
      description: "Sobrescribe el título de la página para los motores de búsqueda (Opcional).",
    }),
    defineField({
      name: "seoDescription",
      title: "Descripción SEO",
      type: "text",
      rows: 3,
      group: "seo",
      description: "Meta descripción para motores de búsqueda (Opcional).",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "coverImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `Por ${author}` };
    },
  },
});
