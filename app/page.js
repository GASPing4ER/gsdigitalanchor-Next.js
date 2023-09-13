import ProjectsSlider from "../components/ProjectsSlider"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import CaseStudies from "../components/CaseStudies"
import PricingPackage from "../components/PricingPackage"

export default function Home() {
      
    return(
        <>
            <div className="hero-section">
                <h1 className="hero-h1">AN <span className="italic">AUTHENTIC</span> WEBSITE ORIENTED AGENCY FOR <span className="italic">LUXURY</span> BRANDS WITH A <span className="italic">UNIQUE</span> VISION</h1>
            </div>
            <ProjectsSlider />
            <Services />
            <Testimonials />
            <CaseStudies />
            <PricingPackage />
        </>
    )
}