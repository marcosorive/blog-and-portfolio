import React from 'react';
import './Header.css'

export class Header extends React.Component{

    render(){
        return(
            <header>
                <h1>{this.props.headerText}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="white" points="0,100 100,0 100,100"/>
                </svg>
            </header>
        )
    }
}