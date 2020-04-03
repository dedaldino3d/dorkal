import * as types from '../actions/actionTypes';
import merge from 'lodash/merge';


// initial state

const initialState = {
    isLoading: false,
    profile: {},
}


export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case types.USER_PROFILE_PAGE:
            return user_Profile_Page(state, action);
        default:
            if(action.entities && action.entities.profile){
                return merge({}, state, action.entities.profile);
            }
            return state;
    }
}


export const user_Profile_Page = (state, action) => {
    const { profile } = action;

    return {
        ...state,
        profile
    }
}


export default profileReducer