import React from 'react'
import TeamCard from './team-card'

const TeamList = () => {
  const teamList = [
    {
      fullname: 'Olivia Andrium',
      role: 'Project Manage',
      image:
        'https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fteam%2Fimage-1.jpg&w=3840&q=75',
      fb_profile: 'https://go.demo.nextjstemplates.com/',
      x_profile: 'https://go.demo.nextjstemplates.com/',
      ln_profile: 'https://go.demo.nextjstemplates.com/',
    },
    {
      fullname: 'Jemse Kemorun',
      role: 'Frontend Developer',
      image:
        'https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fteam%2Fimage-2.jpg&w=3840&q=75',
      fb_profile: 'https://go.demo.nextjstemplates.com/',
      x_profile: 'https://go.demo.nextjstemplates.com/',
      ln_profile: 'https://go.demo.nextjstemplates.com/',
    },
    {
      fullname: 'Avi Pestarica',
      role: 'Product Designer',
      image:
        'https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fteam%2Fimage-3.jpg&w=3840&q=75',
      fb_profile: 'https://go.demo.nextjstemplates.com/',
      x_profile: 'https://go.demo.nextjstemplates.com/',
      ln_profile: 'https://go.demo.nextjstemplates.com/',
    },
  ]

  return (
    <ul className='flex flex-col sm:flex-row gap-5 items-center'>
      {teamList.map((item) => {
        return (
          <li key={Math.random()}>
            <TeamCard member={item} />
          </li>
        )
      })}
    </ul>
  )
}

export default TeamList
