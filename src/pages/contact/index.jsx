import React from "react";
import Layout from '../../components/Layout/Layout';
import '../css/contact.css'

export default class contact extends React.Component{

    render(){
        return(
            <Layout title="Contact" headerText="Contact me!">
                <div class="form-wrapper">
                    <form class="form" action="/contact/success" name="contact" method="POST" data-netlify="true">    
                            <div class="name-email-wrapper">                
                                <div>                                                      
                                    <label for="name">Your Name: </label>
                                    <input type="text" name="name" id="name" placeholder="John Doe" required/>
                                </div>
                                <div>
                                    <label>Your Email: </label>
                                    <input type="email" name="email" placeholder="john@email.com" required/>           
                                </div>
                            </div>
                            <div className="comment-wrapper">
                                <label>Message: </label>
                                <textarea name="message" rows="7" cols="30" required></textarea>            
                            </div>
                            <button type="submit">Send</button>            
                    </form>
                </div>
            </Layout>
        )
    }
}