import React from 'react';
import { Link } from "gatsby";
import { Card, CardImageHeader, CardBody, CardFooter } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import Img from 'gatsby-image';
import projectsContent from '../../../content/portfolio/projects.json';
import './projects.css'

export function Projects(props) {
	const { images, maxProjects } = props;
	const projectCards = projectsContent.map((cardContent, index) => {
		if(index > parseInt(maxProjects)) return (<></>);
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

	return (
		<section id="projects">
			<h1>Projects I'm working on</h1>
			<div className="card-layout">
				{projectCards}
			</div>
			<Link to="/projects">More projects here!</Link>
		</section>
	)

}

