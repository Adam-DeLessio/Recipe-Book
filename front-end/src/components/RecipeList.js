import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RecipeList.css'
import axios from 'axios'

class RecipeList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}
	componentDidMount() {
	  	axios.get('http://localhost:8000/recipes/')
	  	.then(res => {
	  		this.setState({ data: res.data })
	  	})
	}
	render() {
		let names = this.state.data.map(name => {
			return(
				<li key={name.id}>{name.name}</li>
			)
		})
		return(
			<div className='recipelist-container'>
				<ul className='recipe-list'>{names}</ul>
				<Link className='add-recipe add'><div>+</div></Link>
			</div>

		)
	}
}

export default RecipeList