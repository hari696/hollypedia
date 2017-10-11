import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class MovieView extends Component {
  constructor(props) {
      super(props);
      this.state = {
        // selectedMovie: {adult: false, backdrop_path: "/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg", genre_ids: [28, 12, 35, 878], id: 315635, original_language: "en", original_title:"Spider-Man: Homecoming", overview:"Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.", popularity: 378.056155, poster_path: "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg", release_date: "2017-07-05", title:"Spider-Man: Homecoming", video: false, vote_average: 7.3, vote_count: 3710}
        // selectedMovie: this.props.params.movie
      };
    }

  render() {
    return (
      <div>
        <h3>{this.props.params.title}</h3>
        <p>Individual Movies</p>
        <RaisedButton label="Home" onClick={ (e) => { browserHistory.push('/'); }} />
      </div>
    );
  }
}

export default MovieView;
