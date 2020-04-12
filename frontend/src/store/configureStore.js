import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { createlogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux';

import reducer from '../reducers/reducer';


import { profile } from '../actions/user';

import { getFeed, commentOnPost, deletePost, likePost } from '../actions/posts';
import { localStorageMiddleware } from '../middlewares';

export const history = createHistory();

const middlewares = [thunk, localStorageMiddleware, routerMiddleware(history)];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));



// store.dispatch(authLogout())
// store.dispatch(login("dedaldino","Dorkal18"));
// store.dispatch(getFeed());

// store.dispatch(profile("dorkal"));
// store.dispatch(deletePost(10))




export default store;
