import React from 'react'
import './footer.css'
import sasha3 from '../../assets/sasha3.png';
import telegram from '../../assets/telegram.png';
import vk from '../../assets/vk.png';

const Footer = () => {
  return (
    <footer className='sasha__footer section__padding'>
      <div class="sasha__footer-buttonPanel">
        <a href="https://vk.com/sashavirtual" className="sasha__footer-contact" target="_blank"><img src={vk} /></a>
        <a href="https://t.me/sashavirtual" className="sasha__footer-contact" target="_blank"><img src={telegram} /></a>
      </div>
      <img src={sasha3} alt="sasha3" className="sasha__footer-postcard" />
    </footer>
  )
}

export default Footer