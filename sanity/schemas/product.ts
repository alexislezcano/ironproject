import { defineType, defineField } from 'sanity'

export const productSchema = defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del producto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Descripción corta',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'longDescription',
      title: 'Descripción completa',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO: Título',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO: Descripción',
      type: 'text',
      rows: 2,
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subcategory',
      title: 'Subcategoría',
      type: 'string',
      options: {
        list: [
          { title: 'Mesas', value: 'mesas' },
          { title: 'Escritorios', value: 'escritorios' },
          { title: 'Estantes', value: 'estantes' },
          { title: 'Percheros', value: 'percheros' },
          { title: 'Exhibidores', value: 'exhibidores' },
          { title: 'Estanterías', value: 'estanterias' },
          { title: 'Fondos', value: 'fondos' },
          { title: 'Arcos', value: 'arcos' },
          { title: 'Estructuras', value: 'estructuras' },
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
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
      name: 'pricing',
      title: 'Precios',
      type: 'object',
      fields: [
        { name: 'basePrice', title: 'Precio base (ARS)', type: 'number' },
        { name: 'customPrice', title: 'Precio a medida (ARS)', type: 'number' },
        { name: 'wholesalePrice', title: 'Precio mayorista (ARS)', type: 'number' },
        { name: 'wholesaleMinQty', title: 'Mínimo mayorista (unidades)', type: 'number' },
        {
          name: 'currency',
          title: 'Moneda',
          type: 'string',
          initialValue: 'ARS',
          options: { list: [{ title: 'ARS', value: 'ARS' }] },
        },
      ],
    }),
    defineField({
      name: 'variants',
      title: 'Variantes',
      type: 'object',
      fields: [
        {
          name: 'sizes',
          title: 'Talles / Medidas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Etiqueta', type: 'string' },
                { name: 'value', title: 'Valor', type: 'string' },
                { name: 'priceModifier', title: 'Modificador de precio', type: 'number' },
              ],
            },
          ],
        },
        {
          name: 'colors',
          title: 'Colores',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Etiqueta', type: 'string' },
                { name: 'value', title: 'Valor', type: 'string' },
                { name: 'hex', title: 'Color hex', type: 'string' },
              ],
            },
          ],
        },
        {
          name: 'materials',
          title: 'Materiales',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Etiqueta', type: 'string' },
                { name: 'value', title: 'Valor', type: 'string' },
                { name: 'priceModifier', title: 'Modificador de precio', type: 'number' },
              ],
            },
          ],
        },
        {
          name: 'customSizeAvailable',
          title: '¿Medida personalizada disponible?',
          type: 'boolean',
          initialValue: true,
        },
      ],
    }),
    defineField({
      name: 'specs',
      title: 'Especificaciones',
      type: 'object',
      fields: [
        {
          name: 'materials',
          title: 'Materiales utilizados',
          type: 'array',
          of: [{ type: 'string' }],
        },
        { name: 'dimensions', title: 'Dimensiones', type: 'string' },
        { name: 'weight', title: 'Peso', type: 'string' },
        { name: 'leadTime', title: 'Tiempo de fabricación', type: 'string' },
        { name: 'shippingAvailable', title: '¿Envío disponible?', type: 'boolean' },
      ],
    }),
    defineField({
      name: 'flags',
      title: 'Flags',
      type: 'object',
      fields: [
        { name: 'isFeatured', title: '¿Destacado?', type: 'boolean', initialValue: false },
        { name: 'isNew', title: '¿Nuevo?', type: 'boolean', initialValue: false },
        { name: 'isCustomizable', title: '¿Personalizable?', type: 'boolean', initialValue: true },
        { name: 'isWholesaleAvailable', title: '¿Disponible mayorista?', type: 'boolean', initialValue: false },
        { name: 'isActive', title: '¿Activo?', type: 'boolean', initialValue: true },
      ],
    }),
    defineField({
      name: 'relatedProducts',
      title: 'Productos relacionados',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'images.0.asset',
    },
  },
})
