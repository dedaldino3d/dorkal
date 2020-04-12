import * as types from './actionTypes';
import { userService } from '../services';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { authLogout, authFailure } from './auth.js';

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

export const setUserListSuccess = userList => {
    return {
        type: types.USER_LIST_SUCCESS,
        userList
    }
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

export const setUserProfile_request = () => {
    return {
        type: types.USER_PROFILE_REQUEST,
    }
}

export const setUserProfile = userProfile => {
    return {
        type: types.USER_PROFILE_PAGE,
        userProfile
    }
}

export const edit_profile_request = () => ({
    type: types.EDIT_PROFILE_REQUEST,
})

export const edit_profile_success = userProfile => ({
    type: types.EDIT_PROFILE_SUCCESS,
    userProfile
})

export const edit_profile_failure = error => ({
    type: types.EDIT_PROFILE_FAILURE,
    error
})

export const userLoading = () => ({
  type: types.USER_LOADING
})

export const userLoaded = user => ({
  type: types.USER_LOADED,
  user
})


// Actions creators (asyncronous)


const passwordReset = () => {

}

const passwordChange = () => {

}


export const loadUser = () => {
    return dispatch => {
      dispatch(userLoading());
  
       return userService().loadUser()
        .then(response => {
            if(response.status === 401){
                dispatch(authLogout());
            }else{
                const user = response.data;
                dispatch(userLoaded(user));
            }
        })
        .catch(error => {
            dispatch(authFailure(error));
        })
    }
}


export const profile = username => {
    return dispatch => {
        dispatch(setUserProfile_request());

        return userService().profile(username)
            .then(response => {
                if(response.status === 401)
                    dispatch(authLogout())
                dispatch(setUserProfile(response.data));
            })
            .catch(error => {
                console.log("Profile not loaded");
                // dispatch('any actions');
            });
    };
}

export const editProfile = data => {
    return dispatch => {
        dispatch(edit_profile_request);

        return userService().editProfile(data)
            .then(response => {
                if(response.status === 401){
                    dispatch(authLogout());
                }else{
                    dispatch(edit_profile_success);
                }
            })
            .catch(error => {
                dispatch(edit_profile_failure);
            })
    }
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
                    dispatch(setUserListSuccess(data))
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
            dispatch(setUserListSuccess(data));
        }
      })
      .catch(error => {
        console.log("Can't get explore, finded some errors: ", error);
      });
  };
}

export const searchByTerm = (searchTerm) => {

  return async (dispatch) => {
    try{
        const userList = await searchUsers(searchTerm);
        if (userList === 401) {
          dispatch(authLogout());
        }
        dispatch(setUserListSuccess(userList));
    }catch(error){
        console.log("There was an error when trying get the userList for search: ", error);
        // dispatch(setUserListFailure(error));
    }
  };
}


const searchUsers = (searchTerm) => {

    return userService().searchUsers(searchTerm)
        .then(response => {
            if (response.status === 401) {
                return 401;
            }
            return response.data;
        })
}


// const searchPosts = (searchTerm) => {

//     return userService().searchPosts(searchTerm)
//         .then(response => {
//           if (response.status === 401) {
//             return 401;
//           }
//           return response.data;
//         })
// }


