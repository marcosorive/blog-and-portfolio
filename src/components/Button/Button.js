import React from 'react';
import './Button.css'

export function Button(props){
    return(
        <a>
            <button className="button">
                {props.children}
            </button>
        </a>
    )
}