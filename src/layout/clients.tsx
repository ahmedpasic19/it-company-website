import React from 'react'

import SectionTitle from '@/components/misc/section-title'
import ClientList from '@/components/clients/client-list'

const Clients = () => {
  return (
    <section className='min-h-screen py-20'>
      <SectionTitle
        title='What Our Clients Say About Us'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
      />

      <div className='pt-20 w-full flex justify-center items-center'>
        <ClientList />
      </div>
    </section>
  )
}

export default Clients
