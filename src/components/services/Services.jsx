import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>Implement modern design trends and best practices to enhance user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>create visually engaging designs that align with the client's brand identity.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>proficient in designing responsive interfaces that adapts across different devices and screen sizes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>create reusable component libraries for consistent and efficient design implementation.</p>
            </li>

          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create visually appealing and responsive user interfaces using HTML, CSS, and JavaScript.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Develop server-side applications and APIs using technologies like Node.js</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Manage databases and handle data storage efficiently.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Seamlessly integrate front-end and back-end components to build feature-rich web applications.</p>
            </li>

          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>collaborating with clients to understand their content needs and goals.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>client feedback and suggestions into your content creation process.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>ability to write for different platforms, such as websites, blogs, social media, etc.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>data insights to refine content strategies and improve future content creation.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services