import restApi from '../utils/createRestApi';

export default () => {

    return {
        getFeed: () => restApi.request({
            method: 'GET',
            url:`/posts/`
        }),
        likePost: post_id => restApi.request({
            method: 'POST',
            url: `posts/${post_id}/reactions`,
            data: post_id
        }),
        unReactPost: post_id => restApi.request({
            method: 'DELETE',
            url: `/posts/${post_id}/unreactions/`,
            data: post_id
        }),
        commentOnPost: (post_id, comment) => restApi.request({
            method: 'POST',
            url: `/posts/${post_id}/comments/`,
            data: {
                content: comment,
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
        editPost: (post_id, content) => restApi.request({
            method: 'PUT',
            url: `/posts/${post_id}/`,
            data: {
                content
            }
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

