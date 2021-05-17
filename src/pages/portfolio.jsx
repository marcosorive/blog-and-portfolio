import React from 'react';
import Layout from '../components/Layout/Layout';
import {Card,CardImageHeader,CardBody,CardFooter} from '../components/Card/Card';
import {Button} from '../components/Button/Button';
import './css/portfolio.css'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import projectsContent from '../../content/portfolio/projects.json';
import experiencesContent from '../../content/portfolio/experience.json';

export default class Portfolio extends React.Component{	

	constructor(props){
		super(props)
		this.state = {
			cards: undefined,
			experiences: undefined
		}
		this.setProjectCardsContent = this.setProjectCardsContent.bind(this);
		this.setExperiencieCardsContent = this.setExperiencieCardsContent.bind(this);
	}

	componentDidMount(){
		this.setProjectCardsContent();
		this.setExperiencieCardsContent();
	}

    render(){
        return(
			<Layout title="Portfolio">
				<div className="card-layout">
					{this.state.cards}
				</div>
				<hr className="portfolio-hr"/>
				<h1 className="text-center">Professional experience</h1>
				<div className="card-layout">
					{this.state.experiences}
				</div> 
			</Layout>
        )
	}

	setProjectCardsContent(){
		const cards = projectsContent.map(cardContent => {
			return(
				<Card key={cardContent.title}>
					<CardImageHeader>
						{ cardContent.image ?
							<Img fluid={this.props.data[cardContent.image].childImageSharp.fluid} alt={cardContent.altImage}/> :
							<></>
						}						
					</CardImageHeader>
					<CardBody>
						<h2>{cardContent.title}</h2>
						<div className="card-body-stack">{cardContent.stack}</div>
						<hr className="card-body-hr"/>
						<p className="card-body-description" dangerouslySetInnerHTML={ { __html: cardContent.description } }></p>						
					</CardBody>
					<CardFooter>
						{cardContent.buttons.map(button => {
							return <Button key={button.text} to={button.url}>{button.text}</Button>
						})}
					</CardFooter>				
				</Card>
			)
		})
		this.setState({
			cards: cards
		})
	}

	setExperiencieCardsContent(){
		const experiences = experiencesContent.map(cardContent => {
			return(
				<Card key={cardContent.image}>
					<CardImageHeader>
						{ cardContent.image ?
							<Img fluid={this.props.data[cardContent.image].childImageSharp.fluid} alt={cardContent.altImage}/> :
							<></>
						}						
					</CardImageHeader>
					<CardBody>
						<h2>{cardContent.title}</h2>
						<div className="card-body-stack">{cardContent.stack}</div>
						<hr className="card-body-hr"/>
						<p className="card-body-description" dangerouslySetInnerHTML={ { __html: cardContent.description } }></p>						
					</CardBody>
					<CardFooter>
						{cardContent.buttons.map(button => {
							return <Button key={button.text} to={button.url}>{button.text}</Button>
						})}
					</CardFooter>				
				</Card>
			)
		})
		this.setState({
			experiences: experiences
		})
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
	  torkynative: file(relativePath: {eq:"torkynative.jpg"}){
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
	  hotfeet: file(relativePath: {eq:"hotfeet.png"}){
		childImageSharp{
		  fluid(maxWidth: 1000){
			  ...GatsbyImageSharpFluid
		  }
		}
	  }
	  navbar: file(relativePath: {eq:"navbar.png"}){
		childImageSharp{
		  fluid(maxWidth: 1000){
			  ...GatsbyImageSharpFluid
		  }
		}
	  }
	actasks: file(relativePath: {eq:"actasks.png"}){
		childImageSharp{
			fluid(maxWidth: 1000){
				...GatsbyImageSharpFluid
			}
		}
	}
	adidas: file(relativePath: {eq:"adidas.jpg"}){
		childImageSharp{
			fluid(maxWidth: 1000){
				...GatsbyImageSharpFluid
			}
		}
	}
  }
`