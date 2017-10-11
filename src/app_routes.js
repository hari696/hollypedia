import React, { Component } from 'react';
import { browserHistory, Router, Route } from 'react-router';
import App from './App';
import MovieView from './components/movie_view';

class AppRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/movie" component={MovieView} />
      </Router>
    );
  }
}

export default AppRoutes;
