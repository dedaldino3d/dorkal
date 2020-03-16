import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';

import { createlogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import userReducer from '../reducers/user';
import authReducer from '../reducers/auth';
import postReducer from '../reducers/posts';
import { profile } from '../actions/user';
import { login, authLogout } from '../actions/auth';


import { getFeed, commentOnPost, deletePost } from '../actions/posts';
import { localStorageMiddleware } from '../middlewares';

export const history = createHistory();

const middlewares = [thunk, localStorageMiddleware, routerMiddleware(history)];

const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    post: postReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

// store.dispatch(authLogout())
store.dispatch(login("maja","Dedaldino18"));

store.dispatch(getFeed());
store.dispatch(profile("dorkal"))
store.dispatch(commentOnPost(6, "talvez as coisas serao mais faceis"))
// store.dispatch(deletePost(10))
export default store;
