import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import {createHashHistory} from 'history';
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import reducers from './components/reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

export const history = createHashHistory()

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
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
  persistedReducer,
	initialState,
	composedEnhancers
)

export const persistor = persistStore(Store);
