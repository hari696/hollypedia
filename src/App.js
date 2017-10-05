import React, { Component } from 'react';
import Home from './components/home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
    	<MuiThemeProvider>
    		<Home />
    	</MuiThemeProvider>
    );
  }
}

export default App;
