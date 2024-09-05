'use client'

import { links } from '@/data/routes'
import Link from 'next/link'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaHamburger } from 'react-icons/fa'

const MobileMenu = () => {
  const [openHamburger, setOpenHamburger] = useState(false)
  return (
    <div>
      <section className='sm:hidden gap-8'>
        <button
          className='transparent-button'
          onClick={() => setOpenHamburger(true)}
        >
          <FaHamburger className='h-6 w-6' />
        </button>
      </section>

      <div
        className={`${
          openHamburger ? 'absolute inset-0' : 'hidden'
        } bg-main-dark/80 shadow-lg backdrop-blur-lg flex justify-center items-center h-screen overflow-hidden`}
      >
        <ul className='flex flex-col gap-8 text-main-text'>
          {links.map((item) => (
            <li key={Math.random()}>
              <Link href={item.href} onClick={() => setOpenHamburger(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className='text-white secondary-button absolute top-10 right-10'
          onClick={() => setOpenHamburger(false)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  )
}

export default MobileMenu
