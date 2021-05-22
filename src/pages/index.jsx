import React from 'react';
import Layout from '../components/Layout/Layout';
import { Projects } from '../containers/projects/projects'
import { Contact } from '../containers/contact/contact'
import { Presentation } from '../containers/presentation/presentation'
import { About } from '../containers/about/about'
import './index.css'
export default function index() {

  return (
    <Layout title="Home">
      <div className="index-container">
        <Presentation />
        <Projects />
        <About />
        <Contact />
        <p>Made with Gatsby. Icons by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/freepik">Eucalyp</a></p>
      </div>
    </Layout>
  )
}
