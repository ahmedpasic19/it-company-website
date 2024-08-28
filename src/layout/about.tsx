import AboutTabs from '@/components/about-tabls'
import SectionTitle from '@/components/section-title'
import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen py-20'>
      <SectionTitle
        title='Know Details About Our Company'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
      />

      <div className='pt-20 w-full flex justify-center items-center'>
        <AboutTabs />
      </div>
    </div>
  )
}

export default About
