import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Store, history } from './store';
import MyApp from './components/app/myApp';

injectTapEventPlugin();

ReactDOM.render(
	<Provider store={Store}>
		<ConnectedRouter history={history}>
			<div>
				<MuiThemeProvider>
					<MyApp/>
				</MuiThemeProvider>
			</div>
		</ConnectedRouter>
	</Provider>
	,
	document.getElementById('reactContainer')
);
