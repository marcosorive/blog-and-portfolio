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
        <img className="icon" src="github.svg" alt="Github icon" height="32px" width="32px" />
        <img className="icon" src="twitter.svg" alt="Twitter icon" height="32px" width="32px" />
        <img className="icon" src="linkedin.svg" alt="LinkedIn icon" height="32px" width="32px" />
        <img className="icon" src="email.svg" alt="LinkedIn icon" height="32px" width="32px" />
      </div>
    </div>
  )
}