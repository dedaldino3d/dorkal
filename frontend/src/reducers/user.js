import * as types from '../actions/actionTypes';


// initial state

const initialState = {
    isAuthenticated: false,
    token: null,
    isLoading: false,
    user: null
}


const userReducer = (state=initialState, action) => {
    switch(action.type){
        case types.AUTH_REQUEST:
            return applyAuthRequest(state, action);
        case types.AUTH_SUCCESS:
            return applyAuthSuccess(state, action);
        case types.AUTH_FAILURE:
            return applyAuthFailure(state, action);
        case types.AUTH_LOGOUT:
            return applyAuthLogout(state, action);
        case types.SET_USER_LIST_REQUEST:
            return applySetUserListRequest(state, action);
        case types.SET_USER_LIST_SUCCESS:
            return applySetUserListSuccess(state, action);
        case types.SET_USER_LIST_FAILURE:
            return applySetUserListFailure(state, action);
        case types.FOLLOW_USER:
            return applyFollowUser(state, action);
        case types.UNFOLLOW_USER:
            return applyUnfollowUser(state, action);
        case types.BLOCK_USER:
            return applyBlockUser(state, action);
        case types.UNBLOCK_USER:
            return applyUnblockUser(state, action);
        case types.SET_POSTS_LIST_REQUEST:
            return applySetPostsListRequest(state, action);
        case types.SET_POSTS_LIST_SUCCESS:
            return applySetPostsListSuccess(state, action);
        case types.SET_POSTS_LIST_FAILURE:
            return applySetPostsListFailure(state, action);
        default:
            return state;
    }
}


// reducer functions (mini)


const applyAuthRequest = (state, action) => {
    return {
        ...state,
        isAuthenticated: false,
        isLoading: true,
        token: null,
        user: null
    };
}
const applyAuthSuccess = (state, action) => {
    const { token, user } = action;
    localStorage.setItem("jwt", token);
    return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user,
        token
    };
}

const applyAuthFailure = (state, action) => {
    const { error } = action;
    return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        token: null,
        user: null,
        error
    };
}
const applyAuthLogout = (state, action) => {
    localStorage.removeItem("jwt");
    return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        token: null,
        user: null
    };
}

const applySetUserListRequest = (state, action) => {
    return {
        ...state,
        isLoading: true,
    };
}

const applySetUserListSuccess = (state, action) => {
    const { userList } = state.auth;
    return {
        ...state,
        userList,
        isLoading: false
    };
}

const applySetUserListFailure = (state, action) => {
    const { error } = action;
    return {
        ...state,
        isLoading: false,
        error
    };
}
const applyFollowUser = (state, action) => {
    const { user_id } = action;
    const { userList } = state;
    const updateUserList = userList.map( user => {
        if(user.user_id === user_id ){
            return {
                ...user,
                following: true
            };
        }
        return user;
    });
    return {
        ...state,
        userList: updateUserList
    };
}

const applyUnfollowUser = (state, action) => {
    const { user_id } = action;
    const { userList } = state;
    const updateUserList = userList.map( user => {
        if(user.id === user_id){
            return {
                ...user,
                following: false
            };
        }
        return user;
    });
    return {
        ...state,
        userList: updateUserList
    };
}

const applyBlockUser = (state, action) => {
    const { user_id } = action;
    const { userList } = state;
    const updateUserList = userList.map( user => {
        if(user.id === user_id){
            return {
                ...user,
                blocking: false
            };
        }
        return user;
    });
    return {
        ...state,
        userList: updateUserList
    };
}

const applyUnblockUser = (state, action) => {
    const { user_id } = action;
    const { userList } = state;
    const updateUserList = userList.map( user => {
        if(user.id === user_id){
            return {
                ...user,
                blocking: false
            };
        }
        return user;
    });
    return {
        ...state,
        userList: updateUserList
    };
}

const applySetPostsListRequest = (state, action) => {
    return {
        ...state,
        isLoading: true,
    };
}

const applySetPostsListSuccess = (state, action) => {
    const { postsList } = action;
    return {
        ...state,
        isLoading: false,
        postsList
    };
}

const applySetPostsListFailure = (state, action) => {
    const { error } = action;
    return {
        ...state,
        isLoading: false,
        error
    };
}

export default userReducer;