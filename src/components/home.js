import React, { Component } from 'react';
import logo from '../assets/images/logo.jpg';
import MovieSearch from './movie_search';
import Latest from './latest';

class Home extends Component {
  render() {
    return (
    	<div>
    		<div className="div-center">
	      	<img src={logo} className="app-logo" alt="logo" />
	        <h1 className="app-title">Welcome to HollyPedia</h1>
	        <p className="title-greeting">Enjoy and Grow your <u>HollyWood</u> knowledge</p>
	      </div>
	      <div className="div-center">
	      	<MovieSearch />
	      </div>
	      <div className="div-center">
	      	<Latest />
	      </div>
    	</div>
    );
  }
}

export default Home;
