import './globals.css'
import { Cormorant_Garamond } from 'next/font/google'
import { Montserrat } from 'next/font/google'

const cormorant = Cormorant_Garamond({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'G.S. Digital Anchor',
  description: 'Website Agency for Luxury Brands',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.className}>{children}</body>
    </html>
  )
}
