import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'
import './App.css';

// STATE= The description of your App, an object that describes your application:
// STATE =CAN CHANGE: Lives in parent component that tells child component what properties(prop)
// PROPS= Pure function that recieve something and return something. Never Changes. Comes out of the result of STATE

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots:robots,
			searchfield: ''
		}
	}
			// USE the below syntax when creating own methods in state with react
	onSearchChange = (event) => {
			this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return(
			<div className='tc'>
				<h1 className='f1'>RoboPals</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/>
			</div>
			);
		}
}

export default App;