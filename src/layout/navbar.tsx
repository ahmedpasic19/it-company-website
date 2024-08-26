import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/assets/Screenshot 2024-08-26 at 18.52.35.png'

const Navbar = () => {
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Pricing', href: '#pricing' },
    {
      label: 'Pages',
      href: '#pages',
      pages: [
        { label: 'Features', href: '#features' },
        { label: 'About', href: '#about' },
        { label: 'Portofolio', href: '#portofolio' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
  ]
  return (
    <nav className='flex justify-evenly items-center py-4'>
      <h1 className='text-text-accent font-bold text-title'>AT-IT Solutions</h1>

      <ul className='flex gap-8 text-main-text'>
        {links.map((item) => (
          <li key={Math.random()}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <section className='flex gap-8'>
        <button className='regular-button'>Sign In</button>
        <button className='secondary-button'>Sign Up</button>
      </section>
    </nav>
  )
}

export default Navbar
