import React from 'react'

const HeroTitle = () => {
  return (
    <div className='flex flex-col gap-8'>
      <span className='bg-main-gray rounded-full p-4 text-text-accent px-8 w-fit flex justify-center items-center gap-4'>
        <div className='h-3 w-3 rounded-full bg-main-blue font-semibold'></div>
        <h3>Next.js Starter for Business</h3>
      </span>

      <section>
        <h1 className='text-title text-6xl font-extrabold text-text-accent mb-4'>
          Next.js Boilerplate for Your Business
        </h1>
        <p className='text-md text-main-text tracking-wide'>
          Handcrafted Next.js starter for your next - Startup, Business, Agency
          or SaaS Website. Comes with refreshing design, integrations and
          everything you need to kickstart your next web project.
        </p>
      </section>

      <div className='w-full flex gap-8'>
        <button className='regular-button w-1/3'>Get started</button>
        <button className='secondary-button w-1/3'>How it works</button>
      </div>
    </div>
  )
}

export default HeroTitle
