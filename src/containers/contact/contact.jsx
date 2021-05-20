import React from 'react';
import './contact.css'

export function Contact() {
    return (
        <>
            <h1>Do you want to talk?</h1>
            <div className="form-wrapper" id="contact">
                <form className="form" action="/contact/success" name="contact" method="POST" data-netlify="true">
                    <div className="name-email-wrapper">
                        <div>
                            <label htmlFor="name">Your Name: </label>
                            <input type="text" name="name" id="name" placeholder="John Doe" required />
                        </div>
                        <div>
                            <label htmlFor="email">Your Email: </label>
                            <input type="email" name="email" placeholder="john@email.com" required />
                        </div>
                    </div>
                    <div className="comment-wrapper">
                        <label htmlFor="message">Message: </label>
                        <textarea name="message" rows="7" cols="30" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}