import React from 'react';
import Layout from '../components/Layout/Layout';
import { Projects } from '../containers/projects/projects'
import { Contact } from '../containers/contact/contact'
import { Presentation } from '../containers/presentation/presentation'
import { About } from '../containers/about/about'
import './css/index.css'
export default function index(props) {

  return (
    <Layout title="Home">
      <div className="index-container">
		<Presentation />
        <Projects images={props.data  }/>
		<About />
		<Contact />
      </div>
    </Layout>
  )
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