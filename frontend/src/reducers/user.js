import * as types from '../actions/actionTypes';


// initial state

const initialState = {
    isLoading: false,
}


export const userReducer = (state=initialState, action) => {
    switch(action.type){
        case types.SET_USER_LIST_REQUEST:
            return setUserListRequest(state, action);
        case types.SET_USER_LIST_SUCCESS:
            return setUserListSuccess(state, action);
        case types.SET_USER_LIST_FAILURE:
            return setUserListFailure(state, action);
        case types.FOLLOW_USER:
            return followUser(state, action);
        case types.UNFOLLOW_USER:
            return unfollowUser(state, action);
        case types.BLOCK_USER:
            return blockUser(state, action);
        case types.UNBLOCK_USER:
            return unblockUser(state, action);
        case types.SET_POST_LIST_REQUEST:
            return setPostListRequest(state, action);
        case types.SET_POST_LIST_SUCCESS:
            return setPostListSuccess(state, action);
        case types.SET_POST_LIST_FAILURE:
            return setPostListFailure(state, action);
        case types.USER_PROFILE_PAGE:
            return setUser_Profile_Page(state, action);
        default:
            return state;
    }
}
    

// reducer functions (mini)


export const setUser_Profile_Page = (state, action) => {
    const { userProfile } = action;

    return {
        ...state,
        userProfile
    }
}

const setUserListRequest = (state, action) => {
    return {
        ...state,
        isLoading: true,
    };
}

const setUserListSuccess = (state, action) => {
    const { userList } = action;
    return {
        ...state,
        isLoading: false,
        userList
    };
}

const setUserListFailure = (state, action) => {
    const { error } = action;
    return {
        ...state,
        isLoading: false,
        error
    };
}
const followUser = (state, action) => {
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

const unfollowUser = (state, action) => {
    const { user_id } = action;
    const { userList } = state;
    const updateUserList = userList.map( user => {
        if(user.user_id === user_id){
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

const blockUser = (state, action) => {
    const { user_id } = action;
    const { userList } = state;
    const updateUserList = userList.map( user => {
        if(user.user_id === user_id){
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

const unblockUser = (state, action) => {
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

const setPostListRequest = (state, action) => {
    return {
        ...state,
        isLoading: true,
    };
}

const setPostListSuccess = (state, action) => {
    const { postList } = action;
    return {
        ...state,
        isLoading: false,
        postList
    };
}

const setPostListFailure = (state, action) => {
    const { error } = action;
    return {
        ...state,
        isLoading: false,
        error
    };
}


export default userReducer;