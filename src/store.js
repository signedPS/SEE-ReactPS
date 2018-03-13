// import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
// import thunk from 'redux-thunk';
// import { useRouterHistory } from 'react-router';
// import {createHashHistory} from 'history';
// import rootReducer from './components/';
//
// export const history = createHashHistory();
//
// const initialState = {};
// const enhancers = [];
// const middleware = [
// 	thunk,
// 	routerMiddleware(history)
// ];
//
// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension
//
//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension())
//   }
// }
//
// const composedEnhancers = compose(
// 	applyMiddleware(...middleware),
// 	...enhancers
// );
//
// export const Store = createStore(
//   rootReducer,
//   initialState,
//   composedEnhancers
// );

import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import {createHashHistory} from 'history';
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './components/';
import { loadState, saveState } from './localStorage';

//
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
//


export const history = createHashHistory()

const persistedState = loadState();


// Build the middleware for intercepting and dispatching navigation actions
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

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export const Store = createStore(
  persistedReducer,
	persistedState,
	composedEnhancers
)

export const persistor = persistStore(Store);

Store.subscribe(()=>{
	saveState(Store.getState());
});
