import Service from "./Service"
import Link from "next/link"
import serviceOne from "@public/images/services/service-1.webp"
import serviceTwo from "@public/images/services/service-2.webp"
import serviceThree from "@public/images/services/service-3.webp"

export default function Services() {
    return(
        <div className="services-flex">
            <div className="services">
                <Link href="/services"><Service idName="firstService" img = {serviceOne} title = "DIGITAL" description = "Design & Development"/></Link>
                <Link href="/services"><Service idName="secondService" img = {serviceTwo} title = "CONTENT" description = "Social Media, Printing & Photography"/></Link>
                <Link href="/services"><Service idName="thirdService" img = {serviceThree} title = "ANALYTICS" description = "Analytics & Reports"/></Link>
            </div>
        </div>
    )
}