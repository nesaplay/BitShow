import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import './css/index.css';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
