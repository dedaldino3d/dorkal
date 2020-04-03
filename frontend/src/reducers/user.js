import * as types from '../actions/actionTypes';
import merge from 'lodash/merge';



// initial state

const initialState = {
    isLoading: false,
}


export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case types.AUTH_SUCCESS:
            return setUser_success(state, action);
        case types.FOLLOW_USER:
            return followUser(state, action);
        case types.UNFOLLOW_USER:
            return unfollowUser(state, action);
        case types.BLOCK_USER:
            return blockUser(state, action);
        case types.UNBLOCK_USER:
            return unblockUser(state, action);
        case types.POST_LIST_SUCCESS:
            return postListSuccess(state, action);
        case types.USER_PROFILE_PAGE:
            return userProfile_page(state, action);
        case types.EDIT_PROFILE_PAGE:
            return editProfile_page(state, action);
        default:
            if(action.entities && action.entities.user){
                return merge({}, state, action.entities.user)
            }
            return state;
    }
}
    

// reducer functions (mini)


const setUser_success = (state, action) => {
    const { user } = action;

    return {
        ...state,
        user,
    }
}

const userProfile_page = (state, action) => {
    return {
        ...state
    }
}

const editProfile_page = (state, action) => {
    const { user_id, username, email, phone_number } = action;
    const { user } = state;
    if(user.username === username){
        return {
            ...state,
            user: {
                ...state.user,
                username: username ? username : state.user.username,
                email: email ? email : state.user.email,
                phone_number: phone_number ? phone_number : state.user.phone_number,
                profile: {
                    ...state.user.profile,
                    first_name: action.first_name ? action.first_name: state.user.profile.first_name,
                    last_name: action.last_name ? action.last_name: state.user.profile.last_name,
                    gender: action.gender ? action.gender: state.user.profile.gender,
                    location: action.location ? action.location: state.user.profile.location,
                    occupation: action.occupation ? action.occupation: state.user.profile.occupation,
                    DOB: action.DOB ? action.DOB: state.user.profile.DOB,
                    about: action.about ? action.about: state.user.profile.about,
                }
            }
        }
    }
    return {
        ...state
    }
}

const userListSuccess = (state, action) => {
    const { userList } = action;
    return {
        ...state,
        isLoading: false,
        userList
    };
}

const followUser = (state, action) => {
    const { user_id } = action;
    const { user } = state;
    
    if(user.user_id === user_id){
        return {
            ...state,
            user: {
                ...state.user,
                following: true
            }
        }    
    }
    return {
        ...state
    }
}

const unfollowUser = (state, action) => {
    const { user_id } = action;
    const { user } = state;
    
    if(user.user_id === user_id){
        return {
            ...state,
            user: {
                ...state.user,
                following: false
            }
        }    
    }
    return {
        ...state
    }
}

const blockUser = (state, action) => {
    const { user_id } = action;
    const { user } = state;
    
    if(user.user_id === user_id){
        return {
            ...state,
            user: {
                ...state.user,
                blocking: true
            }
        }    
    }
    return {
        ...state
    }
}

const unblockUser = (state, action) => {
    const { user_id } = action;
    const { user } = state;
    
    if(user.user_id === user_id){
        return {
            ...state,
            user: {
                ...state.user,
                blocking: false
            }
        }    
    }
    return {
        ...state
    }
}

const postListSuccess = (state, action) => {
    const { postList } = action;
    return {
        ...state,
        isLoading: false,
        postList
    };
}



export default userReducer;