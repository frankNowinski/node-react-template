import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

import App from './components/app'
import Home from './components/home'
import About from './components/about'

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}>
    </Router>
  </Provider>,
  document.getElementById('app')
)
