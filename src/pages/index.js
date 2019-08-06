import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout/Layout';
import './css/index.css'
export default class index extends React.Component{

    render(){
        return(
          <Layout title="Home" >
              <div className="index-container">
              <h1>It's a me, Marcos!</h1>
                <h3>Lorem ipsum etc, etc, etc.</h3>
                Github, twitter, LinkedIn, Email <br/> 
              </div>
          </Layout>
        )
    }
}