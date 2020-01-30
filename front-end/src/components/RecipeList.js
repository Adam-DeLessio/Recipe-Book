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
		this.onClick = this.onClick.bind(this)
	}
	componentDidMount() {
	  	axios.get('http://localhost:8000/recipes/')
	  	.then(res => {
	  		this.setState({ data: res.data })
	  	})
	}
	onClick() {
		let id = this.props.match.params.id
		axios.delete('http://localhost:8000/genres/' + id)
	}
	render() {
		let genreParam = this.props.match.params.name
		let names = this.state.data.map(name => {
			if (name.genre === genreParam) {
				return(
					<Link className='recipe' key={name.id} to={`/recipe/${name.id}/${name.name}`}><li>{name.name}</li></Link>
				)
			}
		})
		return(
			<div className='recipelist-container'>
				<header className='genre-header'>
					<Link to='/addrecipe/' className='add-recipe'>
						<div className='horizontal'></div>
						<div className='vertical'></div>
					</Link>				
					<h1 className='title'>{genreParam}</h1>
					<button className='delete-genre' type='button' onClick={this.onClick}>DELETE</button>
				</header>
				<ul className='recipe-list'>{names}</ul>
				<Link to='/'><div className='back-button'></div></Link>
			</div>

		)
	}
}

export default RecipeList