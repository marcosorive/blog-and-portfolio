import React from 'react';
import Layout from '../components/Layout/Layout';
import {Card} from '../components/Card/Card';
import {Button} from '../components/Button/Button';
import './css/portfolio.css'
export default class portfolio extends React.Component{

    render(){
        return(
			<Layout title="Portfolio">
				<div className="card-layout">
				<Card>
					<h3 >Switch calendar</h3>
					<a href="http://switchcalendar.com" rel="noopener noreferrer" target="_blank"></a>
					<p ><br/>Web app to keep track the Nintendo Switch games releases.<br/>
						Stack: Python, Django, MySQL and MDBootstrap.</p>
					<Button to="https://switchcalendar.pythonanywhere.com">Demo</Button>
				</Card>

				<Card>
					<h3 >Torky</h3>
					<a href="https://marcosorive.github.io/torky/" rel="noopener noreferrer" target="_blank"></a>
					<p ><br/>Videogame price comparator for Spanish stores. Uses webscrapping and Amazon API.<br/>
						Stack: Python, Flask, ReactJS, Bootstrap.</p>
					<Button to="https://marcosorive.github.io/torky/">Demo</Button>
				</Card>

				<Card>
					<h3 >Another taco, please!</h3>
					<a href="https://marcosorive.github.io/anothertacoplease/" rel="noopener noreferrer" target="_blank"></a>
					<p><br/>Frontend project for tacofancy-api, displays random taco recipes.<br/>
						Stack: ReactJS and MDBootstrap.</p>
					<Button to="https://marcosorive.github.io/anothertacoplease/">Demo</Button>
				</Card>

				<Card >
					<h3 >Astronomic picture of the day</h3>
					<a href="https://marcosorive.github.io/apod-react/" rel="noopener noreferrer" target="_blank"></a>
					<p ><br/>React project that displays NASA's Astronomic picture of the day<br/>
						Stack: ReactJS and Bootstrap.</p>
					<Button to="https://marcosorive.github.io/apod-react/">Demo</Button>
				</Card>
				</div>
			</Layout>
        )
    }
}