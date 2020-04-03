import axios from 'axios';
import * as types from './actionTypes';
import { userService } from '../services';
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

export const userLoading = () => ({
  type: types.USER_LOADING
})

export const userLoaded = user => ({
  type: types.USER_LOADED,
  user
})

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


export const signup = data => async dispatch => {
    dispatch(authRequest());
    const dataSer = JSON.stringify(data);
    try {
        const response = await userService().authSignup(dataSer);
        const { token, user } = response.data;
        if (token)
            dispatch(authSuccess(token, user));
    }
    catch (error) {
        console.log(error);
        dispatch(authFailure(error));
    }
}

// export const login = (username, password) => async dispatch => {
//     dispatch(authRequest());
//     // const dataSer = JSON.stringify(data);
//     try {
//         const response = await userService().authLogin(username, password);
//         const { token, user } = response.data;
//         if (token){
//             dispatch(authSuccess(token, user));
//             console.log("Response denormalized", JSON.stringify(user));
//             console.log("Response normalized", normalize(user, userSchema));
//         }
//     }
//     catch (error) {
//         console.log(error);
//         console.log("Error ao conectar com a api");
//         dispatch(authFailure(error));
//     }
// }

export const login = (username, password) => {
  return dispatch => {
    dispatch(authRequest());

    return userService().authLogin(username, password)
      .then(response => {
        const { token, user } = response.data;
        if(token){
          dispatch(authSuccess(token, user));
          console.log("Response denormalized", user);
                console.log("Response normalized", normalize(user, userSchema));
        }
      })
      .catch(error => {
        console.log(error);
            console.log("Error ao conectar com a api");
            dispatch(authFailure(error));
      })
  }
}


export const loadUser = () => {
  return dispatch => {
    dispatch(userLoading());

    return userService().loadUser()
      .then( response => {
        dispatch(userLoaded(response.data));
      })
      .catch(error => {
        dispatch(authFailure());
        console.log("Erro ao pegar o usuario do backend:", error);
      })
  }
}