import React, { Component } from 'react'
import './RecipeList.css'



class RecipeList extends Component {
	render() {
		return(
			<ul>
				<li className='recipe'>Beef Wellington</li>
				<li className='recipe'>Carbonara</li>
				<li className='recipe'>Chicken Alfredo</li>
			</ul>
		)
	}
}

export default RecipeList