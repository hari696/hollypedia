import React, { Component } from 'react';
import axios from 'axios';
import ViewMovie from './view_movie';

class Popular extends Component {
	constructor(props) {
    super(props);
    this.state = {
      popularMovies:[],
      movieStatus: false
    };

    this.Apicall = this.Apicall.bind(this);
  }

  Apicall(){
    axios({
      method:'get',
      url:'https://api.themoviedb.org/3/discover/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&sort_by=popularity.desc'
    }).then(response => {
      if (response.data.results) {
        this.setState({
          popularMovies: response.data.results,
          movieStatus: true
        });
      } else {
        this.setState({
          popularMovies: null
        });
      }
    });
  }

  componentDidMount() {
    this.Apicall()
  }

  render() {
    return (
      <div>
        {this.state.movieStatus === true ? (
          <div>
            <h3>Popular Movies</h3>
            <ViewMovie moviePopular={this.state.popularMovies} />
          </div>
          ) : <p></p>}
      </div>
    );
  }
}

export default Popular;
