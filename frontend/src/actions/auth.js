import axios from 'axios';
import * as types from './actionTypes';
import { authService } from '../services';
import { normalize } from 'normalizr';
import { userSchema } from './schema';



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



export const facebookLogin = access_token => {
    return dispatch => {
            dispatch(authRequest());

            return authService().authFacebook(access_token)
                .then( response => {
                    const { token, user } = response.data;
                    if(token)
                        dispatch(authSuccess(token, user));
                })
                .catch( error => {
                    dispatch(authFailure(error));
                    console.log("Login with facebook fail, error:", error);
                })
    }
}

export const twitterLogin = access_token => {
    return dispatch => {

    }
}

const googleLogin = access_token => {

}


export const signup = data => async dispatch => {
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

export const login = (username, password) => {
  return dispatch => {
    dispatch(authRequest());

    return authService().authLogin(username, password)
      .then(response => {
        const { token, user } = response.data;
        if(token){
          dispatch(authSuccess(token, user));
        }
      })
      .catch(error => {
        console.log(error);
            console.log("Error when connecting on API, cannot login, error:", error);
            dispatch(authFailure(error));
      })
  }
}

