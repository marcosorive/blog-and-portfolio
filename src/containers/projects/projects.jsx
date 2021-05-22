import React from 'react';
import { Link } from "gatsby";
import { Card, CardImageHeader, CardBody, CardFooter } from '../../components/Card/Card';
import { ExternalLinkButton, InternalLinkButton } from '../../components/Button/Button';
import Img from 'gatsby-image';
import projectsContent from '../../../content/portfolio/projects.json';
import './projects.scss'

export function Projects() {
	const highlightProjects = projectsContent.filter(card => card.highlight);
	const projectCards = buildProjectCards(highlightProjects, false);

	return (
		<section id="projects">
			<h1>Projects I'm working on</h1>
			<div className="projects__card-container">
				{projectCards}
			</div>
			<div className="projects__button-wrapper">
				<Link to="/allProjects" className="projects__button">More projects</Link>
			</div>
		</section>
	)

}

export const buildProjectCards = (cards, withImages = true, images = []) => {
	return cards.map(cardContent => {
		return (
			<Card key={cardContent.title}>
				<CardImageHeader>
					{cardContent.image && withImages ?
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
						return <ExternalLinkButton key={button.text} to={button.url}>{button.text}</ExternalLinkButton>
					})}
				</CardFooter>
			</Card>
		)
	});
}

