import restApi from '../utils/createRestApi';

export default () => {

    // const client = createRestApi().withConfig({baseURL: apiEndPoint, 
    //     headers: {
    //         "Content-Type":"application/json"
    //     }}
    // );

    return {
        // authLogin: data => restApi.request({
        //     method: 'POST',
        //     url: 'auth/login/',
        //     data: data
        // }),
        // authSignup: data => restApi.request({
        //     method: 'POST',
        //     url: 'auth/register/',
        //     data: data
        // }),
        asyncLikePost: postId => restApi.request({
            method: 'POST',
            url: `images/${postId}/likes`,
            data: postId
        }),
        asyncUnlikePost: postId => restApi.request({
            method: 'DELETE',
            url: `/images/${postId}/unlikes/`,
            data: postId
        }),
        asyncCommentPost: (postId, message) => ({
            method: 'POST',
            url: `/images/${postId}/comments/`,
            data: message
        })
        // I need implement a endpoint of API that will be responsible
        // by social login and authentication (on both system <backend> and <frontend>)
    };
};
