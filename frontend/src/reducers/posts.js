import * as types from '../actions/actionTypes';



const initialState = {};

//Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_FEED:
      return applySetFeed(state, action);
    case types.is_liked:
      return applyLikePhoto(state, action);
    case types.UNLIKE:
      return applyUnlikePhoto(state, action);
    case types.ADD_COMMENT:
      return applyAddComment(state, action);
    default:
      return state;
  }
}

// Reducer Functions


const applyLikePhoto = (state, action) => {
  const { postId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { ...photo, is_liked: true, like_count: post.like_count + 1 };
    }
    return photo;
  });
  return { ...state, feed: updatedFeed };
}

const applyUnlikePhoto = (state, action) => {
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { ...photo, is_liked: false, like_count: photo.like_count - 1 };
    }
    return photo;
  });
  return { ...state, feed: updatedFeed };
}

const applyAddComment = (state, action) => {
  const { photoId, comment } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return {
        ...photo,
        comments: [...photo.comments, comment]
      };
    }
    return photo;
  });
  return { ...state, feed: updatedFeed };
}