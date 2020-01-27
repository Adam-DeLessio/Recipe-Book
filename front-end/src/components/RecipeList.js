import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RecipeList.css'
import axios from 'axios'


class RecipeList extends Component {
	componentDidMount() {
		axios.get('localhost:8000')
	}
	render() {
		return(
			<div className='recipelist-container'>
				<ul className='recipe-list'>{}</ul>
				<Link className='add-recipe add'><div>+</div></Link>
			</div>

		)
	}
}

export default RecipeList