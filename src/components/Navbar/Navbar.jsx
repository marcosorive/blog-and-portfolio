import React from 'react';
import {Link} from 'gatsby';

import './Navbar.scss'

export function Navbar (props){

    return(
    <nav className="nav__wrapper">
        {props.links.map((link) =>{
            if(link.link.startsWith("#")){
                return <a className="nav__link" key={link.text} href={`/${link.link}`} >{link.text}</a>
            }else{
                return(<Link className="nav__link" key={link.text} to={link.link} >{link.text}</Link>);
            }
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