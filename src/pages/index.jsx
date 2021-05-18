import React from 'react';
import Layout from '../components/Layout/Layout';
import { Button } from '../components/Button/Button';
import { Projects } from '../containers/projects'
import './css/index.css'
export default function index(props) {

  return (
    <Layout title="Home" headerText="Hi, I'm Marcos">
      <div className="index-container">
        <div className="index-text-container">
          <div className="index-cheer">I'm a software engineer based in Spain</div>
          <div className="index-description">Here you can check out some of my work, my blog posts and social links.</div>
          <div className="index-description">Feel free to contact me if you like.</div>
        </div>
        <div className="index-social-links">
          <Button to="https://github.com/marcosorive">Github</Button>
          <Button to="https://twitter.com/marcosorive">twitter</Button>
          <Button to="https://linkedin.com/in/marcosorive">LinkedIn</Button>
          <Button to="mailto:marcos@orive.me">Email</Button>
        </div>
        <Projects images={props.data  }/>
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