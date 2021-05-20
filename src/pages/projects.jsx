import React from 'react';
import Layout from '../components/Layout/Layout';
import projectsContent from "../../content/portfolio/projects.json";
import { buildProjectCards } from "../containers/projects/projects";

export default function Projects(props){
    console.log(props.data)
    return <Layout title="Projects">
        <h1> All the projects I've worked on</h1>
        <p>That includes the ones that I did as a beginner, abandoned ones, etc. Please take that into consideration.</p>
        {buildProjectCards(projectsContent, true, props.data)}
        </Layout>
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
	athos: file(relativePath: {eq:"athos.png"}){
		childImageSharp{
			fluid(maxWidth: 1000){
				...GatsbyImageSharpFluid
			}
		}
	}
  }
`