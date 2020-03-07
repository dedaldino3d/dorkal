import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { createlogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux';

import userReducer from '../reducers/user';
import { authSignup } from '../actions/user';

export const history = createHistory();

// const middlewares = [thunk];

const reducer = combineReducers({
    userReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
