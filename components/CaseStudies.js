import Link from "next/link";
import Image from "next/image"

import glowinface from "@public/images/case-studies/glowinface.jpeg"
import vitus from "@public/images/case-studies/vitus.jpeg"
import modelmindset from "@public/images/case-studies/modelmindset.jpeg"
import lamaison from "@public/images/case-studies/lamaison.jpeg"

export default function CaseStudies() {
    return(
        <div className="case-study">
            <h1><span className="case-study-h1">The</span> CASE STUDIES</h1>
            <h2 className="case-study-h2">A CREATIVE JOURNAL BY G.S. DIGITAL ANCHOR</h2>
            <p className="case-study-p">Browse our journal to learn more about our projects, our inspiration, stories, and beautiful designs.</p>
            <div className="case-studies">
                <div className="main">
                    <Image src={glowinface} alt="lamaisondigital"/>
                    <p>CASE STUDY No 1</p>
                    <h1>GLOWINFACE</h1>
                    <h2>Face Yoga Studio</h2>
                </div>
                <div className="side-studies">
                    <div className="side">
                        <Image src={vitus} alt="vitus"/>
                        <div className="side-content">
                            <p>CASE STUDY No 2</p>
                            <h1>VITUS</h1>
                            <Link href="#"><h2>EXPLORE MORE</h2></Link>
                        </div>
                    </div>
                    <div className="side">
                        <Image src={modelmindset} alt="modelmindset"/>
                        <div className="side-content">
                            <p>CASE STUDY No 3</p>
                            <h1>MODEL MINDSET</h1>
                            <Link href="#"><h2>EXPLORE MORE</h2></Link>
                        </div>
                    </div>
                    <div className="side">
                        <Image src={lamaison} alt="impero"/>
                        <div className="side-content">
                            <p>CASE STUDY No 4</p>
                            <h1>LA MAISON DIGITALE</h1>
                            <Link href="#"><h2>EXPLORE MORE</h2></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}