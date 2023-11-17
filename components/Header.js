"use client"

import { useState } from 'react'
import Link from 'next/link';

const Header = () => {
  const [openMenu, setOpenMenu] = useState("")

  function toggleMenu() {
      setOpenMenu(prevOpenMenu => prevOpenMenu === "" ? "menu-open" : "")
  }

  return (
    <header>
            <div className="mobile-menu">
                <div className="menu-icon" onClick={() => toggleMenu()}></div>
                <h1 className="header-h1-mobile">G.S. DIGITAL ANCHOR</h1>
            </div>
            <ul className={`${openMenu} menu`}>
                <Link href="/about" alt="about-us page"><li id="about-redirect">ABOUT</li></Link>
                <Link href="/services" alt="services page"><li id="services-redirect">SERVICES</li></Link>
                <Link href="/" alt="home page"><li id="home-redirect" className="header-h1">G.S. DIGITAL ANCHOR</li></Link>
                <Link href="#" alt="portfolio page"><li id="portfolio-redirect">PORTFOLIO</li></Link>
                <Link href="mailto:info@gsdigitalanchor.com" alt="send us mail"><li id="inquire-redirect">INQUIRE</li></Link>
            </ul>
        </header>
  )
}

export default Header