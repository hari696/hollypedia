import React, { Component } from 'react';
import axios from 'axios';

class Latest extends Component {
	constructor(props) {
    super(props);
    this.movieName="inception"
  }

  Apicall(){
    axios({
      method:'get',
      url:'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
    }).then(function(response) {
      console.log(response.data)
    });
  }

  render() {
    return (
      <div className="div-center">
        <div>
          <label>List of movies from <strong>The Movie DB!</strong></label>
        </div>
      </div>
    );
  }
}

export default Latest;
