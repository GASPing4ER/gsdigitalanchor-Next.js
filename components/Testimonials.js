"use client"

import { useState } from "react"

const testimonialsData = [
    {
        headline: "'Completely adaptable to any wishes you may have!'",
        quote: "I have been very pleased with Gašper's services, especially in terms of quick and consistent improvements.",
        author: "Gal Resnik, Founder of Impero"
    },
    {
        headline: "'I couldn't be happier with the results!'",
        quote: "I had the pleasure of working with Gašper, a talented web developer, and I couldn't be happier with the results. He created a stunning and luxurious website for my business that exceeded all my expectations.",
        author: "Lucija Šimec, Founder of LaMaisonDigitale"
    },
    {
        headline: "Bringing Your Vision to Life with Creativity, Simplicity, and Uniqueness",
        quote: "Gašper is an active listener and understands what the client would like to create. He has a good eye for visual perspective and is a very creative person. Simplicity and uniqueness have always been something I wanted to achieve on my webpage, and Digital Anchor did just that.",
        author: "Nastasya Prihoda, Founder of NP Mental Model"
    }
]

export default function Testimonials() {

    const [count, setCount] = useState(0)

    const testimonialForm = testimonialsData.map((testimonial, index) => {
        return(
        <div className="testimonial">
            <h1 className="testimonials-h1">{testimonial.headline}</h1>
            <p>{testimonial.quote}</p>
            <h2 className="testimonials-h2">{testimonial.author}</h2>
        </div>
        )
    })


    function toggleTestimonialUp() {
        setCount(prevCount => {
            return prevCount === 2 ? 0 : prevCount + 1;
        })
    }

    return(
       <div className="testimonials">
            {testimonialForm[count]}
            <button className="testimonials-btn" id="next" onClick = {() => toggleTestimonialUp()}>NEXT</button>
       </div>
    )
}