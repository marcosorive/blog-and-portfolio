import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

export default class portfolio extends React.Component{

    render(){
        const siteTitle = this.props.data.site.siteMetadata.title;
        return(
            <div>
                <Layout location="Index" title="Portfolio">
                <SEO
                    title={siteTitle}
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />                
                    <h2>Projects</h2>
                      {/* Switch Calendar begins  */}
                      <div>
                          <h3 >Switch calendar</h3>
                          <a href="http://switchcalendar.com" rel="noopener noreferrer" target="_blank"></a>
                          <p ><br/>Web app to keep track the Nintendo Switch games releases.<br/>
                            Stack: Python, Django, MySQL and MDBootstrap.</p>
                          <a href="http://switchcalendar.com" rel="noopener noreferrer" target="_blank" >Visit</a>
                      </div>
                      {/* <!--Switch Calendar  ends--> */}

                      {/* <!--Torky begins --> */}
                      <div >
                          <h3 >Torky</h3>
                          <a href="https://marcosorive.github.io/torky/" rel="noopener noreferrer" target="_blank"></a>
                          <p ><br/>Videogame price comparator for Spanish stores. Uses webscrapping and Amazon API.<br/>
                            Stack: Python, Flask, ReactJS, Bootstrap.</p>
                          <a href="https://marcosorive.github.io/torky/" rel="noopener noreferrer" target="_blank" >Visit</a>
                      </div>
                      {/* <!--Torky  ends--> */}

                      {/* <!--Another Taco begins --> */}
                      <div >
                          <h3 >Another taco, please!</h3>
                          <a href="https://marcosorive.github.io/anothertacoplease/" rel="noopener noreferrer" target="_blank"></a>
                          <p ><br/>Frontend project for tacofancy-api, displays random taco recipes.<br/>
                            Stack: ReactJS and MDBootstrap.</p>
                          <a href="https://marcosorive.github.io/anothertacoplease/" rel="noopener noreferrer" target="_blank" >Visit</a>
                      </div>
                      {/* <!--Another Taco  ends--> */}

                      {/* <!--Apod begins --> */}
                      <div >
                          <h3 >Astronomic picture of the day</h3>
                          <a href="https://marcosorive.github.io/apod-react/" rel="noopener noreferrer" target="_blank"></a>
                          <p ><br/>React project that displays NASA's Astronomic picture of the day<br/>
                            Stack: ReactJS and Bootstrap.</p>
                          <a href="https://marcosorive.github.io/apod-react/" rel="noopener noreferrer" target="_blank" >Visit</a>
                      </div>
                      {/* <!--Apod  ends--> */}
                </Layout>
            </div>
        )
    }
}

const style = {
  
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
}`