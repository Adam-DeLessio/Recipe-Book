import React, { Component } from 'react'
import './AddRecipe.css'
import axios from 'axios'

class AddRecipe extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			description: ''
		}
		this.newName = this.newName.bind(this)
		this.newDescription = this.newDescription.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	newName(event) {
		this.setState({ name: event.target.value })
	}
	newDescription(event) {
		this.setState({ description: event.target.value })
	}
	onSubmit(event) {
		event.preventDefault()
		const newRecipe = {
			name: this.state.name,
			description: this.state.description
		}
		axios.post('http://localhost:8000/recipes/', newRecipe)
		console.log(newRecipe)
	}
	render() {
		return(
			<form onSubmit={this.onSubmit}>
				<input className='recipe-name' placeholder='Recipe Name' value={this.state.name} onChange={this.newName}/>
				<input className='recipe-describe' placeholder='Recipe Describe' value={this.state.description} onChange={this.newDescription}/>
				<button type='submit' className='button'>Add Recipe</button>
			</form>
		)
	}
}

export default AddRecipe