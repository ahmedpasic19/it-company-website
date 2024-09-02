import About from '@/layout/about'
import Clients from '@/layout/clients'
import Features from '@/layout/features'
import GlobalClients from '@/layout/global-clients'
import HeroSection from '@/layout/hero-section'
import Portofolio from '@/layout/portofolio'
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
      <GlobalClients />
    </main>
  )
}
