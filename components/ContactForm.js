import "../styles/contactForm.css"
import { useState } from 'react';
import { Cormorant_Garamond } from 'next/font/google'
import { push, ref, set } from "firebase/database"
import { database } from "@db";


const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ["400", "500", "600", "700"], });

import '../styles/contactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [niche, setNiche] = useState('');
  const [brand, setBrand] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault()

    if (!name || !email || !niche || !brand) {
      alert("Fill out the form!")
      return
    }

    try {
      const usersRef = ref(database, "inquiry");
      const newDataRef = push(usersRef);

      set(newDataRef, {
        name: name,
        email: email,
        niche: niche,
        brand: brand
      });
      setName("");
      setEmail("");
      setNiche("");
      setBrand("");
      alert("Inquiry sent successfully!")
    } catch(error) {
      console.error("Firebase Error!", error)
    }
  };

  return (
    <form>
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
                required
            />
            <p>. I am in a</p>
            <input
                name='niche'
                type='text'
                placeholder='clothing'
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                style={{ maxWidth: `${Math.max(175, niche.length * 16)}px` }}
                className={cormorant.className}
                required
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
                required
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
                required
            />
            <p>.</p>
        </div>
        <div className="button-div"><button onClick={handleSubmit} className={cormorant.className}>Let's talk soon!</button></div>
    </form>
  )
}

export default ContactForm