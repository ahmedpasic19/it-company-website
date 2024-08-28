import SectionTitle from '@/components/misc/section-title'
import PortofolioTabs from '@/components/porotofolio/portofolio-tabls'
import Link from 'next/link'
import React from 'react'

const Portofolio = () => {
  return (
    <div className='min-h-screen py-20'>
      <SectionTitle
        title='Gallery, Previews and Portfolio'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
      />

      <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='pt-20 w-full flex justify-center items-center'>
          <PortofolioTabs />
        </div>
        <Link href='#' className='regular-button'>
          See more projects
        </Link>
      </div>
    </div>
  )
}

export default Portofolio
