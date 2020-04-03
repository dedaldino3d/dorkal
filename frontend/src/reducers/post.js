import * as types from '../actions/actionTypes';
import merge from 'lodash/merge';


const initialState = {
  isLoading: false
};

//Reducer

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIKE_POST:
      return likePost(state, action);
    case types.UNLIKE_POST:
      return unlikePost(state, action);
    case types.ADD_POST_SUCCESS:
      return addPost(state, action);
    case types.ADD_POST_REQUEST:
      return addPost_request(state, action);
      case types.ADD_POST_FAILURE:
        return addPost_failure(state, action);
    case types.DELETE_POST_SUCCESS:
      return deletePost(state, action);
    default:
      if(action.entities && action.entities.post){
        return merge({}, state, action.entities.post)
      }
      return state;
  }
}

// Reducer Functions

const likePost = (state, action) => {
  const { post_id } = action;
  
  return {
    ...state,
    [post_id]: {
      ...state[post_id],
      is_liked: true,
      like_count: state[post_id].like_count + 1
    }
  }
}

const unlikePost = (state, action) => {
  const { post_id } = action;
  
  return {
    ...state,
    [post_id]: {
      ...state[post_id],
      is_liked: false,
      like_count: state[post_id].like_count - 1
    }
  }
}

const addPost = (state, action) => {
  const { post } = action;
  
  return {
    ...state,
    isLoading: false,
    [post.id]: {
      ...post
    }
  }
}

const addPost_failure = (state, action) => {
  const { error } = action;
  return {
    ...state,
    isLoading: false,
    error
  }
}

const addPost_request = (state, action) => {
  return {
    ...state,
    isLoading: true,
  }
}

const deletePost = (state, action) => {
  const { post_id } = action;
  
  return state.filter( id => id !== post_id);
}



export default postReducer

