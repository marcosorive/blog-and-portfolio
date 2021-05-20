import React from 'react';
import './Button.scss'

export function CardButton(props){
    return(
        <a href={props.to} rel="noopener noreferrer" target="_blank">
            <button className="card-button">
                {props.children}
            </button>
        </a>
    )
}

export function Button(props){
    return(
        <a href={props.to} rel="noopener noreferrer" target="_blank">
            <button className="button">
                {props.children}
            </button>
        </a>
    )
}