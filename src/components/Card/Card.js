import React from 'react';
import './Card.css'
export function Card(props){
    return(
        <div className="card-container">
            {props.children}
        </div>
    )
}