import React, { Component } from 'react'
import './AddGenre.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class AddGenre extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: ''
		}
		this.newName = this.newName.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	newName(event) {
		this.setState({ name: event.target.value })
	}
	onSubmit(event) {
		event.preventDefault()
		const newGenre = {
			name: this.state.name
		}
		axios.post('http://localhost:8000/genres/', newGenre)
		this.setState({ name: '' })
	}
	render() {
		return(
			<div className='add-genre-container'>
				<form className='genre-form' onSubmit={this.onSubmit}>
					<input className='genre-name input' placeholder='Genre Name' value={this.state.name} onChange={this.newName} required/>
					<button className='button' type='submit'>Add Genre</button>
				</form>
				<Link to='/'><div className='back-button'></div></Link>
			</div>
		)
	}
}

export default AddGenre