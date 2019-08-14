import React from 'react';
import Layout from '../components/Layout/Layout';
import {Button} from '../components/Button/Button'; 
import './css/index.css'
export default class index extends React.Component{

    render(){
        return(
          <Layout title="Home" headerText="Hi, I'm Marcos">
              <div className="index-container">
                  <div className="index-text-container">
                    <div className="index-cheer">I'm a software engineer based in Spain</div>
                    <div className="index-description">Here you can check out some of my work, my blog posts and social links. Feel free to contact me if you like.</div>
                  </div>
                <div className="index-social-links">
                  <Button to="https://github.com/marcosorive">Github</Button>
                  <Button to="https://twitter.com/marcosorive">twitter</Button>
                  <Button to="https://linkedin.com/in/marcosorive">LinkedIn</Button>
                  <Button to="mailto:marcos@orive.me">Email</Button>
                </div>
              </div>
          </Layout>
        )
    }
}