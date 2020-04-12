import * as types from './actionTypes';
import { postService } from '../services';
import * as schema from './schema';
import { normalize } from 'normalizr';
import { authLogout } from './auth';




export const set_feed_request = () => ({
    type: types.SET_FEED_REQUEST
})

export const set_feed_success = feed => ({
    type: types.SET_FEED_SUCCESS,
    feed
})

export const set_feed_failure = error => ({
  type: types.SET_FEED_FAILURE,
  error
})

export const doReactPost = (post_id, type_react) => ({
      type: types.REACT_POST,
      post_id,
      type_react
})
  
export const  doUnReactPost = (post_id, type_react) => ({
      type: types.UNREACT_POST,
      post_id,
      type_react
})

export const addComment_Success = (post_id, content) => ({
  type: types.ADD_COMMENT_SUCCESS,
  post_id,
  content
})

export const deleteComment_Success = (post_id, comment_id) => ({
  type: types.DELETE_COMMENT_SUCCESS,
  post_id,
  comment_id
})

export const addPost_Success = post => ({
  type: types.ADD_POST_SUCCESS,
  post
})


export const deletePost_Success = post_id => ({
  type: types.DELETE_POST_SUCCESS,
  post_id
})

export const editPost_success = (post_id, data) => ({
  type: types.EDIT_POST_SUCCESS,
  post_id,
  data
})

export const editComment_success = (post_id, comment_id, content) => ({
  type: types.EDIT_COMMENT_SUCCESS,
  post_id,
  comment_id,
  content
})



  // API Actions


export const getFeed = () => {
  return dispatch => {
    dispatch(set_feed_request());
    
    return postService().getFeed()
    .then(response => {
      if(response.status === 401){
        console.log("You need to be logged in")
        dispatch(authLogout())
      }else{
        dispatch(set_feed_success(response.data));
      }
    })
    .catch(error => {
        dispatch(set_feed_failure(error));
        console.log("You not logged in, You must be logged in to see your feed");
    })
  }
};


export const reactPost = (post_id, type_react) => {
  return (dispatch) => {
    dispatch(doReactPost(post_id, type_react));

    return postService().reactPost(post_id, type_react)
      .then( response => {
        if( response.staus === 401)
          dispatch(authLogout());
        else if (!response.ok)
          dispatch(doUnReactPost(post_id, type_react));
      })
      .catch( error => {
        console.log(error);
      });
  };
};


export const unReactPost = (post_id, type_react) => {
  return dispatch => {
    dispatch(doUnReactPost(post_id, type_react));

    return postService().unReactPost(post_id, type_react)
    .then(response => {
      if(response.status === 401){
        dispatch(authLogout());
      }else if(!response.ok){
        dispatch(doReactPost(post_id, type_react));
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
};


export const commentOnPost = (post_id, content) => {
  return dispatch => {
    
    return postService().commentOnPost(post_id, content)
      .then(response => {
        if (response.status === 401) {
          dispatch(authLogout());
        }else {
          // const data = normalize(response.data, schema.commentSchema);
          console.log("ADD comment response: ", response.data);
          dispatch(addComment_Success(post_id, response.data));
        }
      })
      .catch( error => {
        console.log("Comment on post error: ", error);
      });
    };
};


export const addPost = post => {
  return dispatch => {
    return postService().addPost(post)
      .then( response => {
        if (response.status === 401) {
          dispatch(authLogout());
        }else{
          const data = normalize(response.data, schema.postSchema);
          console.log("ADD post response: ", data);
          dispatch(addPost_Success(data))
        }
      })
      .catch(error => {
        console.log("Falha ao adicionar o post");
      });
  };
}


export const deleteComment = (post_id, comment_id) => {
  return dispatch => {

    return postService().deleteComment(post_id, comment_id)
      .then(response => {
        if (response.status === 401) {
          dispatch(authLogout());
        }else{
          dispatch(deleteComment_Success(comment_id));
          console.log("Comment deleted");
        }
      })
      .catch(error => {
        console.log("There are some errors:", error);
      });
  };
}


export const deletePost = post_id => {
  return dispatch => {

    return postService().deletePost(post_id)
      .then(response => {
        if (response.status === 401) {
          dispatch(authLogout());
        }else if(response.status === 204){
          // const data = normalize(response.data, schema.postSchema);
          console.log("POST WAS BEEN DELETED ")
          dispatch(deletePost_Success());
        }
      })
      .catch(error => {
        console.log("Some errors finded, can't delete Post", error);
      });
  };
}


export const editPost = (post_id, data) => {
  return dispatch => {

    return postService().editPost(post_id, data)
      .then(response => {
        if(response.status === 401){
          dispatch(authLogout());
        }else {
          dispatch(editPost_success(post_id, response.data))
        }
      })
      .catch(error => {
        console.log("Edit post error: ", error)
      })
  }
}


export const editComment = (post_id, comment_id, content) => {
  return dispatch => {

    return postService().editComment(post_id, comment_id, content)
      .then(response => {
        if(response.status === 401){
          dispatch(authLogout());
        }else {
          dispatch(editComment_success(post_id, comment_id, response.data))
        }
      })
      .catch(error => {
        console.log("Edit comment error: ", error)
      })
  }
}

