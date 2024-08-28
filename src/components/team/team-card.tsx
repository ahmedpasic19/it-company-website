'use client'

import { TeamMemberModel } from '@/models/TeamMember'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { RiTwitterXLine } from 'react-icons/ri'

type TProps = {
  member: TeamMemberModel
}

const TeamCard = ({ member }: TProps) => {
  const [socials, setSocials] = useState(false)

  return (
    <div
      className='w-full flex flex-col justify-center items-center relative'
      onMouseOver={() => setSocials(true)}
      onMouseLeave={() => setSocials(false)}
    >
      <Image
        alt='Profile image'
        height={100}
        width={100}
        src={member.image}
        className='h-[300px] w-[300px]'
      />
      <div className='mt-4 text-center z-10 bg-main-dark w-full'>
        <h3 className='text-2xl text-text-accent font-bold'>
          {member.fullname}
        </h3>
        <p className='text-main-text'>{member.role}</p>
      </div>

      <div
        className={`flex w-full justify-center gap-5 absolute transition-all duration-500 ease-in-out ${
          socials
            ? 'bottom-12 transform -translate-y-8 opacity-100'
            : 'bottom-0 transform translate-y-0 opacity-0'
        }`}
      >
        <Link href={member.fb_profile} className=''>
          <div className='h-10 w-10 bg-white/30 backdrop-blur-md flex justify-center items-center rounded-full'>
            <FaFacebookF className='h-5 w-5 text-text-accent' />
          </div>
        </Link>
        <Link href={member.x_profile} className=''>
          <div className='h-10 w-10 bg-white/30 backdrop-blur-md flex justify-center items-center rounded-full'>
            <RiTwitterXLine className='h-5 w-5 text-text-accent' />
          </div>
        </Link>
        <Link href={member.ln_profile} className=''>
          <div className='h-10 w-10 bg-white/30 backdrop-blur-md flex justify-center items-center rounded-full'>
            <FaLinkedinIn className='h-5 w-5 text-text-accent' />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default TeamCard
