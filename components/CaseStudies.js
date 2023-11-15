import Link from "next/link";
import Image from "next/image"

import lamaisondigitale from "@public/images/case-studies/lamaison.jpeg"
import vitus from "@public/images/case-studies/vitus.jpeg"
import modelmindset from "@public/images/case-studies/modelmindset.jpeg"
import impero from "@public/images/case-studies/impero.jpeg"

export default function CaseStudies() {
    return(
        <div className="case-study">
            <h1><span className="case-study-h1">The</span> CASE STUDIES</h1>
            <h2 className="case-study-h2">A CREATIVE JOURNAL BY G.S. DIGITAL ANCHOR</h2>
            <p className="case-study-p">Browse our journal to learn more about our projects, our inspiration, stories, and beautiful designs.</p>
            <div className="case-studies">
                <div className="main">
                    <Image src={lamaisondigitale} alt="lamaisondigital"/>
                    <p>CASE STUDY No 1</p>
                    <h1>LA MAISON DIGITALE</h1>
                    <h2>DIGITAL MARKETING AGENCY</h2>
                </div>
                <div className="side-studies">
                    <div className="side">
                        <Image src={vitus} alt="vitus"/>
                        <div className="side-content">
                            <p>CASE STUDY No 2</p>
                            <h1>VITUS</h1>
                            <Link href="/portfolio"><h2>EXPLORE MORE</h2></Link>
                        </div>
                    </div>
                    <div className="side">
                        <Image src={modelmindset} alt="modelmindset"/>
                        <div className="side-content">
                            <p>CASE STUDY No 3</p>
                            <h1>MODEL MINDSET</h1>
                            <Link href="/portfolio"><h2>EXPLORE MORE</h2></Link>
                        </div>
                    </div>
                    <div className="side">
                        <Image src={impero} alt="impero"/>
                        <div className="side-content">
                            <p>CASE STUDY No 4</p>
                            <h1>IMPERO</h1>
                            <Link href="/portfolio"><h2>EXPLORE MORE</h2></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}