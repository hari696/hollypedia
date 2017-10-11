import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridListPopular: {
		width: 1000,
    height: 600,
    overflowY: 'auto',
    marginBottom: 24,
	},
  gridListSearch: {
    width: 600,
    height: 700,
    overflowY: 'auto',
    marginBottom: 24,
  }
};

class ViewMovies extends Component {

  searchedMovies(){
    let movieLists, movies;
    movies = this.props.movieSearch ? (this.props.movieSearch) : (this.props.moviePopular)
    if (movies.length > 0) {
      movieLists = (movies).map((movie) =>
        <GridTile
          onClick={(e) => {
            browserHistory.push({pathname: '/movie', state: { movie: movie }});
          }}
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
    return (movieLists);
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList cellHeight={300} style= {this.props.movieSearch ? (styles.gridListSearch) : (styles.gridListPopular)}>
          {this.searchedMovies()}
        </GridList>
      </div>
    );
  }
}

export default ViewMovies;
