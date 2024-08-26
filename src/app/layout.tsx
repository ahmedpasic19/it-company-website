import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/layout/navbar'

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
          <div className='absolute top-0 left-0 right-0'>
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
