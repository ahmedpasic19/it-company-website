import SectionTitle from '@/components/misc/section-title'
import TeamList from '@/components/team/team-list'
import React from 'react'

const Team = () => {
  return (
    <section className='min-h-screen py-20'>
      <SectionTitle
        title='Meet With Our Creative Dedicated Team'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
      />

      <div className='pt-20 w-full flex justify-center items-center'>
        <TeamList />
      </div>
    </section>
  )
}

export default Team
