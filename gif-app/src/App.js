import React from 'react';
import './App.css';
import Nav from "./Nav.js";
import SearchForm from "./SearchForm.js";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			gifs: []
		}
	}

	async apiCall(e) {
		e.preventDefault();
		let zip = e.target.elements.ZipInput.value;
		console.log(zip);
	}
	render() {
		return (
			<div className="app-container">
			  <Nav />
			  <SearchForm apiCall={this.apiCall}/>
			</div>
		);
	}
}

export default App;
