import React from 'react';
import Layout from '../components/Layout/Layout';
import './css/index.css'
export default class index extends React.Component{

    render(){
        return(
          <Layout title="Home" headerText="It's a me, Marcos!">
              <div className="index-container">
                <h3>Lorem ipsum etc, etc, etc.</h3>
                Github, twitter, LinkedIn, Email <br/> 
              </div>
          </Layout>
        )
    }
}