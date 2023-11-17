"use client"

import "@styles/services.css"
import Testimonials from "@components/Testimonials";
import ContactForm from "@components/ContactForm";
import { useState, useEffect } from 'react';

const niche = ["Restaurant", "Cafe", "Food", "Beverage"]

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
                <h1>WHERE FLAVOR MEETS FAME</h1>
                <hr />
                <h2>Propel Your <span className="niche">{niche[count]}</span> Brand into the Limelight with Our Assistance</h2>
            </div>
            <hr />
            <div className="service-section flex justify-center">
                <div className="service-overview">
                    <h2>DESIGN & CONTENT CREATION</h2>
                    <hr />
                    <p>From mouthwatering menu designs that entice diners to immersive brand stories that showcase your unique culinary journey, we are dedicated to helping your establishment stand out in a crowded market. Our services extend to creating eye-catching social media graphics, appetizing promotional materials, and cohesive brand identities that leave a lasting impression.</p>
                </div>
                <div className="service-items-pair">
                    <div className="service-items">
                        <div className="service-item">
                            <h3>Photography & Videography</h3>
                            <ul>
                                <li>Food & Beverages</li>
                                <li>Chef & Culinary Team </li>
                                <li>Ambiance & Interior Shots</li>
                                <li>Special Events & Promotions</li>
                                <li>Social Media Material</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h3>Designing & Printing</h3>
                            <ul>
                                <li>Business Cards</li>
                                <li>Menus</li>
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
                    <p>We specialize in crafting delectable digital experiences, from visually enticing posts showcasing your culinary masterpieces to strategic campaigns that engage and captivate your audience. ✨ Whether you're a trendy cafe, a fine dining restaurant, or a beverage brand, we tailor our approach to suit your unique flavor and style.</p>
                </div>
           </div>
           <hr />
           <div className="service-section flex justify-center">
                <div className="service-overview">
                    <h2>WEB DEVELOPMENT</h2>
                    <hr />
                    <p>From bespoke WordPress solutions to meticulous code development, we specialize in creating visually stunning, user-friendly websites that captivate and convert. Elevate your online presence with our expert web design, ensuring that your culinary story is not just told but experienced. Need ongoing support? Our dedicated web maintenance ensures your site stays fresh and flawless, leaving you free to focus on creating exceptional culinary experiences.</p>
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
