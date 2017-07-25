import { combineReducers } from 'redux';
import page from './pageReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  page,
  router: routerReducer
});
