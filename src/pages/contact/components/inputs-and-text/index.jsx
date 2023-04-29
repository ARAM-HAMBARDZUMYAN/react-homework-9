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
          placeholder='Name'
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
          placeholder='Email'
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
          placeholder='Message'
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        </div>
       <div className='sendbutton'>
        <button onSubmit={handleSubmit}>Send</button>
       </div>
        </div>
      <div className='contactpageinfo'>
        <h4 style={{marginBottom:"20px"}}>Our Address</h4>
        <p style={{marginBottom:"20px"}}>180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
        <p style={{marginBottom:"10px"}}>080-090-0110</p>
        <p style={{marginBottom:"40px"}}>info@company.co</p>
        <i className={`icon icon-facebook2 `}>
     <a href='https://www.facebook.com/'></a>
     </i>
     <i className={`icon icon-instagram `}>
     <a href='https://www.facebook.com/'></a>
     </i>
     <i className={`icon icon-twitter `}>
     <a href='https://www.facebook.com/'></a>
     </i>
    
      </div>   
    </div>
  );
}

export default ContactPage;
