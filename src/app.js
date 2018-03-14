import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Store, history, persistor } from './store';
import MyApp from './components/app/myApp';
import { PersistGate } from 'redux-persist/integration/react'

injectTapEventPlugin();

let div = document.createElement('div');

document.body.appendChild(div);

ReactDOM.render(<Provider store={Store}>
	<PersistGate loading={null} persistor={persistor}>
		<ConnectedRouter history={history}>
			<div>
				<MuiThemeProvider>
					<MyApp/>
				</MuiThemeProvider>
			</div>
		</ConnectedRouter>
	</PersistGate>
</Provider>
, div);
