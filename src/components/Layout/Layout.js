import React from 'react'
import {Navbar} from '../Navbar/Navbar';
import {Footer} from '../Footer/Footer';
import './Layout.css'
class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <div style={ title==="Home" ? styles.homeContainer : styles.container}>
        <Navbar brand="Marcos Orive"/>
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
  },
  container : {
    
  }
}
export default Layout
