import React, { Component } from 'react';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 1000,
    height: 800,
    overflowY: 'auto',
    marginBottom: 24,
  }
};

class Popular extends Component {
	constructor(props) {
    super(props);
    this.state = {
      popularMovies:[],
      movieStatus: false
    };

    this.Apicall = this.Apicall.bind(this);
    this.popularMoviesSearch = this.popularMoviesSearch.bind(this);
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

  popularMoviesSearch(){
    var movieLists
    if (this.state.popularMovies.length > 0) {
      movieLists = (this.state.popularMovies).map((movie) =>
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
        {this.state.movieStatus === true ? (<div>
          <h3>Popular Movies</h3>
          <div style={styles.root}>{this.popularMoviesSearch()}</div>
        </div>) : <p></p>}
      </div>
    );
  }
}

export default Popular;
