/* eslint-disable */
import React from 'react';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

export const store = createStore(
	combineReducers({ state: reducers }),
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// What are we doing? Creating a global state basically. The window.__REDUX
// is simply for redux chrome extension. If you don't wanna use it, you can not
// include the code, or simply leave it since it only works if there is one
