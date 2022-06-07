import React from 'react'
import { Article } from '../../components'
import './blog.css'
import { project1, project2, project3, codewars, github } from './imports'
const Blog = () => {
  return (
    <div className="sasha__projects section__padding reveal" id="have-a-look">
      <div className="sasha__projects-heading">
        <h1 className='gradient__text'>I want you to have a look at...</h1>
      </div>
      <div className='sasha__projects-container'>
        <div className="sasha__projects-container_groupA">
          <Article imgUrl={project1} website="https://sashavirtual.github.io/hangman__game/" title="Hangman" description="Fully responsive hangman web application" />
        </div>
        <div className="sasha__projects-container_groupB">
          <Article imgUrl={project2} website="https://sashavirtual.github.io/CardGame/" title="Card Game" description="A memory training game. Children approved!" />
          <Article imgUrl={project3} website="https://sashavirtual.github.io/checkers/" title="Checkers" description="A game using difficult algorithms to be accomplished" />
          <Article imgUrl={codewars} website="https://www.codewars.com/users/Aleksandr%20Semenikhin" title="Codewars Profile" description="Web-site proving my JavaScript skills" />
          <Article imgUrl={github} website="https://github.com/sashavirtual?tab=repositories" title="GitHub repositories" description="Here's my GitHub profile with all applications codes available" />
        </div>
      </div>
    </div>
  )
}

export default Blog