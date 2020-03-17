import restApi from '../utils/createRestApi';


export default () => {

    return {
        authLogin: (username, password) => restApi.request({
            method: 'POST',
            url: '/auth/login/',
            data: {
                login_field: username,
                password
            }
        }),
        authSignup: (username, email, password1, password2) => restApi.request({
            method: 'POST',
            url: '/auth/register/',
            data: {
                username,
                email,
                password1,
                password2
            }
        }),
        profile: username => restApi.request({
            method: 'GET',
            url: `/users/${username}`
        }),
        followUser: user_id => restApi.request({
            method: 'POST',
            url: `/users/${user_id}/follow`
        }),
        unfollowUser: user_id => restApi.request({
            method: 'DELETE',
            url: `/users/${user_id}/unfollow`
        }),
        getPostsReactions: post_id => restApi.request({
            method: 'GET',
            url: `/posts/${post_id}/reactions`
        }),
        getExplore: () => restApi.request({
            method: 'GET',
            url: '/users/explore/'
        }),
        searchUsers: searchTerm => restApi.request({
            method: 'GET',
            url: `/users/search/?username=${searchTerm}`,
        }),
        // below will not work yet, check back-end
        searchPost: searchTerm => restApi.request({
            method: 'GET',
            url: `/posts/search/?dorks=${searchTerm}`
        })


        // I need implement a endpoint of API that will be responsible
        // by social login and authentication (on both system <backend> and <frontend>)
    };
};

