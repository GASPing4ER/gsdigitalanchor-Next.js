import InstagramFeed from "./InstagramFeed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import Image from "next/image";

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
                <div className="footer-item footer-logo">
                    <Link href="/"><Image src="@public/images/logos/logo_trans.png" alt="gsdigitalanchor"/></Link>
                </div>
                <div className="footer-item footer-socials">
                    <p>AN AUTHENTIC WEBSITE ORIENTED AGENCY FOR 
                        VIBRANT BRANDS WITH A UNIQUE VISION</p>
                    <div className="socials">
                        <FontAwesomeIcon icon={faFacebookF}/>
                        <a href="https://www.instagram.com/gsdigitalanchor/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="mailto:info@gsdigitalanchor.com"><FontAwesomeIcon icon={faEnvelope}/></a>
                    </div>
                </div>
            </div>
            <InstagramFeed />
            <div className="after-footer">
                <p>© 2023 G.S. DIGITAL ANCHOR</p>
                <p>TERMS AND CONDITIONS</p>
                <p>PRIVACY POLICY</p>
            </div>
        </div>
    )
}