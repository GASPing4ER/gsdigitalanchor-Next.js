import "@styles/services.css"
import Testimonials from "@components/Testimonials"
import BrandIdenIcon from "@public/images/icons/branding-identity.png"
import DesignDevelIcon from "@public/images/icons/design-development.png"
import CopySeoIcon from "@public/images/icons/copywriting-seo.png"
import AnalyticsIcon from "@public/images/icons/analytics.png"

import Image from "next/image"

export default function ServicesPage() {
    
    return(
        <>
            <div className="services-hero">
                <h1>SERVICES</h1>
            </div>
            <div className="services-details">
                <div className="services-item branding-identity">
                    <Image src={BrandIdenIcon} alt="branding-identity"/>
                    <h2>Branding Identity</h2>
                    <h3>What We Offer</h3>
                    <p>Logo Design, Brand Colors, Brand Voice & Personality, Visual Assets, Brand Guidelines, Market Positioning, Memorability, Consultation & Collaboration, Professional Expertise, Customization</p>
                    <h3>Starting 1.500€</h3>
                </div>
                <div className="services-item design-development">
                    <Image src={DesignDevelIcon} alt="web-design-development"/>
                    <h2>Web Design & Development</h2>
                    <h3>What We Offer</h3>
                    <p>Custom & Responsive Design, Front & Back-End Development, Content Management System, E-commerce Solutions, Security, Performance, UX Design, Maintenance, Hosting & Domain Setup</p>
                    <h3>Starting 3.000€</h3>
                </div>
                <div className="services-item content-seo">
                    <Image src={CopySeoIcon} alt="copywriting-seo"/>
                    <h2>Copywriting & SEO</h2>
                    <h3>What We Offer</h3>
                    <p>Keyword Research, On-Page SEO, Content Creation, Blog Posts, Website Copy, SEO Audits, SEO Analytics, Content Marketing, Social Media Integration, SEO Consultation, Conversion Optimization</p>
                    <h3>Starting 2.000€</h3>
                </div>
                <div className="services-item analytics">
                    <Image src={AnalyticsIcon} alt="analytics-reports"/>
                    <h2>Analytics & Reports</h2>
                    <h3>What We Offer</h3>
                    <p>Data Analysis, Customized Dashboards, KPI Identification, Website Analytics, Social Media Analytics, Customer Behavior Analysis, A/B Testing, Data Visualizations, Regular Reporting</p>
                    <h3>Starting 500€</h3>
                </div>
            </div>
            <Testimonials />
        </>
    )
}
