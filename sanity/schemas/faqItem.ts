import { defineType, defineField } from 'sanity'

export const faqItemSchema = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Pregunta',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Respuesta',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Precios', value: 'precios' },
          { title: 'Envíos', value: 'envios' },
          { title: 'Personalización', value: 'personalizacion' },
          { title: 'Fabricación', value: 'fabricacion' },
          { title: 'Mayoristas', value: 'mayoristas' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
  },
})
