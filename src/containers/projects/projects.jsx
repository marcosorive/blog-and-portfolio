import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Card, CardImageHeader, CardBody, CardFooter } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import projectsContent from '../../../content/portfolio/projects.json';
import experiencesContent from '../../../content/portfolio/experience.json';
import './projects.css'

export function Projects(props) {
	const { images } = props;
	const projectCards = projectsContent.map(cardContent => {
		return (
			<Card key={cardContent.title}>
				<CardImageHeader>
					{cardContent.image ?
						<Img fluid={images[cardContent.image].childImageSharp.fluid} alt={cardContent.altImage} /> :
						<></>
					}
				</CardImageHeader>
				<CardBody>
					<h2>{cardContent.title}</h2>
					<div className="card-body-stack">{cardContent.stack}</div>
					<hr className="card-body-hr" />
					<p className="card-body-description" dangerouslySetInnerHTML={{ __html: cardContent.description }}></p>
				</CardBody>
				<CardFooter>
					{cardContent.buttons.map(button => {
						return <Button key={button.text} to={button.url}>{button.text}</Button>
					})}
				</CardFooter>
			</Card>
		)
	})

	// const experieneCards = experiencesContent.map(cardContent =>
	// 	<Card key={cardContent.image}>
	// 		<CardImageHeader>
	// 			{cardContent.image ?
	// 				<Img fluid={images[cardContent.image].childImageSharp.fluid} alt={cardContent.altImage} /> :
	// 				<></>
	// 			}
	// 		</CardImageHeader>
	// 		<CardBody>
	// 			<h2>{cardContent.title}</h2>
	// 			<div className="card-body-stack">{cardContent.stack}</div>
	// 			<hr className="card-body-hr" />
	// 			<p className="card-body-description" dangerouslySetInnerHTML={{ __html: cardContent.description }}></p>
	// 		</CardBody>
	// 		<CardFooter>
	// 			{cardContent.buttons.map(button => {
	// 				return <Button key={button.text} to={button.url}>{button.text}</Button>
	// 			})}
	// 		</CardFooter>
	// 	</Card>
	// )

	return (
		<section id="projects">
			<div className="card-layout">
				{projectCards}
			</div>
			{/* <hr className="portfolio-hr" />
			<h1 className="text-center">Professional experience</h1>
			<div className="card-layout">
				{experieneCards}
			</div> */}
		</section>
	)

}

