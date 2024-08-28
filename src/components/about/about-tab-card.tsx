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
      className={`w-full flex ${
        selected % 2 !== 0 ? 'flex-row-reverse' : ''
      } justify-between items-center py-10  bg-gradient-to-t from-main-dark to-main-blue/10`}
    >
      <div className='relative w-1/2'>
        <Image
          src={tab.image_2}
          alt='Tab image'
          height={100}
          width={100}
          className='h-[500px] w-[390px]'
        />
        <div className='absolute top-16 right-28 w-[200px] h-[250px] backdrop-blur-md bg-white/20'></div>
        <Image
          src={tab.image}
          alt='Tab image'
          height={100}
          width={100}
          className='absolute top-20 right-24 w-[200px] h-auto'
        />
      </div>
      <div className='flex flex-col gap-6 items-start h-full w-1/2'>
        <h4 className='text-5xl text-text-accent font-bold'>{tab.subtitle}</h4>
        <div className='whitespace-pre-wrap text-main-text max-w-md'>
          {tab.text}
        </div>
      </div>
    </div>
  )
}

export default AboutTabCard
