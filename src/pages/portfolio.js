import React from 'react';
import Layout from '../components/Layout/Layout';
import {Card,CardHeader,CardBody,CardFooter} from '../components/Card/Card';
import {Button} from '../components/Button/Button';
import './css/portfolio.css'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default class portfolio extends React.Component{
    render(){
        return(
			<Layout title="Portfolio">
				<h1 className="text-center">Personal projects</h1>
				<div className="card-layout">
					<Card>
						<CardHeader>Switch calendar</CardHeader>
						<CardBody>
							<Img fluid={this.props.data.nSwitch.childImageSharp.fluid} alt="Nintendo switch"/>
							<ul>
								<li>Web app to keep track the Nintendo Switch games releases.</li>
								<li>Stack: Python, Django, MySQL and MDBootstrap.</li>
							</ul>
						</CardBody>
						<CardFooter>
							<Button to="https://switchcalendar.pythonanywhere.com">Demo</Button>
							<Button to="https://github.com/marcosorive/switchcalendar">Code</Button>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>Torky</CardHeader>
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
						<CardHeader>Another taco, please!</CardHeader>
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
						<CardHeader>Astronomic picture of the day</CardHeader>
						<CardBody>
						<Img fluid={this.props.data.apodReact.childImageSharp.fluid} alt="Apod React"/>
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