import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

class Home extends Component {
	render() {
		return(
			<div className='home-container'>
				<section className='genre-body'>
					<Link className='dinner' to='/recipelist/'><div>Dinner</div></Link>
					
				</section>
			</div>
		)
	}
}

export default Home


// <Link className='add-genre add'><div>+</div></Link>