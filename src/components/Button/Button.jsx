import React from 'react';
import './Button.scss'

export function ExternalLinkButton(props){
    return(
        <a href={props.to} rel="noopener noreferrer" target="_blank">
            <button className="card-button">
                {props.children}
            </button>
        </a>
    )
}

export function InternalLinkButton(props){
    return(
        <a href={props.to} rel="noopener noreferrer" target="_blank">
            <button className="button">
                {props.children}
            </button>
        </a>
    )
}