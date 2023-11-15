"use client";
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import CaseStudies from "../components/CaseStudies"
import PricingPackage from "../components/PricingPackage"
import { useState, useEffect } from 'react';
const left_headings = ["DIGITAL AGENCY", "FOR RESTAURANTS", "FOOD & BEVERAGES"]

export default function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCount((prevCount) => (prevCount + 1) % left_headings.length);
        }, 1500);
    
        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);
      
    return(
        <>
            <div className="flex">
                <div className="hero-left flex align-center justify-center">
                    <h1>{left_headings[count]}</h1>
                </div>
                <div className="hero-section flex gap-2 align-center justify-center">
                    <div>
                        <h1>SERVING SUCCESS <br/> <span className="italic">One Bite at a Time</span></h1>
                    </div>
                </div>
            </div>
            <Services />
            <Testimonials />
            <CaseStudies />
            <PricingPackage />
        </>
    )
}