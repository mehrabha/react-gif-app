import React from 'react';
import './App.css';
import Nav from "./Nav.js";
import SearchForm from "./SearchForm.js";
import Gifs from "./Gif.js"

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			gifs: [],
			loaded: false
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
				gifs: json,
				loaded: true
			})
		})
		.catch(function() {
			that.setState({
				gifs: [],
				loaded: false
			})
		})
	}

	render() {
		return (
			<div className="app-container">
			  <Nav />
			  <div className="gifSearchForm">
			  	<SearchForm apiCall={this.apiCall}/>
			  </div>
			  {this.state.loaded === false ? <p>Gif Not Found</p> : <span></span>}
			  <div className="resultContainer">
			  </div>
			  

			</div>
		);
	}
}

export default App;
