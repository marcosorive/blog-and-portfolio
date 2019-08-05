import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import '../css/index.css'
export default class index extends React.Component{

    render(){
        return(
          <div className="index-container">
              {/* <SEO
                  title={siteTitle}
                  keywords={[`blog`, `gatsby`, `javascript`, `react`]}
              /> */}
              <h1>It's a me, Marcos!</h1>
              <h3>Lorem ipsum etc, etc, etc.</h3>
              Github, twitter, LinkedIn, Email  
          </div>
        )
    }
}