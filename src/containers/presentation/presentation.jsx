import React from 'react'

import './presentation.scss'

export function Presentation() {

  return (
    <div className="presentation__wrapper">
      <div className="presentation__main">
        <div className="presentation__main-text">
          <div className="presentation__cheer">Hi, I'm Marcos!</div>
          <div className="presentation__description">I'm a software engineer based in Spain</div>
          <div className="presentation__description">I focus on web technologies, agile delivery and collaboration.</div>
        </div>
        <div className="presentation__main-image-container">
          <img src="freelance.svg" alt="Illustration of a software developer" className="presentation__main-image"/>
          </div>
      </div>
      <div className="presentation__social-links">
        <a href="https://github.com/marcosorive"><img className="presentation__icon" src="github.svg" alt="Github icon" /></a>
        <a href="https://twitter.com/marcosorive"><img className="presentation__icon" src="twitter.svg" alt="Twitter icon" /></a>
        <a href="https://www.linkedin.com/in/marcosorive/"><img className="presentation__icon" src="linkedin.svg" alt="LinkedIn icon" /></a>
        <a href="/#contact"><img className="presentation__icon" src="email.svg" alt="Email icon" /></a>
      </div>
    </div>
  )
}