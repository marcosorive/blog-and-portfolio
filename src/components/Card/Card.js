import React from 'react';
import './Card.css'

export function Card(props){
    return(
        <div className="card-container">
            {props.children}
        </div>
    )
}

export function CardImageHeader(props){
    return(
        <div className="card-image-header">
            {props.children}
        </div>
    )
}

export function CardBody(props){
    return(
        <div className="card-body">
            {props.children}
        </div>
    )
}

export function CardFooter(props){
    return(
        <div className="card-footer">
            {props.children}
        </div>
    )
}