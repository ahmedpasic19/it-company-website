import About from '@/layout/about'
import Clients from '@/layout/clients'
import Features from '@/layout/features'
import HeroSection from '@/layout/hero-section'
import Portofolio from '@/layout/portofolio'
import PricingSection from '@/layout/pricing-section'
import Team from '@/layout/team'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <About />
      <Team />
      <Portofolio />
      <Clients />
      <PricingSection />
    </main>
  )
}
