import React from 'react'
import { IoMdSend } from 'react-icons/io'

const Footer = () => {
  const containderClassName = 'w-full h-full flex flex-col'
  const titleClassName =
    'text-text-accent text-2xl capitalize font-bold w-full text-start pb-6'
  const listClassName = 'flex flex-col gap-4'

  return (
    <footer className='flex flex-col gap-12 sm:gap-8 sm:grid grid-cols-5 text-main-text w-full px-10 smp:x-24 py-20'>
      <div className={containderClassName}>
        <h3 className={titleClassName}>Startup</h3>
        <p className='w-full max-w-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, et!
        </p>
        <ul></ul>
      </div>
      <div className={containderClassName}>
        <h3 className={titleClassName}>Company</h3>
        <ul className={listClassName}>
          <li>Home</li>
          <li>Products</li>
          <li>Careers</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className={containderClassName}>
        <h3 className={titleClassName}>Support</h3>
        <ul className={listClassName}>
          <li>Company</li>
          <li>Press Media</li>
          <li>Our Blog</li>
          <li>Account</li>
        </ul>
      </div>
      <div className='w-full'>
        <h3 className={titleClassName}>Get in touch</h3>
        <ul className={listClassName}>
          <li>
            <h3 className='text-text-accent text-lg'>
              Toll FREE Customer Care
            </h3>
            <p className='hover:text-main-blue cursor-pointer'>
              +(1) 123 456 7890
            </p>
          </li>

          <li>
            <h3 className='text-text-accent text-lg'>Need live support?</h3>
            <p className='hover:text-main-blue cursor-pointer'>
              support@domain.com
            </p>
          </li>
        </ul>
      </div>
      <div className='w-full'>
        <h3 className={titleClassName}>News letter</h3>
        <p>Subscribe to our updates</p>

        <form className='flex'>
          <input
            className='bg-main-gray p-4 text-main-text rounded-sm outline-none'
            placeholder='Email address'
          />
          <button
            type='submit'
            className='h-14 px-2 fle items-center bg-main-gray cursor-pointer'
          >
            <IoMdSend className='h-8 w-8 text-main-text' />
          </button>
        </form>
      </div>
    </footer>
  )
}

export default Footer
