import FeaturesList from '@/components/feature/features-list'
import SectionTitle from '@/components/misc/section-title'
import React from 'react'

const Features = () => {
  return (
    <section className='min-h-screen py-20'>
      <SectionTitle
        title='Essential Integrations with Modern Design'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
          maximus.'
      />

      <div className='pt-20 w-full flex justify-center items-center'>
        <div className='w-full max-w-[80%]'>
          <FeaturesList />
        </div>
      </div>
    </section>
  )
}

export default Features
