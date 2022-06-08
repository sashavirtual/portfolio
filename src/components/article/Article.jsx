import React from 'react'
import './article.css'

const Article = ({ imgUrl, description, title, website }) => {
  let nonProjectArr = [
    'https://www.codewars.com/users/Aleksandr%20Semenikhin',
    'https://github.com/sashavirtual?tab=repositories'
  ]
  return (
    <div className='sasha__projects-container_article'>
      <div className='sasha__projects-container_article-image'>
        <a href={website} target="_blank"><img src={imgUrl} alt="blog" /></a>
      </div>
      <div className="sasha__projects-container_article-content">
        <a href={website} target="_blank"><h3>{title}</h3></a>
        <p>{description}</p>
      </div>
      <div className="sasha__projects-container_article-paragraph">
        <a href={website} target="_blank">{nonProjectArr.includes(website) ? 'View the web-site' : 'View the project'}</a>
      </div>
    </div>
  )
}

export default Article