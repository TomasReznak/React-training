import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import posts from '../../saga/sample/ducks';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  posts,
});

export default rootReducer;
