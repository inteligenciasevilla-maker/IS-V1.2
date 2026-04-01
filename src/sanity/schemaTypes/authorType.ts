import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Autor / Equipo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Cargo / Especialidad",
      type: "string",
      description: "Ej. Especialista en Automatización, Consultor AI",
    }),
    defineField({
      name: "image",
      title: "Fotografía",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Biografía corta",
      type: "text",
      rows: 4,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
