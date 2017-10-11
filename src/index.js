import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import AppRoutes from './app_routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

	<div className="div-center">
		<MuiThemeProvider>
			<AppRoutes />
		</MuiThemeProvider>
	</div>, 
	document.getElementById('root')
	);
registerServiceWorker();
