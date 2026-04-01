import { defineField, defineType } from "sanity";

export const caseStudyType = defineType({
  name: "caseStudy",
  title: "Caso de Éxito",
  type: "document",
  groups: [
    { name: "content", title: "Resumen y Planteamiento" },
    { name: "details", title: "Implementación Detallada" },
    { name: "metrics", title: "Configuración y Resultados" },
    { name: "seo", title: "Ajustes SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Título del Caso",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
      description: "Ej: Automatización Inteligente en Logística Industrial",
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
      name: "clientName",
      title: "Cliente / Empresa",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sector",
      title: "Sector Industrial",
      type: "string",
      group: "content",
      description: "Ej: Retail, E-commerce, Logística...",
    }),
    defineField({
      name: "summary",
      title: "Resumen Principal",
      type: "text",
      rows: 3,
      group: "content",
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
      name: "challenge",
      title: "El Desafío Original",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      group: "details",
    }),
    defineField({
      name: "solution",
      title: "Nuestra Solución (Implementación)",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      group: "details",
    }),
    defineField({
      name: "results",
      title: "Impacto y Resultados",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      group: "details",
    }),
    defineField({
      name: "metrics",
      title: "Métricas Clave",
      type: "array",
      group: "metrics",
      description: "Destaca los números reales del impacto.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Valor (Ej: +45%)",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "label",
              title: "Etiqueta (Ej: Productividad)",
              type: "string",
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: "value",
              subtitle: "label",
            },
          },
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de Publicación",
      type: "datetime",
      group: "metrics",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "featured",
      title: "Caso Destacado",
      type: "boolean",
      group: "metrics",
      initialValue: false,
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Título",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Descripción",
      type: "text",
      rows: 3,
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "clientName",
      subtitle: "title",
      media: "coverImage",
    },
  },
});
