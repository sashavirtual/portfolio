import React from 'react'
import { Feature } from '../../components'
import './features.css'
const featuresData = [
  {
    title: "Demobilization",
    text: "I finished my military service, but there I could not practice programming languages. So during the whole service I was thinking I'm going to make my carreer as a tutor or a teacher and it required great soft skills to succeed in it. As an introvert, that could be a bit difficult for me, so as I'd come back home, I thought about my future."
  }, {
    title: 'Neuro-linguistic programming',
    text: "The interned, social media as though began programming me to become an IT specialist, there were lots of jokes and experience anecdotes, so I decided to begin learning programming. I found a YouTube C++ course and started making notes."
  }, {
    title: 'Here comes JavaScript',
    text: 'After a week of learning C++ and completing simple tasks (like "Prime Number Check" or "Array Minimal Value") I looked up at the jobs in a famous service and found out that JavaScript is much more popular than C++, so I headed to JavaScript learning.'
  }, {
    title: 'FreeCodeCamp and CodeWars',
    text: "I watched a lot of tutorial videos, making notes on  JavaScript book by Kirupa Chinnathambi. I continued watching vlogs of Russian and foreign coders and FreeCodeCamp and CodeWars were advised to me. Since then I completed 3 FCC certifications and became a top 1% CW warrior!"
  }
]
const Features = () => {
  return (
    <div className="gpt3__features section__padding reveal" id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>How I ended up learning Front End Development and Web Design?</h1>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((i, index) => (
          <Feature title={i.title} text={i.text} key={i.title} />
        ))}
      </div>
    </div>
  )
}

export default Features