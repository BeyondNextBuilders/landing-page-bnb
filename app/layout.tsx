import React from "react"
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import './globals.css'

const manrope = Manrope({ 
  subsets: ['latin'], 
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Beyond Next Builders | Custom Software Development',
  description: 'Premium custom software development services. We build scalable, high-performance digital solutions tailored to your business needs.',
  icons: {
    icon: '/logo_bnb.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
