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
            url: `posts/${postId}/reactions`,
            data: postId
        }),
        asyncUnlikePost: postId => restApi.request({
            method: 'DELETE',
            url: `/posts/${postId}/unreactions/`,
            data: postId
        }),
        asyncCommentPost: (postId, content) => ({
            method: 'POST',
            url: `/posts/${postId}/comments/`,
            data: content
        })
        // I need implement an endpoint of API that will be responsible
        // by social login and authentication (on both system <backend> and <frontend>)
    };
};

