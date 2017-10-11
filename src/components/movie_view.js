import React, { Component } from 'react';
import axios from 'axios';
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
    }

  Apicall(){
    axios({
      method:'GET',
      url:'https://api.themoviedb.org/3/movie/'+this.props.params.id+'?api_key=d272326e467344029e68e3c4ff0b4059'
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

  render() {
    return (
      <div className="div-movie">
        <div>
          {this.state.movieStatus === true ? (
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
          ) : (<h2>Invalid Request</h2>)}
        </div>
        <div className="div-home-button">
          <RaisedButton label="Home" onClick={ (e) => { browserHistory.push('/')}} />
        </div>
      </div>
    );
  }
}

export default MovieView;
