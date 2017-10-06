import React, { Component } from 'react';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridList: {
		width: 500,
		height: 500,
		overflowY: 'auto',
		marginBottom: 24,
	},
  searchButton:{
    margin: 12,
    height:35,
  }
};

class MovieSearch extends Component {
	constructor(props) {
    super(props);
    this.state = {
      searchMovie: "",
      resultMovies:[]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.Apicall = this.Apicall.bind(this);
    this.searchedMovies = this.searchedMovies.bind(this);
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
		      resultMovies: response.data.results
		    });
		  } else {
		  	this.setState({
		      resultMovies: null
		    });
		  }
    });
  }

  searchedMovies(){
  	var movieLists
  	if (this.state.resultMovies.length > 0) {
  		movieLists = (this.state.resultMovies).map((movie) =>
  			<GridTile
          key={movie.id}
          title={movie.title}
          subtitle={<span>released on <b>{movie.release_date}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
          <img alt="Not Available" src={'https://image.tmdb.org/t/p/w500_and_h500_bestv2'+movie.poster_path} />
        </GridTile>
		);
  	} else {
  		// movieLists = <h5>Movie not found!</h5>
  	}
  	return (
  		<GridList cellHeight={300} style={styles.gridList}>
	      {movieLists}
	    </GridList>
  		);
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
	      <div style={styles.root}>{this.searchedMovies()}</div>
    	</div>
    );
  }
}

export default MovieSearch;
