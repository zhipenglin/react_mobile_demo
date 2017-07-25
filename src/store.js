import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createHashHistory from 'history/createHashHistory';
import rootReducer from './reducers/rootReducer';

const loggerMiddleware = createLogger();

export const history =
  process.env.REACT_APP_TARGET === 'github'
    ? createHashHistory()
    : createHistory();

function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerMiddleware(history)
    )
  );
}

export default configureStore();
