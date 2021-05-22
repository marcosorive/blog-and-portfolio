import React from 'react';
import './contact.scss'

export function Contact() {
    return (
        <>
            <h1>Do you want to talk?</h1>
            <div className="contact__wrapper" id="contact">
                <form className="contact__form" action="/contact/success" name="contact" method="POST" data-netlify="true">
                        <div className="contact__form-group">
                            <label htmlFor="name" className="contact__label" >Your Name: </label>
                            <input className="contact__input" type="text" name="name" id="name" placeholder="John Doe" required />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="email" className="contact__label">Your Email: </label>
                            <input className="contact__input" type="email" name="email" placeholder="john@email.com" required />
                        </div>
                    <div className="contact__form-group">
                        <label htmlFor="message" className="contact__label">Message: </label>
                        <textarea className="contact__input" name="message" rows="7" cols="30" placeholder="I want to chat!" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}