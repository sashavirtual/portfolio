import React from 'react'
import './header.css'
import sasha1 from '../../assets/sasha1sm.png'

const Header = () => {
  return (
    <header className="sasha__header section__padding" id="home">
      <div className="sasha__header-content">
        <h1 className="gradient__text">Front End Developer Aleksandr Semenikhin</h1>
        <p>25 years old <strong>Master of Linguistics</strong> and IT specialist yet to come</p>
      </div>
      <div className='sasha__header-image'>
        <img src={sasha1} alt="sasha" />
      </div>
    </header>
  )
}

export default Header