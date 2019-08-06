import React from 'react'
import {Navbar} from '../Navbar/Navbar';
import {Footer} from '../Footer/Footer';
import {Helmet} from "react-helmet";
import SEO from '../seo';
import './Layout.css'
class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <div style={ title==="Home" ? styles.homeContainer : undefined}>
        <Navbar/>
          <SEO
          title={title}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
        {children}
        <Footer/>
      </div>
    )
  }
}

const styles = {
  homeContainer: {
    height:"100%",
    width:"100%"
  }
}
export default Layout
