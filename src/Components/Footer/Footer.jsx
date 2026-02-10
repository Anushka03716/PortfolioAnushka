import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg'; // ✅ import added

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={footer_logo} alt="Footer Logo" />
          <p>I am a developer</p>
        </div>
        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <button className='footer-subscribe'>Subscribe</button>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>@ 2025 Anushka Jana</p>
        <div className='fotter-bottom-right'>
            <p>Term of Serice</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;


