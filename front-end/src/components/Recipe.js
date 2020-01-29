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
	}
	componentDidMount() {
		let id = this.props.match.params.id
		axios.get('http://localhost:8000/recipes/' + id)
			.then(res => {
				this.setState({ data: res.data })
			})
	}
	render() {
		
		return(
			<div className='recipe-container'>
				<h1>{this.state.data.description}</h1>
			</div>
		)
	}
}

export default Recipe