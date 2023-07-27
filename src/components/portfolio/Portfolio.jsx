import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/barber-screenshot.png'
import IMG2 from '../../assets/ecommerce-img.png'
import IMG3 from '../../assets/subscription.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Barber Booking App: Streamlining Appointments with Style',
    github: 'https://github.com/laurisseau/SuaveHouseHairStudio',
    demo: 'https://www.suavehousestudio.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Empowering E-commerce: Integrated Financial Management & Sales Platform',
    github: 'https://github.com/laurisseau/barber-ecommerce',
    demo: 'https://ecommerce-mern.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'LawnEase: Seamless Subscription Management with Stripe Integration & Webhooks',
    github: 'https://github.com/laurisseau/lawn-service/tree/master',
    demo: 'https://subscription-services.herokuapp.com/'
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
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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