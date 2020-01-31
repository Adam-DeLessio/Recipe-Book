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
			ingredient: '',
			ingredientsArray: [],
			process: ''
		}
		this.handleChange = this.handleChange.bind(this)
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
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	onSubmit(event) {
		var e = document.getElementById("select-genre");
		var value = e.options[e.selectedIndex].value;
		event.preventDefault()
		const newRecipe = {
			name: this.state.name,
			description: this.state.description,
			genre: value,
			ings: this.state.ingredientsArray,
			process: this.state.process
		}
		axios.post('http://localhost:8000/recipes/', newRecipe)
		this.setState({ name: '' })
		this.setState({ description: '' })
		this.setState({ ingredientsArray: [] })
		this.setState({ process: '' })
		let removeIng = document.querySelector('.ing-list')
		while(removeIng.firstChild) {
			removeIng.removeChild(removeIng.firstChild)
		}
	}
	addIngredient(event) {
		this.setState({ ingredient: event.target.value })
	}
	submitIng() {
		let ingList = document.querySelector('.ing-list')
		let newIng = document.createElement('li')
		newIng.setAttribute('class', 'ing')
		newIng.innerHTML = this.state.ingredient
		ingList.appendChild(newIng)
		this.setState({ ingredientsArray: [...this.state.ingredientsArray, newIng.innerHTML] })
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
						name='name'
						placeholder='Recipe Name'
						value={this.state.name}
						onChange={this.handleChange}
						required
					/>
					<select id='select-genre' className='selections' required>{selections}</select>
					<textarea
						className='description'
						name='description'
						placeholder='Description'
						value={this.state.description}
						onChange={this.handleChange}
						required
					/>

					<div className='add-methods'>
						<div className='add-ing-container'>
							<input 
								className='add-ingredient'
								placeholder='New Ingredient'
								value={this.state.ingredient}
								onChange={this.addIngredient}
							/>
							<div className='submit-ing' onClick={this.submitIng}>Add</div>
						</div>
						<ul className='ing-list'></ul>
					</div>

					<textarea
						className='process'
						name='process'
						placeholder="How it's done..."
						value={this.state.process}
						onChange={this.handleChange}
						required
					/>
					<button type='submit' className='button'>Add Recipe</button>
				</form>

				<Link to='/'><div className='back-button'></div></Link>
			</div>
		)
	}
}

export default AddRecipe