import "../styles/contactForm.css"
import React, { useState } from 'react';
import { Cormorant_Garamond } from 'next/font/google'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ["400", "500", "600", "700"], })

import '../styles/contactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [niche, setNiche] = useState('');
  const [brand, setBrand] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const response = await fetch(`/api/add-contact?name=${name}&email=${email}&niche=${niche}&brand=${brand}`, {
        method: 'GET', // Assuming your serverless function is a GET endpoint
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
  
      // Handle success, you can do something with the response if needed
      const responseData = await response.json();
      console.log('Contact added successfully:', responseData);
    } catch (error) {
      console.error('Error adding contact:', error.message);
      // Handle error, you might want to display an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="contactForm">
            <p>Hi, my name is </p>
            <input
                name='name'
                type='text'
                placeholder='Gasper'
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ maxWidth: `${Math.max(115, name.length * 16)}px` }}
                className={cormorant.className}
            />
            <p>. I am in a</p>
            <input
                name='niche'
                type='text'
                placeholder='restaurant'
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                style={{ maxWidth: `${Math.max(175, niche.length * 16)}px` }}
                className={cormorant.className}
            />
            <p>business. My brand name is</p>
            <input
                name='brand'
                type='text'
                placeholder='G.S. Digital Anchor'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                style={{ maxWidth: `${Math.max(300, brand.length * 16)}px` }}
                className={cormorant.className}
            />
            <p>.</p>
            <p>You can contact me at</p>
            <input
                name='email'
                type='email'
                placeholder='gasper@gsdigitalanchor.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ maxWidth: `${Math.max(420, email.length * 16)}px` }}
                className={cormorant.className}
            />
            <p>.</p>
        </div>
        <div className="button-div"><button className={cormorant.className}>Let's talk soon!</button></div>
    </form>
  )
}

export default ContactForm