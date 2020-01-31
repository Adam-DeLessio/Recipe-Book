import React, { Component } from 'react'
import './Recipe.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Recipe extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			ingredients: []
		}
		this.onClick = this.onClick.bind(this)
	}
	componentDidMount() {
		let id = this.props.match.params.id
		axios.get('http://localhost:8000/recipes/' + id)
			.then(res => {
				this.setState({ data: res.data })
				this.setState({ ingredients: res.data.ings })
			})
	}
	onClick() {
		let id = this.props.match.params.id
		axios.delete('http://localhost:8000/recipes/' + id)
	}
	render() {	
		let name = this.props.match.params.name
		let ings = this.state.ingredients.map(ing => {
			return(
				<li className='recipe-ing' key={ing}>{ing}</li>
			)
		})
		return(
			<div className='recipe-container'>
				<header className='recipe-header'>
					<h2 className='name'>{name}</h2>
					<button className='delete-recipe' type='button' onClick={this.onClick}>DELETE</button>
				</header>
				<p className='recipe-description'>{`"${this.state.data.description}"`}</p>

				<ul className='ings-list'>{ings}</ul>
				<ul className='ings-list2'>{}</ul>

				<h3 className='instructions'>Instructions:</h3>
				<p className='recipe-process'>{this.state.data.process}</p>
				<Link to='/'><div className='back-button'></div></Link>
			</div>
		)
	}
}

export default Recipe