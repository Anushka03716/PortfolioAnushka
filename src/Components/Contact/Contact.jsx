import React, { useState } from 'react';
import './Contact.css';
import theme_patter from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "281de703-0aae-4dc3-9fe0-18671e26d7c1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in Touch</h1>
        <img src={theme_patter} alt="" />
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>I'm currently available to take any projects/work. So feel free to contact me.</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='' /> <p>anushka16.mid@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='' /> <p>7047763977</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt="" /> <p>West Bengal, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type='text' placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type='email' placeholder='Enter your email' name="email" required />
          <label>Write your message</label>
          <textarea name='message' rows='8' placeholder='Enter your message' required></textarea>
          <p className='form-result'>{result}</p>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
