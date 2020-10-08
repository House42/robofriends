import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

// STATE= The description of your App, an object that describes your application:
// STATE =CAN CHANGE: Lives in parent component that tells child component what properties(prop)
// PROPS= Pure function that recieve something and return something. Never Changes. Comes out of the result of STATE

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots:[],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => {this.setState({ robots: users})})
	}
			// USE the below syntax when creating own methods in state with react
	onSearchChange = (event) => {
			this.setState({ searchfield: event.target.value })
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		 return !robots.length ?
			<h1 className='tc'> Taihoe Ake </h1> :
		(
			<div className='tc'>
				<h1 className='f1'>RoboPals</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
					<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;