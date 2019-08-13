import React from 'react';
import Layout from '../components/Layout/Layout';
import './css/index.css'
export default class index extends React.Component{

    render(){
        return(
          <Layout title="Home" headerText="Hi, I'm Marcos">
              <div className="index-container">
                <h3>Lorem ipsum etc, etc, etc.</h3>
                <a href="https://github.com/marcosorive">Github</a>
                <a href="https://twitter.com/marcosorive">twitter</a>
                <a href="https://linkedin.com/in/marcosorive">LinkedIn</a>
                <a href="mailto:marcos@orive.me">Email</a>
                 <br/> 
              </div>
          </Layout>
        )
    }
}