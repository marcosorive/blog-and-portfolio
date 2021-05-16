import React from 'react'
import { Navbar } from "../Navbar/Navbar";
import {Header} from '../Header/Header';
import { Helmet } from "react-helmet";
import './Layout.css'
class Layout extends React.Component {
  render() {
    const { title, headerText ,children } = this.props
    return (
      <>
      <Helmet>
        <title>{`Marcos Orive - ${title}`}</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Here you can read about my personal projects, blog and contact me!" />
        <meta name="keywords" content="JavaScript, React, Node.js, html, css" />
        <meta name="author" content="Marcos Orive" />
      </Helmet>
      <div style={ title==="Home" ? styles.homeContainer : undefined}>
        <Navbar brand="" backgroundColor="#45b649"/>
        <Header headerText={headerText ? headerText : title}/>
        {children}
      </div>
      </>
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
