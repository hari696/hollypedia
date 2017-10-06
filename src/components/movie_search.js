import React, { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ViewMovie from './view_movie';

const styles = {
  searchButton:{
    margin: 12,
    height:35
  }
};

class MovieSearch extends Component {
	constructor(props) {
    super(props);
    this.state = {
      searchMovie: "",
      resultMovies:[],
      movieStatus: false
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
    	if (response.data.results) {
		    this.setState({
		      resultMovies: response.data.results,
          movieStatus: true
		    });
		  } else {
		  	this.setState({
		      resultMovies: null
		    });
		  }
    });
  }

  render() {
    return (
    	<div>
    		<div className="div-search">
	        <form name="SearchMovieForm" onSubmit={this.Apicall}>
            <TextField name="searchMovie" value={this.state.searchMovie} onChange={this.handleInputChange} hintText="Movie Name" />
            <RaisedButton type="submit" label="Search" style={styles.searchButton} />
	        </form>
	      </div>
        {this.state.movieStatus === true ? <ViewMovie movieSearch={this.state.resultMovies} /> : <p></p>}
    	</div>
    );
  }
}

export default MovieSearch;
