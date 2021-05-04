import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './root/App';
import registerServiceWorker from './root/registerServiceWorker';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import ordersReducer from './store/reducers/orders';
import authReducer from './store/reducers/auth';
import navReducer from './store/reducers/navigation';

import './root/index.scss';

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  orders: ordersReducer,
  auth: authReducer,
  navigation: navReducer,
});
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
