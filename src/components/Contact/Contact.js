import React, { useState } from 'react'; 
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
    if (name && email && message) {
       // TODO - send mail

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    } else {
        alert('Please fill in all fields.');
    }
    }
    const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
    };
    
  return (
      <div className='contact'>
            <h2 className='contact-heading'>Contact Us</h2>                    
            <form id="contact-form">
                <div className='form-div'>
                    <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />

                </div>
                <div className='form-div'>
                    <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                        
                </div>
                <div className='form-div'>
                        <textarea rows="10" cols="50" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>

                </div>
                <div className='form-div'>
                        <button onClick={submit}>Send Message</button>

                </div>
                <div className='form-div'>
                            <span id='thank-you' className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
                </div>
            </form>
      </div>

  )
}

export default Contact

