import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import AuthReducer from './reducers/AuthReducer';

const rootReducers = combineReducers({ Auth: AuthReducer });

const middlewares = [thunk];

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
