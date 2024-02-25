import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <p>
            A detailed-oriented team player ready to contribute to company
            success, dedicated to achieving demanding development objectives
            while producing impeccable code and meeting tight deadlines. Also
            possessing troubleshooting and debugging skills.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
