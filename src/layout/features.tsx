import FeaturesList from '@/components/features-list'
import React from 'react'

const Features = () => {
  return (
    <section className='min-h-screen py-20'>
      <div className='w-full flex flex-col justify-center items-center gap-8'>
        <h2 className='text-text-accent text-6xl font-bold max-w-2xl text-center'>
          Essential Integrations with Modern Design
        </h2>
        <p className='text-main-text text-center max-w-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
          maximus.
        </p>
      </div>

      <div className='pt-20 w-full flex justify-center items-center'>
        <div className='w-full max-w-[80%]'>
          <FeaturesList />
        </div>
      </div>
    </section>
  )
}

export default Features
