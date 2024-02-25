import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/etta-screenshot.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Early Transition To Tech: Edtech',
    github: 'https://github.com/laurisseau/ETTA-backend',
    demo: 'https://www.earlytech.org'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' rel='noreferrer' target='_blank' >Github</a>
                <a href={demo} className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio