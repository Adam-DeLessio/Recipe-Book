import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import User from './User'
import Home from './Home'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div className='main-container'>
        <Home />
      </div>
    )
  }
}

export default App