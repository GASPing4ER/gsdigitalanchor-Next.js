import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer-info">
                <div className="footer-item footer-about">
                    <h2><Link href="/about"><li>ABOUT</li></Link></h2>
                    <h2><Link href="/services"><li>SERVICES</li></Link></h2>
                    <h2><Link href="/portfolio"><li>PORTFOLIO</li></Link></h2>
                    <h2><Link href="mailto:info@gsdigitalanchor.com"><li>INQUIRE</li></Link></h2>
                </div>
                <div className="footer-item footer-socials">
                    <p>AN AUTHENTIC WEBSITE ORIENTED AGENCY FOR 
                        VIBRANT BRANDS WITH A UNIQUE VISION</p>
                </div>
                <div className="socials">
                        <Link href="https://www.instagram.com/gsdigitalanchor/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="faIcon first-icon" icon={faInstagram}/></Link>
                        <Link href="mailto:info@gsdigitalanchor.com"><FontAwesomeIcon className="faIcon" icon={faEnvelope}/></Link>
                </div>
            </div>
            <div className="after-footer">
                <p>© 2023 G.S. DIGITAL ANCHOR</p>
                <p>TERMS AND CONDITIONS</p>
                <p>PRIVACY POLICY</p>
            </div>
        </div>
    )
}