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
			ing1: this.state.ingredientsArray[0],
			ing2: this.state.ingredientsArray[1],
			ing3: this.state.ingredientsArray[2],
			ing4: this.state.ingredientsArray[3],
			ing5: this.state.ingredientsArray[4],
			ing6: this.state.ingredientsArray[5],
			ing7: this.state.ingredientsArray[6],
			ing8: this.state.ingredientsArray[7],
			ing9: this.state.ingredientsArray[8],
			ing10: this.state.ingredientsArray[9],
			ing11: this.state.ingredientsArray[10],
			ing12: this.state.ingredientsArray[11],
			ing13: this.state.ingredientsArray[12],
			ing14: this.state.ingredientsArray[13],
			ing15: this.state.ingredientsArray[14],
			process: this.state.process
		}
		console.log(this.state.ingredientsArray[0])
		axios.post('http://localhost:8000/recipes/', newRecipe)
		this.setState({ name: '' })
		this.setState({ description: '' })
		this.setState({ ingredientsArray: [] })
		this.setState({ process: '' })
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
					/>
					<button type='submit' className='button'>Add Recipe</button>
				</form>

				<Link to='/'><div className='back-button'></div></Link>
			</div>
		)
	}
}

export default AddRecipe