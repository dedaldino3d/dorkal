import * as types from '../actions/actionTypes';
import merge from 'lodash/merge';


const initialState = {
  isLoading: false
};

//Reducer

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REACT_POST:
      return reactPost(state, action);
    case types.UNREACT_POST:
      return unreactPost(state, action);
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

const reactPost = (state, action) => {
  const { post_id, type_react } = action;
  const { feed } = state;

  const updatedFeed = feed.map( post => {
    if(post.id === post_id){
      return {
        ...post,
        react_count: post.react_count + 1,
        is_reacted_type: type_react,
      }
    }
    return post
  });

  return {
    ...state,
    feed: updatedFeed
  }
};


const unreactPost = (state, action) => {
  const { post_id, type_react } = action;
  const { feed } = state;

  const updatedFeed = feed.map( post => {
    if(post.id === post_id){
      return {
        ...post,
        react_count: post.react_count - 1,
        is_reacted_type: null,
      }
    }
    return post
  })

  return {
    ...state,
    feed: updatedFeed
  }
}

const addPost = (state, action) => {
  const { post } = action;

  return {
    ...state,
    isLoading: false,
    feed: {
      ...state.feed,
      post
    }
  };
};

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
  const { feed } = state;

  const updatedFeed = feed.filter(post => post.id !== post_id)
  return {
    ...state,
    feed: updatedFeed
  };
};



export default postReducer

