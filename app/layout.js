import Header from '@components/Header'
import Footer from "@components/Footer"

import './globals.css'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ["400", "500", "600", "700"], })
const montserrat = Montserrat({ subsets: ['latin'] })

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
      </body>
    </html>
  )
}
