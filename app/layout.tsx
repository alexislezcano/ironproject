import type { Metadata } from 'next'
import { Inter, Stack_Sans_Notch } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const stackSansNotch = Stack_Sans_Notch({
  subsets: ['latin'],
  variable: '--font-stack',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Iron Project | Estructuras y Muebles de Hierro',
    template: '%s | Iron Project',
  },
  description:
    'Fabricación artesanal de muebles y estructuras de hierro. Mesas, escritorios, exhibidores, arcos para eventos. A medida, envíos a todo el país.',
  keywords: ['muebles hierro', 'estructura hierro', 'industrial', 'a medida', 'mesa hierro', 'exhibidor hierro'],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Iron Project',
  },
  robots: { index: true, follow: true },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Iron Project',
  description: 'Fabricación artesanal de muebles y estructuras de hierro.',
  '@id': 'https://ironproject.com',
  url: 'https://ironproject.com',
  telephone: '+5491100000000',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressCountry: 'AR' },
  sameAs: ['https://www.instagram.com/ironproject'],
}

const themeScript = `(function(){try{var t=localStorage.getItem('ip-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${stackSansNotch.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  )
}
