import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers/rootReducer';

export const history = (function() {
  if (process.env.REACT_APP_TARGET === 'github') {
    return require('history/createHashHistory')['default']();
  } else {
    return require('history/createBrowserHistory')['default']();
  }
})();

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, ...middlewares, routerMiddleware(history))
  );
}

export default configureStore();
