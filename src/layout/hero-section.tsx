import HeroImages from '@/components/hero/hero-images'
import HeroTitle from '@/components/hero/hero-title'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-screen bg-gradient-to-tr pt-14 sm:pt-0 from-main-dark to-main-blue/30 flex flex-col sm:flex-row justify-envely items-center'>
      <div className='w-full flex justify-center items-center p-10'>
        <HeroTitle />
      </div>
      <div className='w-full flex justify-center items-center p-10'>
        <HeroImages />
      </div>
    </div>
  )
}

export default HeroSection
