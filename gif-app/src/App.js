import React from 'react';
import './App.css';
import Nav from "./Nav.js";
import SearchForm from "./SearchForm.js";

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
		<Nav />
		<SearchForm />
      </div>
    );
  }
}

export default App;
