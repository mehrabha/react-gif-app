import React from 'react';
import './App.css';
import Nav from "./Nav.js";
import SearchForm from "./SearchForm.js";
import Gifs from "./Gif.js"

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			gifs: []
		}
		this.apiCall = this.apiCall.bind(this);
	}

	async apiCall(e) {
		e.preventDefault();
		let searchValue = e.target.elements.Input.value;
		
		let link = "http://api.giphy.com/v1/gifs/search?q=" + searchValue + "&api_key=82LALbYxnZQq7yIrJ6TlQ8k7BiOQTt3D";


		const that = this;
		fetch(link)
		.then(res => res.json())
		.then(json => {
			this.setState( {
				gifs: json
			})
		})
		.catch(function() {
			that.setState({
				gifs: []
			})
		})
		console.log(this.state.gifs);
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
