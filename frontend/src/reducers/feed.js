import * as types from '../actions/actionTypes';



const initialState = {
    isLoading: false,
};

  
export const feedReducer = (state = initialState, action) => {
  switch(action.type){
    case types.SET_FEED_SUCCESS:
      return setFeed_success(state, action);
    case types.SET_FEED_REQUEST:
      return setFeed_request(state, action);
    case types.SET_FEED_FAILURE:
      return setFeed_failure(state, action);
    case types.LIKE_POST:
      return like_Post(state, action);
    case types.UNLIKE_POST:
      return unlike_Post(state, action);
    case types.ADD_POST_SUCCESS:
      return addPost_success(state, action);
    case types.DELETE_POST_SUCCESS:
      return deletePost_success(state, action);
    case types.ADD_COMMENT_SUCCESS:
      return addComment_success(state, action);
    case types.DELETE_COMMENT_SUCCESS:
      return deleteComment_success(state, action);
    case types.EDIT_POST_SUCCESS:
      return editPost_success(state, action);
    case types.EDIT_COMMENT_SUCCESS:
      return editComment_success(state, action);
    default:
      return state;
  }
}


const setFeed_request = (state, action) => {
  return {
    ...state,
    isLoading: true
  }
}


const setFeed_success = (state, action) => {
  const { feed } = action;

  return {
    ...state,
    isLoading: false,
    feed
  };
}


const setFeed_failure = (state, action) => {
  const { error } = action;

  return {
    ...state,
    isLoading: false,
    error
  }
}

const like_Post = (state, action) => {
  const { post_id } = action;
  const { feed } = state;
  const updatedFeed = feed.map(post => {
    if (post.id === post_id) {
      return { 
        ...post, 
        is_liked: true, 
        like_count: post.like_count + 1 
      };
    }
    return post;
  });
  return { 
    ...state, 
    feed: updatedFeed 
  };
}

const unlike_Post = (state, action) => {
  const { post_id } = action;
  const { feed } = state;
  const updatedFeed = feed.map(post => {
    if (post.id === post_id) {
      return { 
        ...post, 
        is_liked: false, 
        like_count: 
        post.like_count - 1 
      };
    }
    return post;
  });
  return { 
    ...state, 
    feed: updatedFeed
  };
}

const addComment_success = (state, action) => {
  const { post_id, comment } = action;
  const { feed } = state;
  const updatedFeed = feed.map(post => {
    if (post.id === post_id) {
      return {
        ...post,
        comments: [
          ...post.comments, 
          comment
        ]
      };
    }
    return post;
  });
  return { 
    ...state, 
    feed: updatedFeed 
  };
}


const deleteComment_success = (state, action) => {
  const { post_id, comment_id } = action;
  const { feed } = state;

  const updatedFeed = feed.map( post => {
    if(post.id === post_id){
      post.comments.filter( comment => comment.id !== comment_id)
    }
    return post
  });

  return {
    ...state,
    feed: updatedFeed
  }
}

const addPost_success = (state, action) => {
  const { feed } = state;
  const { post } = action;

  const updatedFeed = [
    ...state.feed,
    post,
  ]

  return {
    ...state,
    feed: updatedFeed
  }
}

const deletePost_success = (state, action) => {
  const { post_id } = action;
  const { feed } = state;
  const updatedFeed = feed.filter( post => post.id !== post_id)

  return {
    ...state,
    feed: updatedFeed
  }
}

const editPost_success = (state, action) => {
  const { post_id, comment_id, data: { file, content, tags } } = action;
  const { feed } = state;

  const updatedFeed = feed.map(post => {
    if(post.id === post_id){
      return {
        ...post,
        file: file ? file : post.file,
        content: content ? content : post.content,
        tags: tags ? tags : post.tags,
      }
    }
    return post
  })

  return {
    ...state,
    feed: updatedFeed
  }
}

const editComment_success = (state, action) => {
  const { post_id, comment_id, content } = action;
  const { feed } = state;

  const updatedFeed = feed.map(post => {
    if(post.id === post_id){
      post.comments.map(comment => {
        if(comment.id === comment_id){
          return {
            ...comment,
            content: content ? content : comment.content
          }
        }
        return comment;
      })
    }
    return post;
  })

  return {
    ...state,
    feed: updatedFeed
  }
}




export default feedReducer
