import { defineType, defineField } from 'sanity'

export const settingsSchema = defineType({
  name: 'settings',
  title: 'Configuración del sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Título del sitio',
      type: 'string',
      initialValue: 'Iron Project',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Descripción del sitio',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Número de WhatsApp',
      type: 'string',
      description: 'Formato: 5491100000000 (sin + ni espacios)',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero: Título principal',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero: Subtítulo',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'socialInstagram',
      title: 'Instagram (URL completa)',
      type: 'url',
    }),
    defineField({
      name: 'socialFacebook',
      title: 'Facebook (URL completa)',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
    },
  },
})
