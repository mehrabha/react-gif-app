import React, { Component } from 'react';
import "./SearchForm.css";

class SearchForm extends Component{
    render() {
        return (
            <div className="GifSearchForm">
              <form onSubmit={this.props.apiCall}>
                <input type="text" name="Input"/>
                <input type="submit" value="Search" />
              </form>
            </div>
        );
    }
};

export default SearchForm;