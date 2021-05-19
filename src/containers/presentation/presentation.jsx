import React from 'react'
import { Button } from '../../components/Button/Button';

import './Presentation.css'

export function Presentation() {

  return (
    <div className="presentation__wrapper">
      <div className="presentation__main">
        <div className="presentation__main-text">
          <div className="presentation-cheer">Hi, I'm Marcos!</div>
          <div className="presentation-description">I'm a software engineer based in Spain</div>
          <div className="presentation-description">Here you can check out some of my work, my blog posts and social links.</div>
        </div>
        <div className="presentation__main-image-container">
          <img src="freelance.svg" className="presentation__main-image"/>
          </div>
      </div>
      <div className="presentation-social-links">
        <Button to="https://github.com/marcosorive">Github</Button>
        <Button to="https://twitter.com/marcosorive">twitter</Button>
        <Button to="https://linkedin.com/in/marcosorive">LinkedIn</Button>
        <Button to="mailto:marcos@orive.me">Email</Button>
      </div>
    </div>
  )
}