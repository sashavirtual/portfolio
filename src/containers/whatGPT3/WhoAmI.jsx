import React from 'react'
import { Feature } from '../../components'
import './whoAmI.css'

const WhoAmI = () => {
  return (
    <div className='sasha__whoAmI reveal' id="who-am-I">
      <div className="sasha__whoAmI-feature">
        <Feature title="Who am I?" text="MBTI test told me I'm the Virtuoso. Cannot reject this title, because I am genuinely passionate about learning various skills." />
      </div>
      <div className="sasha__whoAmI-heading">
        <h1 className="gradient__text">My path of life</h1>
      </div>
      <div className='sasha__whoAmI-container'>
        <Feature title="Hometown" text="I was born in 1997 in Ishimbay, Bashkortostan Republic, Russia. I'd been living there for 17 years since I was born. I finished the school on the average level, but was passionate about learning English, so I applied to the linguistics major to learn even more." />
        <Feature title="University" text="I graduated from the Orenburg state university in 2020. For 6 years of studying I've learnt German and French to B1 level, and mastered English to C1. Also I was teaching children and helping them master the language too, but was not passionate about this job." />
        <Feature title="Military Service" text="As my studies were close to its logical end, there was the question about compulsory military service. I was sent to Naro-Fominsk to serve at the 4th Guards Tank Division in artillery regiment. In 5 months I was detached to the local hospital and finished my service" />
      </div>
    </div>
  )
}

export default WhoAmI