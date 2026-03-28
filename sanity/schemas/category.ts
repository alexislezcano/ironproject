import { defineType, defineField } from 'sanity'

export const categorySchema = defineType({
  name: 'category',
  title: 'Categoría',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Imagen de portada',
      type: 'object',
      fields: [
        { name: 'asset', title: 'Imagen', type: 'image', options: { hotspot: true } },
        { name: 'alt', title: 'Texto alternativo', type: 'string' },
      ],
    }),
    defineField({
      name: 'subcategories',
      title: 'Subcategorías',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Etiqueta', type: 'string' },
            { name: 'value', title: 'Valor (slug)', type: 'string' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image.asset',
    },
  },
})
