import * as types from '../actions/actionTypes';



const initialState = {};

//Reducer

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FEED:
      return setFeed(state, action);
    case types.LIKE_POST:
      return likePost(state, action);
    case types.UNLIKE_POST:
      return unlikePost(state, action);
    case types.ADD_COMMENT_SUCCESS:
      return addComment(state, action);
    case types.DELETE_COMMENT_SUCCESS:
      return deleteComment(state, action);
    case types.DELETE_POST_SUCCESS:
      return deletePost(state, action);
    default:
      return state;
  }
}

// Reducer Functions

const setFeed = (state, action) => {
  const { feed } = action;
  return {
    ...state,
    feed
  }
}


const likePost = (state, action) => {
  const { post_id } = action;
  const { feed } = state;
  const updatedFeed = feed.map( post => {
    if(post[post_id] === post_id){
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

const unlikePost = (state, action) => {
  const { post_id } = action;
  const { feed } = state;
  const updatedFeed = feed.map(post => {
    if (post[post_id] === post_id) {
      return { 
        ...post, 
        is_liked: false, 
        like_count: post.like_count - 1 
      };
    }
    return post;
  });
  return { 
    ...state, 
    feed: updatedFeed 
  };
}

const addComment = (state, action) => {
  const { post_id, comment } = action;
  const { feed } = state;
  const updatedFeed = feed.map((post, key) => {
    if (post[post_id] === post_id) {
      return {
        ...post,
        comments: [
          ...post.comments, 
          comment
        ],
      };
    }
    return post;
  });
  return { 
    ...state, 
    feed: updatedFeed 
  };
}

const addPost = (state, action) => {
  const { post } = action;
  const { feed } = state;
  return {
    ...state,
    feed: {
      ...state.feed,
      post
    }
  }
}

const deleteComment = (state, action) => {
  const { post_id, comment_id } = action;
  const { feed } = state;

  const updatedFeed = feed.map(post => {
      if(post[post_id] === post_id){
        return post.filter(comment => comment[comment_id] !== comment_id)
      }
      return post;
  });
  return {
    ...state,
    feed: updatedFeed
  };
}

const deletePost = (state, action) => {
  const { post_id } = action;
  const { feed } = state;

  const updatedFeed = feed.filter(post => post[post_id] !== post_id)

  return {
    ...state,
    feed: updatedFeed
  }
}



export default postReducer

