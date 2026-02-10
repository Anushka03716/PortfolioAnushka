import React from 'react'
import './About.css'
import theme from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile_img.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src = {theme} alt=""/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile} alt=""/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a final-year B.Tech CSE student specializing in IoT, Cyber Security, and Blockchain. </p>
                        <p> I enjoy building smart, real-world solutions by combining software, connected systems, and data.  </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}></hr></div>
                        <div className="about-skill"><p>C++       </p><hr style={{width:"50%"}}></hr></div>
                        <div className="about-skill"><p>PYTHON</p><hr style={{width:"50%"}}></hr></div>
                        <div className="about-skill"><p>REACT JS</p><hr style={{width:"50%"}}></hr></div>
                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>5+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr/>
                <div className='about-achievement'>
                    <h1>8.4</h1>
                    <p>Collage SGP</p>
                </div>
                <hr/>
                <div className='about-achievement'>
                    <h1>88%</h1>
                    <p>12th Board Exam [WBSCHE]</p>
                </div>
                <hr/>
            </div>
        </div>
    );
};

export default About