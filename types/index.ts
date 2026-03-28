export type ProductCategory = 'hogar' | 'eventos' | 'comercial'
export type ProductSubcategory =
  | 'mesas'
  | 'escritorios'
  | 'estantes'
  | 'percheros'
  | 'exhibidores'
  | 'estanterias'
  | 'fondos'
  | 'arcos'
  | 'estructuras'

export interface ProductVariantSize {
  label: string
  value: string
  priceModifier: number
}

export interface ProductVariantColor {
  label: string
  value: string
  hex?: string
}

export interface ProductVariantMaterial {
  label: string
  value: string
  priceModifier: number
}

export interface ProductPricing {
  basePrice: number
  customPrice: number
  wholesalePrice: number
  wholesaleMinQty: number
  currency: 'ARS'
}

export interface ProductSpecs {
  materials: string[]
  dimensions: string
  weight?: string
  leadTime: string
  shippingAvailable: boolean
}

export interface ProductFlags {
  isFeatured: boolean
  isNew: boolean
  isCustomizable: boolean
  isWholesaleAvailable: boolean
  isActive: boolean
}

export interface ProductImage {
  url: string
  alt: string
  order: number
  lqip?: string
}

export interface Product {
  id: string
  slug: string
  sku: string
  name: string
  shortDescription: string
  longDescription?: any // PortableText
  seoTitle: string
  seoDescription: string
  category: ProductCategory
  subcategory: ProductSubcategory
  tags: string[]
  images: ProductImage[]
  pricing: ProductPricing
  variants: {
    sizes: ProductVariantSize[]
    colors: ProductVariantColor[]
    materials: ProductVariantMaterial[]
    customSizeAvailable: boolean
  }
  specs: ProductSpecs
  flags: ProductFlags
  relatedProducts: string[]
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  slug: ProductCategory
  name: string
  description: string
  image: ProductImage
  subcategories: { label: string; value: string }[]
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  category: ProductCategory
  images: ProductImage[]
  isB2B: boolean
  clientName?: string
  createdAt: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'precios' | 'envios' | 'personalizacion' | 'fabricacion' | 'mayoristas'
}

export interface Testimonial {
  id: string
  name: string
  role?: string
  text: string
  productBought?: string
  rating: number
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: any
  coverImage: ProductImage
  seoTitle: string
  seoDescription: string
  tags: string[]
  publishedAt: string
}

export type WhatsAppMessageType = 'product' | 'custom' | 'wholesale' | 'general' | 'rescue'

export interface WhatsAppContext {
  type: WhatsAppMessageType
  productName?: string
  category?: string
  variant?: string
  qty?: number
}

export interface FilterState {
  categoria: ProductCategory | null
  subcategoria: string | null
  precioMin: number | null
  precioMax: number | null
  material: string | null
  amedida: boolean
  mayorista: boolean
  ordenar: 'destacados' | 'precio_asc' | 'precio_desc' | 'nuevo'
}
