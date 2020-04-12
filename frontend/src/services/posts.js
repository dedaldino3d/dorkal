import restApi from '../utils/createRestApi';

export default () => {

    return {
        getFeed: () => restApi.request({
            method: 'GET',
            url:`/posts/`
        }),
        reactPost: (post_id, type_react)=> restApi.request({
            method: 'POST',
            url: `posts/${post_id}/react`,
            data: {
                post_id,
                type_react
            }
        }),
        unReactPost: post_id => restApi.request({
            method: 'DELETE',
            url: `/posts/${post_id}/unreact/`,
            data: post_id
        }),
        commentOnPost: (post_id, content) => restApi.request({
            method: 'POST',
            url: `/posts/${post_id}/comments/`,
            data: {
                content,
            }
        }),
        deleteComment: (post_id, comment_id) =>restApi.request({
            method: 'DELETE',
            url: `/posts/${post_id}/comments/${comment_id}/`
        }),
        moderateComment: (post_id, comment_id) => restApi.request({
            method: 'DELETE',
            url: `posts/${post_id}/comments/${comment_id}/`
        }),
        addPost: dataSer => restApi.request({
            method: 'POST',
            url: `/posts/`,
            data: dataSer
        }),
        editPost: (post_id, data) => restApi.request({
            method: 'PUT',
            url: `/posts/${post_id}/`,
            data
        }),
        deletePost: post_id => restApi.request({
            method: 'DELETE',
            url: `/posts/${post_id}/`
        }),
        postDetail: post_id => restApi.request({
            method: 'GET',
            url: `/posts/${post_id}/`
        }),
        editComment: (post_id, comment_id, content) => restApi.request({
            method: 'PUT',
            url: `posts/${post_id}/${comment_id}/`,
            data: {
                content
            }
        })
        // I need implement an endpoint of API that will be responsible
        // by social login and authentication (on both system <backend> and <frontend>)
    };
};

