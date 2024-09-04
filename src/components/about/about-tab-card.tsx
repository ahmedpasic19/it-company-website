import { AboutModel } from '@/models/AboutTab'
import Image from 'next/image'
import React from 'react'

type TProps = {
  tab: AboutModel
  selected: number
}

const AboutTabCard = ({ tab, selected }: TProps) => {
  return (
    <div
      className={`w-full flex flex-col gap-8 sm:gap-0 sm:flex-row ${
        selected % 2 !== 0 ? 'flex-row-reverse' : ''
      } justify-between items-center py-10 bg-gradient-to-b from-main-dark via-main-dark/50 to-main-blue/10`}
    >
      <div className='relative sm:w-1/2 px-10 sm:p-0'>
        <Image
          src={tab.image_2}
          alt='Tab image'
          height={100}
          width={100}
          className='h-[300px] sm:h-[500px] w-[390px]'
        />
        <div className='absolute top-12 sm:top-16 left-10 sm:right-28 w-[200px] h-[250px] backdrop-blur-md bg-white/20'></div>
        <Image
          src={tab.image}
          alt='Tab image'
          height={100}
          width={100}
          className='absolute top-10 sm:top-20 left-5 sm:right-24 w-[200px] h-auto'
        />
      </div>
      <div className='flex flex-col gap-6 items-start h-full sm:w-1/2 px-10 sm:px-0'>
        <h4 className='text-3xl text-center sm:text-start sm:text-5xl text-text-accent font-bold'>
          {tab.subtitle}
        </h4>
        <div className='whitespace-pre-wrap text-main-text max-w-md'>
          {tab.text}
        </div>
      </div>
    </div>
  )
}

export default AboutTabCard
