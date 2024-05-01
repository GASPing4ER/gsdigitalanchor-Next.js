import { useState } from 'react';
import { push, ref, set } from "firebase/database"
import { database } from "@db";


export default function PricingPackage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault()

    if (!name || !email) {
      alert("Fill out the form!")
      return
    }

    try {
      const usersRef = ref(database, "packages");
      const newDataRef = push(usersRef);

      set(newDataRef, {
        name: name,
        email: email,
      });
      setName("");
      setEmail("");
      alert("Inquiry sent successfully!")
    } catch(error) {
      console.error("Firebase Error!", error)
    }
  };

    return(
        <div className="pricing-package">
            <h1 className="pp-h1">get our <span className="pp-h1-bolded">packages & pricing</span> guide</h1>
            <form onSubmit={handleSubmit}>
                <input name='name'
                        type='text'
                        placeholder='First name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required    
                />
                <input name='email'
                        type='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                />
                <button>SUBSCRIBE</button>
            </form> 
        </div>
    )
}