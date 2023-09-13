import "@styles/about.css"
import Testimonials from "@components/Testimonials"
import imgLogo from "@public/images/logos/logo_trans.png"

import Image from "next/image"

export default function About() {
    
    return(
        <>
            <div className="about-hero-section">
                <Image src={imgLogo} alt="logo"/>
                <h1 className="about-hero-h1">AN <span className="italic">AUTHENTIC</span> WEBSITE ORIENTED AGENCY FOR <span className="italic">LUXURY</span> BRANDS WITH A <span className="italic">UNIQUE</span> VISION</h1>
            </div>
            <div className="about-section">
                <h2>Boutique Agency</h2>
                <h1>FOR WEBSITE DESIGN & DEVELOPMENT</h1>
                <p>Welcome to our boutique agency, where we specialize in 
                    creating authentic and engaging websites for vibrant brands with 
                    a unique vision. With a keen eye for detail and a deep understanding 
                    of the latest web design trends, we'll create a website that's not only 
                    beautiful but also functional and user-friendly. </p>
            </div>
            <Testimonials />
        </>
    )
}
