import { defineType, defineField } from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'Proyecto Realizado',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Hogar', value: 'hogar' },
          { title: 'Eventos', value: 'eventos' },
          { title: 'Comercial', value: 'comercial' },
        ],
      },
    }),
    defineField({
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'asset', title: 'Imagen', type: 'image', options: { hotspot: true } },
            { name: 'alt', title: 'Texto alternativo', type: 'string' },
            { name: 'order', title: 'Orden', type: 'number' },
          ],
        },
      ],
    }),
    defineField({
      name: 'isB2B',
      title: '¿Proyecto B2B (negocio)?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'clientName',
      title: 'Nombre del cliente (opcional)',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'images.0.asset',
    },
  },
})
