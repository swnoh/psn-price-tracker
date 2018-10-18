import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppContainer';
import { Provider } from 'react-redux';

// redux-logger is a middleware that lets you log every state change
import logger from 'redux-logger';

// redux-thunk is a middleware that lets you dispatch async actions
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk);
// const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);
