import Image from 'next/image'
import React from 'react'

const HeroImages = () => {
  return (
    <div className='relative'>
      <Image
        alt='Hero image 1'
        height={100}
        width={100}
        src={`https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fhero%2Fimage-2.jpg&w=1200&q=75`}
        className='h-[400px] w-[390px]'
      />
      <div className='absolute -bottom-6 -left-5 w-[200px] h-[250px] backdrop-blur-md bg-white/20'></div>
      <Image
        alt='Hero image 2'
        height={100}
        width={250}
        src={`https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fhero%2Fimage-1.jpg&w=750&q=75`}
        className='absolute -bottom-8 -left-10 w-[200px] h-auto'
      />
    </div>
  )
}

export default HeroImages
