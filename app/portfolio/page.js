import "@styles/portfolio.css"

import MentalModel from "@public/icons/logo/mental-model.png"
import VitusHome from "@public/icons/logo/vitus-home.png"
import ElevateEstate from "@public/icons/logo/elevate-estate.png"
import LuxuryHotel from "@public/icons/logo/luxury-hotel.png"
import Turin from "@public/icons/logo/turin.png"
import LeteciLevi from "@public/icons/logo/leteci-levi.png"

import MobilePortfolio from "@public/images/mobile-portfolio.png"
import DesktopPortfolio from "@public/images/desktop-portfolio.png"

import InstagramFeedImage from "@public/images/instagram-feed.png"
import MobileIg from "@public/images/mobile-ig.png"
import MobileTikTok from "@public/images/mobile-tiktok.png"

import Link from 'next/link'
import Image from 'next/image'

import Testimonials from "@components/Testimonials"

const Portfolio = () => {

    return (
        <div>
            <div className="portfolio-hero">
                <div className="portfolio-hero-left">
                    <div className="portfolio-hero-left-upper">
                        <h3>PORTFOLIO</h3>
                        <h1>G.S. DIGITAL <br/>ANCHOR</h1>
                        <h3 className='portfolio-h3'>WEBSITE AGENCY</h3>
                    </div>
                    <div className="portfolio-hero-left-lower">
                        <Link href="mailto:info@gsdigitalanchor.com"><h3>CONTACT US</h3></Link>
                    </div>
                </div>
                <div className="portfolio-hero-right">
                    <div className="chunk">CONTENT <br/> CREATION</div>
                    <div className="chunk">WEBSITE DESIGN & <br/>DEVELOPMENT</div>
                    <div className="chunk">LOGO DESIGN & BRANDING IDENTITY</div>
                </div>
            </div>
            <div className="portfolio-branding-section">
                <div className="portfolio-branding-descrip">
                    <h2>LOGO DESIGN & <br/>BRANDING IDENTITY</h2>
                    <p>We worked with clients from luxury industries to create unique and memorable logos for their businesses.</p>
                </div>
                <div className="portfolio-branding-logos">
                    <Image src={MentalModel} alt="mental-model" />
                    <Image src={VitusHome} alt="mental-model" />
                    <Image src={ElevateEstate} alt="mental-model" />
                    <Image src={LuxuryHotel} alt="mental-model" />
                    <Image src={Turin} alt="mental-model" />
                    <Image src={LeteciLevi} alt="mental-model" />
                </div>
            </div>
            <div className="portfolio-design-dev">
                <div className="portfolio-design-mobile">
                    <Image src={MobilePortfolio} alt="" />
                    <p>We helped a new brand with the design of their website and online profiles.</p>
                </div>
                <div className="portfolio-design-desktop">
                    <h2>WEBSITE DESIGN & <br/>DEVELOPMENT</h2>
                    <Image src={DesktopPortfolio} alt="" />
                </div>
            </div>
            <div className="portfolio-content-creation">
                <div className="portfolio-content-descrip">
                    <h2>CONTENT CREATION</h2>
                    <p>We helped a well-loved company update their visual identity and transform their brand into something fresh and more aligned with their new business direction.</p>
                    <div className="portfolio-content-descrip-flex">
                        <Image src={MobileTikTok} alt="" />
                        <Image src={MobileIg} alt="" />
                    </div>
                </div>
                <div className="portfolio-content-image">
                    <Image src={InstagramFeedImage} alt="" />
                </div>
            </div>
            <Testimonials />
        </div>
    )
}

export default Portfolio