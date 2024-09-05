import Image from 'next/image'
import React from 'react'

type TProps = {
  comment: string
  name: string
  proffesion: string
}

const ClientCard = ({ comment, name, proffesion }: TProps) => {
  return (
    <div className='flex flex-col-reverse gap-8 sm:gap-0 sm:flex-row w-full justify-evenly items-center bg-gradient-to-b from-main-dark via-main-dark/50 to-main-blue/10 py-10'>
      <div className='text-main-text space-y-8 text-lg'>
        <p className='w-full max-w-sm'>{comment}</p>
        <div>
          <h3 className='text-text-accent sm:text-xl font-bold sm:font-normal'>
            {name}
          </h3>
          <h4>{proffesion}</h4>
        </div>
      </div>

      <div className='relative'>
        <Image
          src={`https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Ftestimonial%2Fimage-1.jpg&w=3840&q=75`}
          alt='Client image'
          height={100}
          width={100}
          className='w-[400px] h-[400px] z-50'
        />
        <div className='hidden sm:block absolute bottom-4 left-5 bottom-5 w-[400px] h-[400px] backdrop-blur-md bg-white/20 -z-10'></div>
      </div>
    </div>
  )
}

export default ClientCard
