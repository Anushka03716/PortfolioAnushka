import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>

      {/* ===== TOP SECTION ===== */}
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={footer_logo} alt="Footer Logo" />
          <p>I am a developer</p>
        </div>

        {/* ✅ NETLIFY FORM START */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className='footer-top-right'
        >
          {/* Netlify hidden input */}
          <input type="hidden" name="form-name" value="contact" />

          <div className='footer-email-input'>
            <img src={user_icon} alt="User Icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <button type="submit" className='footer-subscribe'>
            Subscribe
          </button>
        </form>
        {/* NETLIFY FORM END */}

      </div>

      <hr />

      {/* BOTTOM SECTION */}
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>@ 2025 Anushka Jana</p>

        <div className='footer-bottom-right'>
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>

    </div>
  );
};

export default Footer;



