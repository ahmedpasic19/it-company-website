import Image from 'next/image'
import React from 'react'

const PortofolioGrid = () => {
  return (
    <ul className='grid grid-cols-3 grid-rows-[9rem_9rem_9rem_9rem] gap-8 w-full'>
      <Image
        alt='Project image'
        src={
          'https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fportfolio%2Fimage-1.jpg&w=3840&q=75'
        }
        height={1000}
        width={1000}
        className={`rounded-md h-full w-full row-start-1 row-end-2`}
      />
      <Image
        alt='Project image'
        src={
          'https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fportfolio%2Fimage-2.jpg&w=3840&q=75'
        }
        height={1000}
        width={1000}
        className={`rounded-md h-full w-full row-span-full`}
      />
      <Image
        alt='Project image'
        src={
          'https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fportfolio%2Fimage-4.jpg&w=3840&q=75'
        }
        height={1000}
        width={1000}
        className={`rounded-md h-full w-full row-start-2 row-end-4`}
      />
      <Image
        alt='Project image'
        src={
          'https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fportfolio%2Fimage-3.jpg&w=3840&q=75'
        }
        height={1000}
        width={1000}
        className={`rounded-md h-full w-full row-start-1 row-end-3`}
      />
    </ul>
  )
}

export default PortofolioGrid
