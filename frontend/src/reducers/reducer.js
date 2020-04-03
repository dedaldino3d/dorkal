import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';



import userReducer from '../reducers/user';
import authReducer from '../reducers/auth';
// import postReducer from '../reducers/post';
// import commentsReducer from '../reducers/comments';
import feedReducer from '../reducers/feed';
// import profileReducer from '../reducers/profile';



export default combineReducers({
    auth: authReducer,
    user: userReducer,
    // profile: profileReducer,
    // post: postReducer,
    feed: feedReducer,
    // comments: commentsReducer,
    routing: routerReducer,
});


