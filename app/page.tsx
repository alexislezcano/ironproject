import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import CategoryGrid from '@/components/sections/CategoryGrid'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import BenefitsSection from '@/components/sections/BenefitsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import B2BSection from '@/components/sections/B2BSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTA from '@/components/sections/FinalCTA'
import { mockProducts, mockProjects, mockFAQs } from '@/lib/mockData'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Iron Project | Muebles y Estructuras de Hierro Artesanales',
  description:
    'Fabricamos muebles y estructuras de hierro a medida. Mesas, escritorios, arcos para eventos, exhibidores. Entrega en 5-7 días a todo el país.',
}

export default async function HomePage() {
  // In production, fetch from Sanity. Falls back to mock data automatically.
  const featuredProducts = mockProducts.filter((p) => p.flags.isFeatured)
  const projects = mockProjects
  const faqs = mockFAQs.slice(0, 3)

  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts products={featuredProducts} />
      <BenefitsSection />
      <ProjectsSection projects={projects} />
      <B2BSection />
      <FAQSection items={faqs} />
      <FinalCTA />
    </>
  )
}
