import React from 'react';
import {Link} from 'gatsby';

import './Navbar.scss'

export function Navbar (props){

    return(
    <nav className="nav__wrapper">
        {props.links.map((node) =>{
            return(<Link className="nav__link" key={node.text} to={node.link} >{node.text}</Link>);
        })}
    </nav>
    )
    
}

Navbar.defaultProps = {
    backgroundColor : 'black',
    fontColor: 'white',
    brand: '',
    links:[
        {text: "Home", link:"/"},
        {text: "Portfolio", link:"/portfolio"},
        {text: "Blog", link:"/blog"},
        {text: "Contact", link:"/contact"}
    ]
}