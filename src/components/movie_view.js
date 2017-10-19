import React, { Component } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class MovieView extends Component {
  constructor(props) {
      super(props);
      this.state = {
        resultMovies:{},
        movieStatus: false
      };
      this.Apicall = this.Apicall.bind(this);
      this.MovieDetails = this.MovieDetails.bind(this);
      this.MovieVideos = this.MovieVideos.bind(this);
    }

  Apicall(){
    axios({
      method:'GET',
      url:'https://api.themoviedb.org/3/movie/'+this.props.params.id+'?api_key=d272326e467344029e68e3c4ff0b4059&append_to_response=videos'
    }).then(response =>  {
      if (response.data) {
        this.setState({
          resultMovies: response.data,
          movieStatus: true
        });
      } else {
        this.setState({
          resultMovies: null
        });
      }
    });
  }

  componentDidMount() {
    this.Apicall()
  }

  MovieVideos(){
    let movie_videos, movies;
    movies = this.state.resultMovies.videos.results
    movie_videos= (movies).map((video) =>
      <div>
        <h3>{video.name}</h3>
        <h3><span>{video.site}</span></h3>
        <div className="div-video">
          <ReactPlayer controls='true' url={'https://www.youtube.com/watch?v='+video.key} />
        </div>
      </div>
    );
    return(movie_videos);
  }

  MovieDetails(){
    return(
      <div>
        <div>
          <h1>{this.state.resultMovies.title}</h1>
          <img alt="Not Available" src={'https://image.tmdb.org/t/p/w500/'+this.state.resultMovies.poster_path} />
          <h3><span>Tag Line: </span>"{this.state.resultMovies.tagline}"</h3>
          <h3><span>Running Time: </span>{this.state.resultMovies.runtime}Mins</h3>
          <h3><span>Budget: </span>${this.state.resultMovies.budget}</h3>
          <h3><span>Rating: </span>{this.state.resultMovies.vote_average}</h3>
          <h3><span>Status: </span>{this.state.resultMovies.status}</h3>
          <h3><span>Released Date: </span>{this.state.resultMovies.release_date}</h3>
          <h3><span>Website: </span><a href={this.state.resultMovies.homepage}>{this.state.resultMovies.homepage}</a></h3>
        </div>
          {this.MovieVideos()}
      </div>
    );
  }

  render() {
    return (
      <div className="div-movie">
        <div>
          {this.state.movieStatus === true ? (this.MovieDetails()) : (<h2>Invalid Request</h2>)}
        </div>
        <div className="div-home-button">
          <RaisedButton label="Home" onClick={ (e) => { browserHistory.push('/')}} />
        </div>
      </div>
    );
  }
}

export default MovieView;
