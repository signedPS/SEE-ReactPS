import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { useRouterHistory } from 'react-router';
import {createHashHistory} from 'history';
import rootReducer from './components/';

export const history = createHashHistory();

const initialState = {};
const enhancers = [];
const middleware = [
	thunk,
	routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

export const Store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);
