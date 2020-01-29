import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		axios.get('http://localhost:8000/genres/')
		.then(res => {
			this.setState({ data: res.data })
		})
	}
	render() {
		let genres = this.state.data.map(genre => {
			return(
				<Link className='genre' to={`/recipelist/${genre.name}`} key={genre.id}><li>{genre.name}</li></Link>
			)
		})
		return(
			<div className='home-container'>
				<ul className='genre-list'>{genres}</ul>				
				<Link to='/addgenre/'className='add-genre add'><div>+</div></Link>
			</div>
		)
	}
}

export default Home


