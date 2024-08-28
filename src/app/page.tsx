import About from '@/layout/about'
import Features from '@/layout/features'
import HeroSection from '@/layout/hero-section'
import Portofolio from '@/layout/portofolio'
import Team from '@/layout/team'

export default function Home() {
  return (
    <main className=''>
      <HeroSection />
      <Features />
      <About />
      <Team />
      <Portofolio />
    </main>
  )
}
