import React, { Component } from 'react';
import "./SearchForm.css";

class SearchForm extends Component{
    constructor() {
		super();
		this.state = {
		
		}
    }

    render() {
        return (
            <div className="GifSearchForm">
              <form onSubmit={this.handleSubmit}>
                <label>
                  Search:
                  <input type="text" name="cityInput" onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Search" />
              </form>
            </div>
        );
    }
};

export default SearchForm;