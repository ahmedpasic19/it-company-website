import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/layout/navbar'
import Footer from '@/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AT-IT Solutions',
  description: 'Get your own digital solution',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='relative'>
          <div className='sticky top-0 left-0 right-0 z-[100] bg-main-dark'>
            <Navbar />
          </div>
          {children}
          <Footer />

          <div className='px-14 text-main-text'>
            <div className='py-10 w-full flex justify-between font-semibold border-t-2 border-main-gray'>
              <div className='flex gap-8'>
                <h3>English</h3>
                <h3>Privacy Policy</h3>
                <h3>Support</h3>
              </div>

              <h3>© 2024 Startup. All rights reserved</h3>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
