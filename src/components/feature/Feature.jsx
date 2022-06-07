import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => {
  return (
    <div className='sasha__whoAmI-container__feature'>
      <div className='sasha__whoAmI-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className="sasha__whoAmI-container_feature-text">
        {text}
      </div>
    </div>
  )
}

export default Feature