'use client'

import { links } from '@/data/routes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaHamburger } from 'react-icons/fa'
import MobileMenu from './mobile-menu'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 transition-colors duration-100 ${
        isScrolled
          ? 'bg-main-dark/80 shadow-lg fixed backdrop-blur-lg'
          : 'bg-main-dark/20 absolute'
      }`}
    >
      <div className='flex justify-evenly items-center py-4'>
        <h1 className='text-text-accent font-bold text-title'>
          AT-IT Solutions
        </h1>

        <ul className='hidden sm:flex gap-8 text-main-text'>
          {links.map((item) => (
            <li key={Math.random()}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <section className='hidden sm:flex gap-8'>
          <button className='regular-button'>Sign In</button>
          <button className='secondary-button'>Sign Up</button>
        </section>

        <MobileMenu />
      </div>
    </nav>
  )
}

export default Navbar
