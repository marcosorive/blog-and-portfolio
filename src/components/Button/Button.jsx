import React from 'react';
import './Button.css'

export function Button(props){
    return(
        <a href={props.to} rel="noopener noreferrer" target="_blank">
            <button className="button">
                {props.children}
            </button>
        </a>
    )
}