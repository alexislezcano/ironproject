import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ironproject.com'

export function buildMetadata({
  title,
  description,
  image,
  path = '',
}: {
  title: string
  description: string
  image?: string
  path?: string
}): Metadata {
  const url = `${BASE_URL}${path}`
  const ogImage = image ?? `${BASE_URL}/og-default.jpg`

  return {
    title: `${title} | Iron Project`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Iron Project`,
      description,
      url,
      siteName: 'Iron Project',
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Iron Project`,
      description,
      images: [ogImage],
    },
  }
}
