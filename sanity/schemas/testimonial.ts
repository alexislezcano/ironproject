import { defineType, defineField } from 'sanity'

export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rol / Empresa (opcional)',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Testimonio',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productBought',
      title: 'Producto comprado (opcional)',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Calificación (1-5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'text',
    },
  },
})
