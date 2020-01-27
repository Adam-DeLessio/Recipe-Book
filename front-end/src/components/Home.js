import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

class Home extends Component {
	render() {
		return(
			<div className='home-container'>
				<div className='menu-icon'>
					<div className='menu-bar'></div>
					<div className='menu-bar'></div>
					<div className='menu-bar'></div>
				</div>
				<hr></hr>
				<section className='genre-body'>
					<div className='dinner'>Dinner</div>
					<div className='add-genre'>+</div>
				</section>
			</div>
		)
	}
}

export default Home