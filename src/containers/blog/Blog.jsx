import React from 'react'
import { Article } from '../../components'
import './blog.css'
import { project1, project2, blog03, blog04, blog05 } from './imports'
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding reveal" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>Hear Ye. Here are my projects!</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={project1} website="https://sashavirtual.github.io/hangman__game/" title="Hangman" description="Test yourself in your vocabulary!" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={project2} website="https://sashavirtual.github.io/CardGame/" title="Card Game" description="Find a pair and train your memory!" />
          <Article imgUrl={blog03} date="Mar 26,2022" title="Cillum nulla non quis magna non proident labore." />
          <Article imgUrl={blog04} date="Mar 26,2022" title="Cupidatat duis adipisicing non proident elit" />
          <Article imgUrl={blog05} date="Mar 26,2022" title="Ut aute eiusmod ullamco fugiat ut ut velit sunt dolor." />
        </div>
      </div>
    </div>
  )
}

export default Blog