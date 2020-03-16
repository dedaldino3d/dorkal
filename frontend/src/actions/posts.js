import * as types from './actionTypes';
import { postService } from '../services';
import * as schema from './schema';
import { normalize } from 'normalizr';
import { authLogout } from './auth';




export const set_feed = feed => ({
    type: types.SET_FEED,
    feed
})

export const doLikePost = post_id => ({
      type: types.LIKE_POST,
      post_id
  })
  
export const  doUnlikePost = post_id => ({
      type: types.UNLIKE_POST,
      post_id
  })

export const addComment_Request = post_id => ({
  type: types.ADD_COMMENT_REQUEST,
  post_id
})

export const addComment_Success = (post_id, comment) => ({
  type: types.ADD_COMMENT_SUCCESS,
  post_id,
  comment
})

export const addComment_Failure = (post_id, error) => ({
  type: types.ADD_COMMENT_FAILURE,
  post_id,
  error
})

export const deleteComment_Request = (post_id, comment_id) => ({
  type: types.DELETE_COMMENT_REQUEST,
  post_id,
  comment_id
})

export const deleteComment_Success = (post_id, comment_id) => ({
  type: types.DELETE_COMMENT_SUCCESS,
  post_id,
  comment_id
})

export const deleteComment_Failure = error => ({
  type: types.DELETE_COMMENT_FAILURE,
  error
})

export const addPost_Request = () => ({
  type: types.ADD_POST_REQUEST
})

export const addPost_Success = (post_id, post ) => ({
  type: types.ADD_POST_SUCCESS,
  post_id,
  post
})

export const addPost_Failure = error => ({
  type: types.ADD_POST_FAILURE,
  error
})

export const deletePost_Request = post_id => ({
  type: types.DELETE_POST_REQUEST,
  post_id
})

export const deletePost_Success = post_id => ({
  type: types.DELETE_POST_SUCCESS,
  post_id
})

export const deletePost_Failure = error => ({
  type: types.DELETE_POST_FAILURE,
  error
})


  // API Actions


export const getFeed = () => {
  return dispatch => {

    return postService().getFeed()
    .then(response => {
      if(response.status === 401){
        console.log("You need to be logged in")
        dispatch(authLogout())
      }else{
        const data = normalize(response.data, schema.feedSchema);

        // console.log("Denormalized response", response.data);
        // console.log("Normalized response", normalize(response.data, schema.feedSchema));
        console.log("Normalized response with entities: ", data.entities);

        dispatch(set_feed(data.entities));
      }
    })
    .catch(error => {
      console.log("You not logged in, You must be logged in to see your feed");
    })
  }
};


const reactPost = post_id => {
  return (dispatch) => {
    dispatch(doLikePost(post_id));
    return postService().reactPost(post_id)
      .then( response => {
        if( response.staus === 401)
          dispatch(authLogout());
        else if (!response.ok)
          dispatch(doUnlikePost(post_id));
      })
      .catch( error => {
        console.log(error);
      });
  };
};


export const unReactPost = post_id => {
  return dispatch => {
    return postService().unReactPost(post_id)
    .then(response => {
      if(response.status === 401){
        dispatch(authLogout);
      }else if(!response.ok){
        dispatch(doLikePost(post_id));
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
};

export const commentOnPost = (post_id, comment) => {
  return dispatch => {
    dispatch(addComment_Request(post_id))
    
    return postService().commentOnPost(post_id, comment)
      .then(response => {
        if (response.status === 401) {
          dispatch(authLogout());
        }else {
          const data = normalize(response.data, schema.commentSchema);
          console.log("ADD comment response: ", data.entities);
          dispatch(addComment_Success(post_id, data.entities));
        }
      })
      .catch( error => {
        dispatch(addComment_Failure(post_id, error));
      });
    };
};


export const addPost = post => {
  return dispatch => {
    dispatch(addPost_Request())
    const dataSer = JSON.stringify(post);

    return postService().addPost(dataSer)
      .then( response => {
        if (response.status === 401) {
          dispatch(authLogout());
        }else{
          const data = normalize(response.data, schema.postSchema);
          console.log("ADD post response: ", data.entities);
          dispatch(addPost_Success(data.entities))
        }
      })
      .catch(error => {
        dispatch(addPost_Failure(error))
        console.log("Falha ao adicionar o post");
      });
  };
}


export const deleteComment = (post_id, comment_id) => {
  return dispatch => {
    dispatch(deleteComment_Request());

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
        console.log("There are some errors!");
        dispatch(deleteComment_Failure(error));
      });
  };
}


export const deletePost = (post_id) => {
  return dispatch => {
    dispatch(deletePost_Request(post_id));

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
        dispatch(deletePost_Failure(error));
        console.log("Some errors finded, can't delete Post");
      });
  };
}

