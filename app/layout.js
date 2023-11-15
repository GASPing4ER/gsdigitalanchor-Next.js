import Header from '@components/Header'
import Footer from "@components/Footer"
import { Analytics } from '@vercel/analytics/react';

import './globals.css'
import { Cormorant_Garamond } from 'next/font/google'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ["400", "500", "600", "700"], })

export const metadata = {
  title: 'G.S. Digital Anchor',
  description: 'Website Agency for Luxury Brands',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
