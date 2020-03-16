import * as types from './actionTypes';
import { userService } from '../services';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { authLogout } from './auth.js';

// Actions creators for users (syncronous)



export const setFollowUser = user_id => {
    return {
        type: types.FOLLOW_USER,
        user_id
    }
}

export const setUnfollowUser = user_id => {
    return {
        type: types.UNFOLLOW_USER,
        user_id
    }
}

export const setUserListRequest = () => {
    return {
        type: types.SET_USER_LIST_REQUEST
    }
}

export const setUserListSuccess = userList => {
    return {
        type: types.SET_USER_LIST_SUCCESS,
        userList
    }
}

export const setUserListFailure = error => {
    return {
        type: types.SET_USER_LIST_FAILURE,
        error
    }
}

export const setPostListRequest = () => {
    return {
        type: types.SET_POST_LIST_REQUEST
    };
}

export const setPostListSuccess = postList => {
    return {
        type: types.SET_POST_LIST_REQUEST,
        postList
    };
}
export const setPostListFailure = error => {
    return {
        type: types.SET_POST_LIST_REQUEST,
        error
    };
}

export const setBlockUser = user_id => {
    return {
        type: types.BLOCK_USER,
        user_id
    }
}

export const setUnblockUser = user_id => {
    return {
        type: types.UNBLOCK_USER,
        user_id
    }
}

export const setUserProfile = userProfile => {
    return {
        type: types.USER_PROFILE_PAGE,
        userProfile
    }
}

// Actions creators (asyncronous)


const passwordReset = () => {

}

const passwordChange = () => {

}

export const profile = username => {
    return dispatch => {
        return userService().profile(username)
            .then(response => {
                if(response.status === 401)
                    dispatch(authLogout())
                const data = normalize(response.data, schema.userSchema)
                dispatch(setUserProfile(data.entities));
            })
            .catch(error => {
                console.log("Profile not loaded");
                // dispatch('any actions');
            });
    };
}


export const followUser = user_id => {
    return dispatch => {
        dispatch(setFollowUser(user_id));
        return userService().followUser(user_id)
            .then(response => {
                if(response.status === 401){
                    console.log("Credencias invalidas");
                    dispatch(authLogout());
                }
                else if(!response.ok)
                    dispatch(setUnfollowUser(user_id));
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const unfollowUser = user_id => {
    return dispatch => {
        dispatch(setUnfollowUser(user_id));
        return userService().unfollowUser(user_id)
            .then(response => {
                if(response.statys === 401){
                    console.log("Credencias invalidas");
                    dispatch(authLogout());
                }
                else if(!response.ok)
                    dispatch(setFollowUser(user_id));
            })
            .catch(error => {
                console.log(error);
            })
    };
}


export const getPostReactions = post_id => {
    return dispatch => {
        return userService().getPostReactions(post_id)
        .then(response => {
                if(response.status === 401){
                    console.log("Credencias invalidas");
                    dispatch(authLogout());
                }else {
                    const data = normalize(response.data, schema.userListSchema);
                    dispatch(setUserListSuccess(data.entities))
                }
            })
    };
}


export const getExplore = () => {
  return dispatch => {
    
    return userService().getExplore()
      .then(response => {
        if (response.status === 401) {
          dispatch(authLogout());
        }else {
            const data = normalize(response.data, schema.userListSchema)
            dispatch(setUserListSuccess(data.entities));
        }
      })
      .catch(error => {
        console.log("Can't get explore, finded some errors");
      });
  };
}

export const searchByTerm = (searchTerm) => {
  return async (dispatch) => {
    try{
        const userList = await userService().searchUsers(searchTerm);
        const postList = await userService().searchPosts(searchTerm);
        if (userList === 401 || postList === 401) {
          dispatch(authLogout());
        }
        const userListNormalized = normalize(userList, schema.userListSchema);
        const postListNormalized = normalize(postList, schema.feedSchema);
        dispatch(setUserListSuccess(userListNormalized.entities));
        dispatch(setPostListSuccess(postListNormalized.entities));
    }catch(error){
        dispatch(setPostListFailure(error));
        dispatch(setUserListFailure(error));
    }
  };
}

export const searchUsers = (searchTerm) => {
  return dispatch => {

    return userService().searchUsers(searchTerm)
        .then(response => {
            if (response.status === 401) {
                return 401;
            }
            return response.data;
        })
    }
}

export const searchPosts = (searchTerm) => {
  return dispatch => {

    return userService().searchPosts(searchTerm)
        .then(response => {
          if (response.status === 401) {
            return 401;
          }
          return response.data;
        })
    }
}