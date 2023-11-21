import React, { useState } from 'react';

export default function PricingPackage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const response = await fetch(`/api/add-newsletter?name=${name}&email=${email}`, {
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
    return(
        <div className="pricing-package">
            <h1 className="pp-h1">get our <span className="pp-h1-bolded">packages & pricing</span> guide</h1>
            <form onSubmit={handleSubmit}>
                <input name='name'
                        type='text'
                        placeholder='First name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}    
                />
                <input name='email'
                        type='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                />
                <button>SUBSCRIBE</button>
            </form> 
        </div>
    )
}