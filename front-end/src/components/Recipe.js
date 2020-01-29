import React, { Component } from 'react'
import './Recipe.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Recipe extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
		this.onClick = this.onClick.bind(this)
	}
	componentDidMount() {
		let id = this.props.match.params.id
		axios.get('http://localhost:8000/recipes/' + id)
			.then(res => {
				this.setState({ data: res.data })
			})
	}
	onClick() {
		let id = this.props.match.params.id
		axios.delete('http://localhost:8000/recipes/' + id)

	}
	render() {	
		return(
			<div className='recipe-container'>
				<h1>{this.state.data.description}</h1>
				<h2>{this.state.data.genre}</h2>
				<button className='delete-recipe' type='button' onClick={this.onClick}>DELETE</button>

				<Link to='/recipelist/'><div className='back-button'></div></Link>
			</div>
		)
	}
}

export default Recipe