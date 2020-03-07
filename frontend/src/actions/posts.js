import * as types from './actionTypes';
import { postService } from '../services';



const doLikePost = postId => ({
      type: types.LIKE,
      postId
  })
  
const  doUnlikePost = postId => ({
      type: types.UNLIKE,
      postId
  })

export const addComment_Request = () => ({
  type: types.ADD_COMMENT_REQUEST
})

export const addComment_Success = (postId, comment) => ({
  type: types.ADD_COMMENT_SUCCESS,
  postId,
  comment
})

export const addComment_Failure = (postId, error) => ({
  type: types.ADD_COMMENT_FAILURE,
  postId,
  error
})

export const deleteComment_Request = () => ({
  type: types.DELETE_COMMENT_REQUEST
})

export const deleteComment_Success = commentId => ({
  type: types.DELETE_COMMENT_SUCCESS,
  commentId
})

export const deleteComment_Failure = error => ({
  type: types.DELETE_COMMENT_FAILURE,
  error
})

export const addPost_Request = () => ({
  type: types.ADD_POST_REQUEST
})

export const addPost_Success = (postId, post ) => ({
  type: types.ADD_POST_SUCCESS,
  postId,
  post
})

export const addPost_Failure = error => ({
  type: types.ADD_POST_FAILURE,
  error
})

export const deletePost_Request = () => ({
  type: types.DELETE_POST_REQUEST
})

export const deletePost_Success = postId => ({
  type: types.DELETE_POST_SUCCESS,
  postId
})

export const deletePost_Failure = error => ({
  type: types.DELETE_POST_FAILURE,
  error
})


  // API Actions

const likePost = postId => {
  return (dispatch, getState) => {
    dispatch(doLikePost(postId));
    // const { user: { token }} = getState();
    postService().asyncLikePost(postId)
      .then( response => {
        if( response.staus === 401)
          dispatch(userActions.logout());
        else if (!response.ok)
          dispatch(doUnlikePost(postId));
      })
      .catch( error => {
        console.log(error);
      })
  };
}

// const unlikePost = postId => {
//   return (dispatch, getState) => {
//     dispatch(doUnlikePost(postId));
//     const { user: { token }} = getState();
//     postService().asyncUnlikePost(postId)
//       .then( response => {
//         if( response.staus === 401)
//           dispatch(userActions.logout());
//         else if (!response.ok)
//           dispatch(doLikePost(postId));
//       })
//       .catch( error => {
//         console.log(error);
//       })
//   };
// }

const unlikePost = postId => async (dispatch, getState) => {
  // const { user: { token }} = getState()
  try{
    const response = await postService().asyncUnlikePost(postId);
    if(response.status === 401){
      dispatch(userActions.logout);
    }else if(!response.ok){
      dispatch(doLikePost(postId));
    }
  }catch(error){
    console.log(error);
  }
}

const commentPhoto = (postId, message) => {
  return (dispatch , getState) => {
    dispatch(addComment_Request());
    const data = JSON.stringify({
      message
    })
    // const { user: { token } } = getState();
    postService().asyncCommentPost(postId, data)
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => {
        if (json.message) {
          dispatch(addComment_Success(postId, json));
        }
      })
      .catch( error => {
        dispatch(addComment_Failure(postId, error))
      });
  };
}

