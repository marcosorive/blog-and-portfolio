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
						<CardImageHeader><Img fluid={this.props.data.ubureactvr.childImageSharp.fluid} alt="Nintendo switch"/></CardImageHeader>
						<CardBody>
							<h2>UBU ReactVR</h2>
							<div className="card-body-stack">Node.js with typescript, React, React Native, React360.</div>
							<hr className="card-body-hr"/>
							<p className="card-body-description">My final degree project. Web, smartphone and VR/300 apps with a Node.js server. Manage and inspect 3D models in VR. Made in colaboration with <a href="https://hpscds.com/" rel="noopener noreferrer" target="_blank">HP SCDS.</a></p>						
						</CardBody>
						<CardFooter><Button to="https://hpscds.com/observatorio_proyectos/reactvr/">More info</Button></CardFooter>				
					</Card>
					<Card>
						<CardImageHeader><Img fluid={this.props.data.nSwitch.childImageSharp.fluid} alt="Nintendo switch calendar"/></CardImageHeader>
						<CardBody>
							<h2>Switch Calendar</h2>
							<div className="card-body-stack">Python, Django, MySQL, MDBootstrap.</div>
							<hr className="card-body-hr"/>
							<p className="card-body-description">Web app to keep track the Nintendo Switch games releases. Users can register/log in and create their own calendar.</p>						
						</CardBody>
						<CardFooter>
							<Button to="https://github.com/marcosorive/switchcalendar">Code</Button>
							<Button to="https://switchcalendar.pythonanywhere.com">Demo</Button>
						</CardFooter>
					</Card>
					<Card>
						<CardImageHeader><Img fluid={this.props.data.anotherTaco.childImageSharp.fluid} alt="Another taco, please!"/></CardImageHeader>
						<CardBody>
							<h2>Another taco, please!</h2>
							<div className="card-body-stack">ReactJS, MDBootstrap.</div>
							<hr className="card-body-hr"/>
							<p className="card-body-description">Frontend project for tacofancy-api, displays random taco recipes.</p>
						</CardBody>
						<CardFooter>
							<Button to="https://github.com/marcosorive/anothertacoplease">Code</Button>
							<Button to="https://marcosorive.github.io/anothertacoplease/">Demo</Button>
						</CardFooter>
					</Card>
					<Card >
						<CardImageHeader><Img fluid={this.props.data.apodReact.childImageSharp.fluid} alt="Apod React"/> </CardImageHeader>
						<CardBody>
							<h2>Astronomic picture of the day</h2>
							<div className="card-body-stack">ReactJS, Bootstrap</div>
							<hr className="card-body-hr"/>
							<p className="card-body-description">React project that displays NASA's Astronomic picture of the day</p>
						</CardBody>
						<CardFooter>
							<Button to="https://github.com/marcosorive/apod-react">Code</Button>
							<Button to="https://marcosorive.github.io/apod-react/">Demo</Button>
						</CardFooter>
					</Card> 
					<Card>
						<CardImageHeader><Img fluid={this.props.data.torky.childImageSharp.fluid} alt="Torky"/></CardImageHeader>
						<CardBody>
							<h2>Torky</h2>
							<div className="card-body-stack">Python, Flask, ReactJS, Bootstrap.</div>
							<hr className="card-body-hr"/>
							<p className="card-body-description">Videogame price comparator for Spanish stores. Uses webscrapping and Amazon API.</p>
						</CardBody>
						<CardFooter>
							<Button to="https://github.com/marcosorive/torky-api">Code</Button>
							<Button to="https://marcosorive.github.io/torky/">Demo</Button>
						</CardFooter>
					</Card>
					<Card>
						<CardBody>
							<h2>Blog and portfolio</h2>
							<div className="card-body-stack">Gatsby, Vanilla CSS, Netlify.</div>
							<hr className="card-body-hr"/>
							<p className="card-body-description">This website that you are seeing right now. Serves as my portfolio and blog. </p>
						</CardBody>
						<CardFooter>
							<Button to="https://github.com/marcosorive/blog-and-portfolio">Code</Button>
						</CardFooter>
					</Card> 
				</div>
				<hr className="portfolio-hr"/>
				<h1 className="text-center">Professional experience</h1>
				<div className="card-layout">
					<Card>
						<CardImageHeader><Img fluid={this.props.data.raquel.childImageSharp.fluid} alt="Apod React"/> </CardImageHeader>
						<CardBody>
							<h2>Inmobiliaria Raquel Vázquez</h2>
							<div className="card-body-stack">Python, Django, MySQL, Bootstrap.</div>
							<hr className="card-body-hr"/>
							<p className="card-body-description">Web app for internal data managment. Working with a legacy DB.</p>
						</CardBody>
						<CardFooter>
							<Button to="https://www.inmobiliariaraquelvazquez.com">Visit</Button>
						</CardFooter>
					</Card>
					<Card>
						<CardImageHeader><Img fluid={this.props.data.csa.childImageSharp.fluid} alt="Apod React"/> </CardImageHeader>
						<CardBody>
							<h2>CSA.</h2>
							<div className="card-body-stack">Software developer</div>
							<hr className="card-body-hr"/>
							<p className="card-body-description"> Worked in a legacy ticketing system.</p>
						</CardBody>
						<CardFooter>
							<Button to="https://www.csa.es/">Visit</Button>
						</CardFooter>
					</Card>
					<Card>
						<CardImageHeader><Img fluid={this.props.data.hpscds.childImageSharp.fluid} alt="Apod React"/> </CardImageHeader>
						<CardBody>
							<h2>HP SCDS</h2>
							<div className="card-body-stack">Software engineer.</div>
							<hr className="card-body-hr"/>
							<p className="card-body-description">Developing software for large format printers.</p>
						</CardBody>
						<CardFooter>
							<Button to="https://www.csa.es/">Visit</Button>
						</CardFooter>
					</Card>
				</div>
			</Layout>
        )
    }
}

export const pageQuery = graphql`
query{
	ubureactvr: file(relativePath: {eq:"ubureactvr.png"}){
		childImageSharp{
		  fluid(maxWidth: 1000){
			  ...GatsbyImageSharpFluid
		  }
		}
	  }
	nSwitch: file(relativePath: {eq:"switchcalendar.png"}){
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
	  anotherTaco: file(relativePath: {eq:"tacos.png"}){
		childImageSharp{
		  fluid(maxWidth: 1000){
			  ...GatsbyImageSharpFluid
		  }
		}
	  }
	  torky: file(relativePath: {eq:"torky.png"}){
		childImageSharp{
		  fluid(maxWidth: 1000){
			  ...GatsbyImageSharpFluid
		  }
		}
	  }
	  raquel: file(relativePath: {eq:"raquel.png"}){
		childImageSharp{
		  fluid(maxWidth: 1000){
			  ...GatsbyImageSharpFluid
		  }
		}
	  }
	  csa: file(relativePath: {eq:"csa.jpg"}){
		childImageSharp{
		  fluid(maxWidth: 1000){
			  ...GatsbyImageSharpFluid
		  }
		}
	  }
	  hpscds: file(relativePath: {eq:"hpscds.png"}){
		childImageSharp{
		  fluid(maxWidth: 1000){
			  ...GatsbyImageSharpFluid
		  }
		}
	  }
  }
`