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
      <Helmet htmlAttributes={{
        lang: 'en',
      }}>
        <title>{`Marcos Orive - ${title}`}</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Here you can read about my personal projects, blog and contact me!" />
        <meta name="keywords" content="JavaScript, React, Node.js, html, css" />
        <meta name="author" content="Marcos Orive" />
      </Helmet>
      <div className="layout-wrapper">
        <Navbar brand="Marcos Orive" backgroundColor="#ffffff" fontColor="#000000"/>
        <Header headerText={headerText ? headerText : title}/>
        {children}
      </div>
      </>
    )
  }
}
export default Layout
