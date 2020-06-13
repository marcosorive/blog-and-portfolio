import React from 'react'
import { Navbar } from "../Navbar/Navbar";
import {Header} from '../Header/Header';
import './Layout.css'
class Layout extends React.Component {
  render() {
    const { title, headerText ,children } = this.props
    return (
      <div style={ title==="Home" ? styles.homeContainer : undefined}>
        <Navbar brand="" backgroundColor="#45b649"/>
        <Header headerText={headerText ? headerText : title}/>
        {children}
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
