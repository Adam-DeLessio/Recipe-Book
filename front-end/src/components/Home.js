import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

class Home extends Component {
	render() {
		return(
			<div className='home-container'>
				<section className='genre-body'>
					<Link to='/recipelist/'><div className='dinner'>Dinner</div></Link>
					<div className='add-genre'>+</div>
				</section>
			</div>
		)
	}
}

export default Home