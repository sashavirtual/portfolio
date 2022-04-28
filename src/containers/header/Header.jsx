import React from 'react'
import './header.css'
import ai from '../../assets/sasha1.png'

const Header = () => {
  return (
    <header className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Front End Developer Aleksandr Semenikhin</h1>
        <p>25 years old <strong>Master of Linguistics</strong> and IT specialist yet to come</p>
        {/* <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Adress' />
          <button type="submit">Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>Ea enim do exercitation commodo.</p>
        </div> */}
      </div>
      <div className='gpt3__header-image'>
        <img rel="preload" src={ai} alt="ai" />
      </div>
    </header>
  )
}

export default Header