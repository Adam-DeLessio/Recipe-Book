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
					<div className='recipe' key={name.id}>
						<Link to={`/recipe/${name.id}`}><li>{name.name}</li></Link>
					</div>
				)
			}
		})
		return(
			<div className='recipelist-container'>
				<ul className='recipe-list'>{names}</ul>
				<Link to='/addrecipe/' className='add-recipe add'><div>+</div></Link>
				<Link to='/'><div className='back-button'></div></Link>
				<button className='delete-genre' type='button' onClick={this.onClick}>DELETE</button>
			</div>

		)
	}
}

export default RecipeList