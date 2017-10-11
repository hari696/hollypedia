import React, { Component } from 'react';
import logo from '../assets/images/logo.jpg';
import MovieSearch from './movie_search';
import Popular from './popular';

class Home extends Component {
  render() {
    return (
    	<div>
    		<div>
	      	<img src={logo} className="app-logo" alt="logo" />
	        <h1 className="app-title">Welcome to HollyPedia</h1>
	        <p className="title-greeting">Enjoy and Grow your <u>HollyWood</u> knowledge</p>
	      </div>
	      <div>
          <MovieSearch />
        </div>
	      <div>
          <Popular />
        </div>
    	</div>
    );
  }
}

export default Home;
