import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';   // this will import index by default

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
	<Provider store = {createStoreWithMiddleware(reducers)}>
		<App /> 
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
