import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	render() {
		return(
			<div className='home-container'>
				<Link to='/addgenre/'className='add-genre add'><div>+</div></Link>
			</div>
		)
	}
}

export default Home


