"use client"

import "@styles/services.css"
import Testimonials from "@components/Testimonials";
import ContactForm from "@components/ContactForm";
import { useState, useEffect } from 'react';

const niche = ["Fashion", "Health", "Beauty", "Sports"]

export default function ServicesPage() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCount((prevCount) => (prevCount + 1) % niche.length);
        }, 1000);
    
        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);
    
    return(
        <>
            <div className="services-hero flex-column flex align-center justify-center">
                <h1>SETTING SAIL FOR EXCELLENCE ONLINE</h1>
                <hr />
                <h2>Propel Your <span className="niche">{niche[count]}</span> Brand into the Limelight with Our Assistance</h2>
            </div>
            <hr />
            <div className="service-section flex justify-center">
                <div className="service-overview">
                    <h2>DESIGN & CONTENT CREATION</h2>
                    <hr />
                    <p>From captivating visual experiences that draw in shoppers to compelling brand narratives that highlight your distinct style or wellness journey, we are committed to elevating your presence in a competitive market. Our offerings span from crafting engaging social media visuals, enticing promotional content, to unified brand identities that resonate with your audience long after they've clicked 'buy'.</p>
                </div>
                <div className="service-items-pair">
                    <div className="service-items">
                        <div className="service-item">
                            <h3>Photography & Videography</h3>
                            <ul>
                                <li>Professional Photoshoots</li>
                                <li>Product Videos</li>
                                <li>Lifestyle Imagery</li>
                                <li>Special Events & Promotions</li>
                                <li>Social Media Material</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h3>Designing & Printing</h3>
                            <ul>
                                <li>Business Cards</li>
                                <li>Brochures</li>
                                <li>Labels</li>
                                <li>Packaging</li>
                                <li>Promotional Material</li>
                            </ul>
                        </div>
                    </div>
                    <div className="service-items">
                        <div className="service-item">
                            <h3>Branding Identity</h3>
                            <ul>
                                <li>Logo Design</li>
                                <li>Color Palette</li>
                                <li>Typography</li>
                                <li>Visual Elements</li>
                                <li>Brand Voice & Messaging</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h3>Custom Design</h3>
                            <ul>
                                <li>Social Media Graphics</li>
                                <li>Personalized Icons</li>
                                <li>Website Graphics</li>
                                <li>Marketing Campaigns Designs</li>
                                <li>Email Newsletter Templates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           <hr />
           <div className="service-section second-services flex justify-center">
                <div className="service-items-pair">
                    <div className="service-items">
                        <div className="service-item">
                            <h3>Instagram</h3>
                            <ul>
                                <li>Visually Stunning Feed</li>
                                <li>Engaging Instagram Stories</li>
                                <li>Influencer Collaboration</li>
                                <li>Contests & Giveaways</li>
                                <li>Monthly Reports</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h3>Tiktok</h3>
                            <ul>
                                <li>Creative Short Videos</li>
                                <li>Behind-the-Scenes Clips</li>
                                <li>Community Building</li>
                                <li>In-App Advertising</li>
                                <li>Performance Analysis</li>
                            </ul>
                        </div>
                    </div>
                    <div className="service-items">
                        <div className="service-item">
                            <h3>Facebook</h3>
                            <ul>
                                <li>Meta Business Integration</li>
                                <li>Engaging Posts & Updates</li>
                                <li>Customer Reviews & Testimonials</li>
                                <li>Themed Events</li>
                                <li>Interactive Polls & Surveys</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h3>LinkedIn</h3>
                            <ul>
                                <li>Professional Brand Presence</li>
                                <li>Networking & Engagement</li>
                                <li>Recruitment & Company Culture</li>
                                <li>B2B Partnerships</li>
                                <li>Thought Leadership Content</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="service-overview">
                    <h2>SOCIAL MEDIA MARKETING</h2>
                    <hr />
                    <p>"We specialize in crafting captivating social media experiences, from visually stunning posts highlighting your latest fashion trends to strategic campaigns that engage and inspire your audience. ✨ Whether you're in the fashion, health, beauty, or sports industry, we tailor our approach to amplify your unique brand voice and style, ensuring your message resonates with your target audience."</p>
                </div>
           </div>
           <hr />
           <div className="service-section flex justify-center">
                <div className="service-overview">
                    <h2>WEB DEVELOPMENT</h2>
                    <hr />
                    <p>From custom WordPress solutions to meticulous code development, we specialize in creating visually stunning, user-friendly websites that not only captivate but drive sales. Elevate your online presence with our expert web design, ensuring that your products are showcased to perfection, enticing customers to make a purchase. Need ongoing support? Our dedicated web maintenance ensures your site stays fresh and flawless, leaving you free to focus on growing your business and delivering exceptional customer experiences.</p>
                </div>
                <div className="service-items-pair">
                    <div className="service-items">
                        <div className="service-item">
                            <h3>Website Design</h3>
                            <ul>
                                <li>Custom Website Design</li>
                                <li>Responsive Design</li>
                                <li>Branding Integration</li>
                                <li>High-Quality Imagery</li>
                                <li>User Experience (UX)</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h3>Coded Website Development</h3>
                            <ul>
                                <li>Custom Coding</li>
                                <li>Scalability</li>
                                <li>E-Commerce Integration</li>
                                <li>Multilingual Integration</li>
                                <li>Performance Optimization</li>
                            </ul>
                        </div>
                    </div>
                    <div className="service-items">
                        <div className="service-item">
                            <h3>Wordpress Website Building</h3>
                            <ul>
                                <li>Theme Customization</li>
                                <li>Plugin Integration</li>
                                <li>SEO-Friendly Structure</li>
                                <li>Content Management System</li>
                                <li>Online Reservation System</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h3>Maintenance</h3>
                            <ul>
                                <li>Regular Backups</li>
                                <li>Security Audits</li>
                                <li>Plugin Updates</li>
                                <li>Performance Optimization</li>
                                <li>Monthly Reports</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           <hr />
           <div className="services-bottom flex-column flex align-center justify-center">
                <h1>INTRODUCE YOURSELF!</h1>
                <hr />
                <ContactForm />
            </div>
            <Testimonials />
        </>
    )
}
