import React from "react";
import Layout from '../../components/Layout/Layout';
import './css/contact.css'

export default class contact extends React.Component{

    render(){
        return(
            <Layout title="Contact" headerText="Contact me!">
                <div class="form-wrapper">
                    <h2>Thanks for reaching out!</h2>
                    <p>I will get back to you as soon as possible.</p>
                </div>
            </Layout>
        )
    }
}