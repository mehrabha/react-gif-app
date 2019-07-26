import React, { Component } from 'react';
import './Gif.css'

class Gifs extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div className="info-container">
			  {this.props.gifs.map(gif => (
			  	  <div className="info-element">Gif</div>
			  ))}
			</div>
		);
	}
};

export default Gifs;
