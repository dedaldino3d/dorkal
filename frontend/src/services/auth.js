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
        authFacebook: access_token => restApi.request({
            method: 'POST',
            url: '/auth/login/facebook/',
            data:{
                access_token
            }
        }),
        authGoogle: access_token => restApi.request({
            method: 'POST',
            url: '/auth/login/google/',
            data: {
                access_token
            }
        }),
        authTwitter: access_token => restApi.request({
            method: 'POST',
            url: '/auth/login/twitter',
            data: {
                access_token
            }
        }),
     };

};