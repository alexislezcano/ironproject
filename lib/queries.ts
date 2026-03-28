export const PRODUCTS_QUERY = `*[_type == "product" && flags.isActive == true] | order(flags.isFeatured desc, _createdAt desc) {
  _id,
  "slug": slug.current,
  name,
  shortDescription,
  category,
  subcategory,
  "images": images[]{
    "url": asset->url,
    alt,
    order,
    "lqip": asset->metadata.lqip
  },
  pricing,
  flags,
  tags
}`

export const FEATURED_PRODUCTS_QUERY = `*[_type == "product" && flags.isActive == true && flags.isFeatured == true][0...8] {
  _id,
  "slug": slug.current,
  name,
  shortDescription,
  category,
  "images": images[0..1]{
    "url": asset->url,
    alt,
    "lqip": asset->metadata.lqip
  },
  pricing,
  flags
}`

export const PRODUCT_BY_SLUG_QUERY = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  "slug": slug.current,
  sku,
  name,
  shortDescription,
  longDescription,
  seoTitle,
  seoDescription,
  category,
  subcategory,
  tags,
  "images": images[]{
    "url": asset->url,
    alt,
    order,
    "lqip": asset->metadata.lqip
  },
  pricing,
  variants,
  specs,
  flags,
  "relatedProducts": relatedProducts[]->{
    "slug": slug.current,
    name,
    "image": images[0]{ "url": asset->url, alt },
    pricing
  }
}`

export const PRODUCTS_BY_CATEGORY_QUERY = `*[_type == "product" && flags.isActive == true && category == $category] | order(flags.isFeatured desc, _createdAt desc) {
  _id,
  "slug": slug.current,
  name,
  shortDescription,
  category,
  subcategory,
  "images": images[0..1]{
    "url": asset->url,
    alt,
    "lqip": asset->metadata.lqip
  },
  pricing,
  flags,
  tags
}`

export const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  "slug": slug.current,
  title,
  description,
  category,
  isB2B,
  clientName,
  "images": images[]{
    "url": asset->url,
    alt,
    "lqip": asset->metadata.lqip
  }
}`

export const FAQ_QUERY = `*[_type == "faqItem"] | order(category asc, _createdAt asc) {
  _id,
  question,
  answer,
  category
}`

export const SETTINGS_QUERY = `*[_type == "settings"][0] {
  whatsappNumber,
  heroTitle,
  heroSubtitle,
  siteTitle,
  siteDescription
}`

export const BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  "slug": slug.current,
  title,
  excerpt,
  "coverImage": coverImage{
    "url": asset->url,
    alt,
    "lqip": asset->metadata.lqip
  },
  tags,
  publishedAt
}`

export const BLOG_POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  "slug": slug.current,
  title,
  excerpt,
  content,
  "coverImage": coverImage{
    "url": asset->url,
    alt,
    "lqip": asset->metadata.lqip
  },
  seoTitle,
  seoDescription,
  tags,
  publishedAt
}`
