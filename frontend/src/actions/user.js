import axios from 'axios';
import * as types from './actionTypes';
import { authService } from '../services';


// Actions creators for users (syncronous)



export const authRequest = () => {
    return {
      type: types.AUTH_REQUEST
    };
}

export const authSuccess = (token, user) => {
    return {
      type: types.AUTH_SUCCESS,
      token,
      user
    };
}

export const authFailure = error => {
    return {
      type: types.AUTH_FAILURE,
      error
    };
}

export const authLogout = () => {
    return {
      type: types.AUTH_LOGOUT,
    };
}

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

export const setPostsListRequest = () => {
    return {
        type: types.SET_POSTS_LIST_REQUEST
    };
}

export const setPostsListSuccess = postList => {
    return {
        type: types.SET_POSTS_LIST_REQUEST,
        postList
    };
}
export const setPostsListFailure = error => {
    return {
        type: types.SET_POSTS_LIST_REQUEST,
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


// Actions creators (asyncronous)

export const facebookLogin = access_token => {
    return dispatch => {
        axios.defaults.headers = {
            'Content-Type': 'application/json'
        }
        axios.post("/auth/social/facebook/", { access_token })
            .then(response => {
                return console.log(response.data)
            })
            
    }
}

export const twitterLogin = access_token => {
    return dispatch => {
        axios.defaults.headers = {
            'Content-Type': 'application/json'
        }
        axios.post("http://127.0.0.1:8000/auth/social/twitter")
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const googleLogin = access_token => {

}

const weiboLogin = access_token => {

}

export const authSignup = data => async dispatch => {
    dispatch(authRequest());
    const dataSer = JSON.stringify(data);
    try {
        const response = await authService().authSignup(dataSer);
        const { token, user } = response.data;
        if (token)
            dispatch(authSuccess(token, user));
    }
    catch (error) {
        console.log(error);
        dispatch(authFailure(error));
    }
}

export const authLogin = data => async dispatch => {
    dispatch(authRequest());
    const dataSer = JSON.stringify(data);
    try {
        const response = await authService().authLogin(dataSer);
        const { token, user } = response.data;
        if (token)
            dispatch(authSuccess(token, user));
    }
    catch (error) {
        console.log(error);
        dispatch(authFailure(error));
    }
}

const passwordReset = () => {

}

const passwordChange = () => {

}

export const followUser = user_id => {
    return (dispatch, getState) => {
        dispatch(setFollowUser(user_id));
        const { auth: {token}} = getState();
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`
        }
        axios.post(`127.0.0.1:8000/users/${user_id}/follow`)
            .then(response => {
                if(response.status === 401)
                    console.log("Credencias invalidas");
                    // dispatch(authLogout());
                else if(!response.ok)
                    dispatch(setUnfollowUser(user_id));
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const unfollowUser = user_id => {
    return (dispatch, getState) => {
        dispatch(setUnfollowUser(user_id));
        const { auth: { token}} = getState();
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`
        }
        axios.post(`http://127.0.0.1:8000/users/${user_id}/unfollow/`)
            .then(response => {
                if(response.statys === 401)
                console.log("Credencias invalidas");
                    // dispatch(authLogout());
                else if(!response.ok)
                    dispatch(setFollowUser(user_id));
            })
            .catch(error => {
                console.log(error);
            })
    };
}


export const getPostsLikes = post_id => {
    return (dispatch, state) => {
        axios.post(`http://127.0.0.1:8000/images/${post_id}/likes/`)
            .then(response => {
                if(response.status === 401){
                    console.log("Credencias invalidas");
                    // dispatch(authLogout());
                }
                return response.json();
            })
            .then(json => {
                dispatch(setUserListSuccess(json))
            })
    };
}

