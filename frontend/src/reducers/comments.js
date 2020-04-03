import * as types from '../actions/actionTypes';
import merge from 'lodash/merge';


const initialState = {
    isLoading: false
};


export const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
      case types.ADD_COMMENT_REQUEST:
        return addComment_request(state, action);
      case types.ADD_COMMENT_SUCCESS:
        return addComment_success(state, action);
      case types.ADD_COMMENT_FAILURE:
        return addComment_failure(state, action);
      case types.DELETE_COMMENT_SUCCESS:
        return deleteComment(state, action);
      default:
        if(action.entities && action.entities.comments){
          return merge({}, state, action.entities.comments);
        }
        return state;
    }
}


const addComment_success = (state, action) => {
  const { post_id, comment } = action;
  
  return {
    ...state,
    isLoading: false,
    ...comment
  }
}


const addComment_request = (state, action) =>{
  return {
    ...state,
    isLoading: true
  }
}


const addComment_failure = (state, action) => {
  const { error } = action;

  return {
    ...state,
    isLoading: false,
    error
  }
}


const deleteComment = (state, action) => {
    const { post_id, comment_id } = action;

    return state.filter( id => id !== comment_id);

}

export default commentsReducer