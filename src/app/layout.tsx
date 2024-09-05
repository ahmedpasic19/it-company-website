import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/layout/navbar'
import Footer from '@/layout/footer'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'IT Solutions',
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
          <Navbar />
          {children}
          <Footer />
          <div className='px-14 text-main-text'>
            <div className='py-10 w-full flex flex-col gap-12 sm:gap-0 sm:flex-row justify-between font-semibold border-t-2 border-main-gray'>
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
