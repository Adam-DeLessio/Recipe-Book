import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import User from './User'
import Home from './Home'
import RecipeList from './RecipeList'
import AddRecipe from './AddRecipe'
import AddGenre from './AddGenre'
import Recipe from './Recipe'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div className='main-container'>
        <header className='menu-icon'>
          <div className='menu-bar'></div>
          <div className='menu-bar'></div>
          <div className='menu-bar'></div>
        </header>
        <hr></hr>
        
        <Route 
          path='/'
          exact
          render={props => (
            <Home 
              {...props} 
            />
          )} 
        />

        <Route 
          path='/RecipeList/:id/:name'
          render={props => (
            <RecipeList 
              {...props} 
            />
          )} 
        />

        <Route
          path='/AddRecipe'
          render={props => (
            <AddRecipe
              {...props}
            />
          )}      
        />

        <Route
          path='/AddGenre'
          render={props => (
            <AddGenre
              {...props}
            />
          )}
        />

        <Route
          path='/Recipe/:id'
          render={props => (
            <Recipe
              {...props}
            />
          )}
        />

      </div>
    )
  }
}

export default App