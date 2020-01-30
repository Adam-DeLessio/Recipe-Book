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
			description: '',
			ingredient: ''
		}
		this.newName = this.newName.bind(this)
		this.newDescription = this.newDescription.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.addIngredient = this.addIngredient.bind(this)
		this.submitIng = this.submitIng.bind(this)
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
	addIngredient(event) {
		this.setState({ ingredient: event.target.value })
	}
	submitIng() {
		let ingList = document.querySelector('.ing-list')
		let newIng = document.createElement('li')
		newIng.innerHTML = this.state.ingredient
		ingList.appendChild(newIng)
		this.setState({ ingredient: '' })
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
					<input
						className='recipe-name input'
						placeholder='Recipe Name'
						value={this.state.name}
						onChange={this.newName}
						required
					/>
					<select id='select-genre' className='selections' required>{selections}</select>
					
					<div className='add-methods'>
						<ul className='ing-list'></ul>
						<input 
							className='add-ingredient'
							placeholder='New Ingredient'
							value={this.state.ingredient}
							onChange={this.addIngredient}
						/>
						<button className='submit-ing' onClick={this.submitIng}>Add Ingredient</button>
					</div>

					<button type='submit' className='button'>Add Recipe</button>
				</form>

				<Link to='/'><div className='back-button'></div></Link>
			</div>
		)
	}
}

export default AddRecipe