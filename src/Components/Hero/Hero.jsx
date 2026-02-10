import React from 'react'
import './Hero.css'

import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      
      <h1><span>I am Anushka Jana,</span> a B.Tech student.</h1> {/* ✅ Capitalization */}
      <p>I am currently in my fourth year. My stream is CSE (IoT, CS, BT).</p> {/* ✅ Grammar fix */}
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero