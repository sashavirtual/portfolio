import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg';
const Footer = () => {
  return (
    <footer className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <button href="vk.com">Request Early Access</button>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Nisi minim fugiat mollit ad tempor duis reprehenderit.</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Social Media</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>Privacy Policy</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>2022 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer