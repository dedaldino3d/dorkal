import { AUTH_SUCCESS, AUTH_LOGOUT } from "./actions/actionTypes";
import restApi from './utils/createRestApi';

export const localStorageMiddleware = store => next => action => {
    
    if( action.type === AUTH_SUCCESS) {
        window.localStorage.setItem('token', action.token);
    } else if (action.type === AUTH_LOGOUT){
        window.localStorage.removeItem('token');
    }

    next(action);

};



export default localStorageMiddleware