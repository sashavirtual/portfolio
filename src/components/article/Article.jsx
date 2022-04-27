import React from 'react'
import './article.css'

const Article = ({ imgUrl, description, title, website }) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <a href={website} target="_blank"><img src={imgUrl} alt="blog" /></a>
      </div>
      <div className="gpt3__blog-container_article-content">
        <a href={website} target="_blank"><h3>{title}</h3></a>
        <p>{description}</p>
      </div>
      <div className="gpt3__blog-container_article-paragraph">
        <a href={website} target="_blank">View the project</a>
      </div>
    </div>
  )
}

export default Article