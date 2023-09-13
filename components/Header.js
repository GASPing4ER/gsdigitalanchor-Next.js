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
                <Link href="/about"><li>ABOUT</li></Link>
                <Link href="/services"><li>SERVICES</li></Link>
                <Link href="/"><li className="header-h1">G.S. DIGITAL ANCHOR</li></Link>
                <Link href="/portfolio"><li>PORTFOLIO</li></Link>
                <Link href="mailto:info@gsdigitalanchor.com"><li>INQUIRE</li></Link>
            </ul>
        </header>
  )
}

export default Header