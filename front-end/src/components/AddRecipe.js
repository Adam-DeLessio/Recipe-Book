import React, { Component } from 'react'
import './AddRecipe.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class AddRecipe extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			name: '',
			description: ''
		}
		this.newName = this.newName.bind(this)
		this.newDescription = this.newDescription.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	componentDidMount() {
		axios.get('http://localhost:8000/genres/')
		.then(res => {
			this.setState({ data: res.data })
		})
	}
	newName(event) {
		this.setState({ name: event.target.value })
	}
	newDescription(event) {
		this.setState({ description: event.target.value })
	}
	newGenre(event) {
		this.setState({ genre: event.target.value })
	}
	onSubmit(event) {
		var e = document.getElementById("select-genre");
		var value = e.options[e.selectedIndex].value;
		event.preventDefault()
		const newRecipe = {
			name: this.state.name,
			description: this.state.description,
			genre: value
		}
		axios.post('http://localhost:8000/recipes/', newRecipe)
		this.setState({ name: '' })
		this.setState({ description: '' })
	}
	render() {
		let selections = this.state.data.map(genre => {
			return(
				<option value={genre.name} key={genre.id}>{genre.name}</option>
			)
		})
		return(
			<div className='add-recipe-container'>
				<form onSubmit={this.onSubmit}>
					<input className='recipe-name input' placeholder='Recipe Name' value={this.state.name} onChange={this.newName} required/>
					<input className='recipe-describe input' placeholder='Recipe Describe' value={this.state.description} onChange={this.newDescription} required/>
					<select id='select-genre' className='selections' required>{selections}</select>
					<button type='submit' className='button'>Add Recipe</button>
				</form>

				<Link to='/recipelist/'><div className='back-button'></div></Link>
			</div>
		)
	}
}

export default AddRecipe