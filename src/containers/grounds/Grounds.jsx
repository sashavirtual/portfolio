import React from 'react'
import possibilityImage from '../../assets/sasha2.png'
import './grounds.css'

const Possibility = () => {
  return (
    <div className='sasha__grounds section_padding reveal' id="grounds-for-learning">
      <div className='sasha__grounds-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='sasha__grounds-content'>
        <h1 className='gradient__text'>Useful Skills for Learning to Code</h1>
        <p>Before the beginning of the journey I had great skills to succeed in this area. I could  watch English tutorials, read English Front End books and type 500 symbols per minute, I spent 6 years of learning how to study and absorb new information, so I was full of motivation to learn quick and a lot.</p>
      </div>
    </div>
  )
}

export default Possibility