import React from 'react'
import { Navbar } from "../Navbar/Navbar";
import { Header } from '../Header/Header';
import { Helmet } from "react-helmet";

function Layout(props) {
  const { title, headerText, children } = props
  const navBarLinks = [
    {
      text: 'About',
      link: '#about'
    },
    {
      text: 'Projects',
      link: '#projects'
    },
    {
      text: 'Contact',
      link: '#contact'
    },
    {
      text: 'Blog',
      link: '/blog'
    }
  ];
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
      <Navbar brand="Hi, I'm Marcos!" backgroundColor="#dedede" fontColor="#000000" links={navBarLinks} />
      {headerText ? <Header headerText={headerText} /> : <></>}
      {children}
    </>
  )
}
export default Layout
