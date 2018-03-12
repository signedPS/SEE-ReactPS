import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { Store, history } from './store';
import MyApp from './components/app/myApp';

ReactDOM.render(
	<Provider store={Store}>
		<ConnectedRouter history={history}>
			<div>
				<MyApp/>
			</div>
		</ConnectedRouter>
	</Provider>
	,
	document.getElementById('reactContainer')
);
