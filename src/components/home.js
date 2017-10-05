import React, { Component } from 'react';
import axios from 'axios';
import logo from '../assets/images/logo.jpg';
import Latest from './latest';

class Home extends Component {
	constructor(props) {
    super(props);
    this.state = {
      searchMovie: "",
      resultMovies:[]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.Apicall = this.Apicall.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  Apicall(e){
  	e.preventDefault();
    axios({
      method:'POST',
      url:'https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query='+this.state.searchMovie
    }).then(response =>  {
    	this.setState({
	      resultMovies: response.data.results
	    });
	    console.log(this.state.resultMovies)
    });
  }

  render() {
    return (
    	<div>
    		<div className="div-center">
	      	<img src={logo} className="app-logo" alt="logo" />
	        <h1 className="app-title">Welcome to HollyPedia</h1>
	        <p className="title-greeting">Enjoy and Grow your <u>HollyWood</u> knowledge</p>
	        <form name="SearchMovieForm" onSubmit={this.Apicall}>
		        <label>Movie:</label>
		        <input type="text" name="searchMovie" value={this.state.searchMovie} onChange={this.handleInputChange} />
		        <input type="submit" value="submit" />
	        </form>
	      </div>
	      <div className="div-center">
	      	<Latest />
	      </div>
    	</div>
    );
  }
}

export default Home;
