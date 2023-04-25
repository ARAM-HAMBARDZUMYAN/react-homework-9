import React, { useState } from 'react';
import "./style.scss"
function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='P-flex-box5'>
    <div className='contactpageinputs'>
    <div>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
    </div>
    <div>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        </div>
        <div>
        <label htmlFor="message"></label>
        <textarea
        rows="5"
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        </div>
       <div>
        <button onSubmit={handleSubmit}>Submit</button>
       </div>
        </div>
      <div className='contactpageinfo'>
        <h4>
        Our Address
        </h4>
        <p>180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
        <p>080-090-0110</p>
        <p>info@company.co</p>
      </div>   
    </div>
  );
}

export default ContactPage;
