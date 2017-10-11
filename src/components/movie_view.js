import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class MovieView extends Component {
  constructor(props) {
      super(props);
      this.state = {
        movie: this.props.location.state.movie
      };
    }

  render() {
    return (
      <div className="div-movie">
        <h1>{this.state.movie.title}</h1>
        <img alt="Not Available" src={'https://image.tmdb.org/t/p/w500_and_h500_bestv2'+this.state.movie.poster_path} />
        <h3><span>Original Title: </span>{this.state.movie.original_title}</h3>
        <h3><span>Overview: </span>"{this.state.movie.overview}"</h3>
        <h3><span>Rating: </span>{this.state.movie.vote_average}</h3>
        <h3><span>Released Date: </span>{this.state.movie.release_date}</h3>
        <RaisedButton label="Home" onClick={ (e) => { browserHistory.push('/')}} />
      </div>
    );
  }
}

export default MovieView;
