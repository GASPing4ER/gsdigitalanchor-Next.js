import "../styles/contactForm.css"
import React, { useState } from 'react';

const apiKey = 'X9dZuM';
const listId = 'YgQhum'; 

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

    let dataToSend = {
        name: name,
        email: email,
        niche: niche,
        brand: brand
    }

    const url = `https://a.klaviyo.com/api/v2/list/${listId}/members?api_key=${apiKey}`;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
    })
    .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data sent successfully:', data);
      })
      .catch(error => {
        console.error('Error sending data to Klaviyo:', error.message);
    });
}

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