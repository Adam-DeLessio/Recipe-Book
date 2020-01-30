import React, { Component } from 'react'
import './User.css'
import { Link } from 'react-router-dom'

class User extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleSubmit(e) {
		e.preventDefault()
	}
	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input
					className='username'
					placeholder='Username'
					value={this.state.username}
					onChange={this.handleChange}
					required
				/>
				<input
					className='password' 
					placeholder='Password'
					value={this.state.password}
					onChange={this.handleChange}
					required
				/>
			</form>
		)
	}
}

export default User