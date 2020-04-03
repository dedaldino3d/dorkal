import * as types from '../actions/actionTypes';


const initialState = {
    isAuthenticated: false,
    isLoading: false,
}


const authReducer = (state= initialState, action) => {
    switch(action.type){
        case types.AUTH_REQUEST:
            return authRequest(state, action);
        case types.AUTH_SUCCESS:
            return authSuccess(state, action);
        case types.AUTH_FAILURE:
            return authFailure(state, action);
        case types.AUTH_LOGOUT:
            return authLogout(state, action);
        case types.USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case types.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.user
            };
        default:
            return state;
    }
}


const authRequest = (state, action) => {
    return {
        ...state,
        isAuthenticated: false,
        isLoading: true,
    };
}
const authSuccess = (state, action) => {
    return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
    };
}

const authFailure = (state, action) => {
    const { error } = action;
    return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        error
    };
}
const authLogout = (state, action) => {
    return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
    };
}


export default authReducer