import React, {useState} from 'react';
import './Navbar.css'
import {Link} from 'gatsby';

export function Navbar (props){

    const [isMenuClosed, setIsMenuClosed] = useState(true);

    const toggleMenu = () => {
        setIsMenuClosed(!isMenuClosed);
    }

    return(
        <div className="nav-container" style={{backgroundColor: props.backgroundColor, color: props.fontColor}}>
        <nav>
            <div className="nav-brand">{props.brand}</div>
            <div className="nav-hamburguer-icon" onClick={toggleMenu}>☰</div>
            <div className="nav-links">
                {props.links.map((node) =>{
                    return(<Link key={node.text} to={node.link} style={{color: props.fontColor}}>{node.text}</Link>);
                })}
            </div> 
        </nav>
        <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`} style={{backgroundColor: props.backgroundColor}}>
            <div className="overlay-buttonClose" onClick={toggleMenu}><span>&times;</span></div>
            <div className="overlay-menu-wrapper">
                <div className="overlay-menu">
                    {props.links.map((node) =>{
                        return(<Link key={node.text} to={node.link} onClick={toggleMenu} className="overlay-menu-item" style={{color: props.fontColor}}>{node.text}</Link>);
                    })}
                </div>
            </div>
        </div>
    </div>
    )
    
}

Navbar.defaultProps = {
    backgroundColor : 'black',
    fontColor: 'white',
    brand: 'Navbar',
    links:[
        {text: "Home", link:"/"},
        {text: "Portfolio", link:"/portfolio"},
        {text: "Blog", link:"/blog"},
        {text: "Contact", link:"/contact"}
    ]
}