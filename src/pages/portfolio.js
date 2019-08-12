import React from 'react';
import Layout from '../components/Layout/Layout';
import {Card,CardImageHeader,CardBody,CardFooter} from '../components/Card/Card';
import {Button} from '../components/Button/Button';
import './css/portfolio.css'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default class portfolio extends React.Component{
    render(){
        return(
			<Layout title="Portfolio">
				<div className="card-layout">
					<Card>
						<CardImageHeader><Img fluid={this.props.data.nSwitch.childImageSharp.fluid} alt="Nintendo switch"/></CardImageHeader>
						<CardBody>
							<h2>Switch Calendar</h2>
							<div className="card-body-stack">Python, Django, MySQL and MDBootstrap.</div>
							<hr className="card-body-hr"/>
							<p className="card-body-description">Web app to keep track the Nintendo Switch games releases.</p>						
						</CardBody>
						<CardFooter>
							<Button to="https://switchcalendar.pythonanywhere.com">Demo</Button>
							<Button to="https://github.com/marcosorive/switchcalendar">Code</Button>
						</CardFooter>
					</Card>
					<Card>
						<CardImageHeader>Torky</CardImageHeader>
						<CardBody>
						
						<ul>
							<li>Videogame price comparator for Spanish stores. Uses webscrapping and Amazon API.</li>
							<li>Stack: Python, Flask, ReactJS, Bootstrap.</li>
						</ul>
						</CardBody>
						<CardFooter>
							<Button to="https://marcosorive.github.io/torky/">Demo</Button>
						</CardFooter>
					</Card>
					<Card>
						<CardImageHeader>Another taco, please!</CardImageHeader>
						<CardBody>
						<a href="https://marcosorive.github.io/anothertacoplease/" rel="noopener noreferrer" target="_blank"></a>
						<ul>
							<li>Frontend project for tacofancy-api, displays random taco recipes.</li>
							<li>Stack: ReactJS and MDBootstrap.</li>
						</ul>
						</CardBody>
						<CardFooter>
							<Button to="https://marcosorive.github.io/anothertacoplease/">Demo</Button>
						</CardFooter>
					</Card>
					<Card >
						<CardImageHeader><Img fluid={this.props.data.apodReact.childImageSharp.fluid} alt="Apod React"/> </CardImageHeader>
						<CardBody>
						Astronomic picture of the day
						<ul>
							<li>React project that displays NASA's Astronomic picture of the day</li>
							<li>Stack: ReactJS and Bootstrap.</li>
						</ul>
						</CardBody>
						<CardFooter>
							<Button to="https://marcosorive.github.io/apod-react/">Demo</Button>
						</CardFooter>
					</Card> 
				</div>
				<hr className="portfolio-hr"/>
				<h1 className="text-center">Professional experience</h1>
			</Layout>
        )
    }
}

export const pageQuery = graphql`
query{
	nSwitch: file(relativePath: {eq:"switch_logo.jpg"}){
	  childImageSharp{
		fluid(maxWidth: 1000){
			...GatsbyImageSharpFluid
		}
	  }
	}
	apodReact: file(relativePath: {eq:"apod.png"}){
		childImageSharp{
		  fluid(maxWidth: 1000){
			  ...GatsbyImageSharpFluid
		  }
		}
	  }
  }
`