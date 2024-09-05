import React from 'react'

const HeroTitle = () => {
  return (
    <div className='flex items-center sm:items-start flex-col gap-8'>
      <span className='bg-main-gray rounded-full p-4 text-text-accent px-8 w-fit flex justify-center items-center gap-4'>
        <div className='h-3 w-3 rounded-full bg-main-blue font-semibold'></div>
        <h3 className='w-full text-center sm:text-start'>
          Next.js Starter for Business
        </h3>
      </span>

      <section>
        <h1 className='text-5xl sm:text-6xl font-extrabold text-text-accent mb-4 text-center sm:text-start'>
          Next.js Boilerplate for Your Business
        </h1>
        <p className='text-md text-main-text tracking-wide text-center sm:text-start'>
          Handcrafted Next.js starter for your next - Startup, Business, Agency
          or SaaS Website. Comes with refreshing design, integrations and
          everything you need to kickstart your next web project.
        </p>
      </section>

      <div className='w-full flex gap-8 justify-center sm:justify-start'>
        <button className='regular-button sm:w-1/3 w-full'>Get started</button>
        <button className='transparent-button sm:w-1/3 w-full'>
          How it works
        </button>
      </div>
    </div>
  )
}

export default HeroTitle
