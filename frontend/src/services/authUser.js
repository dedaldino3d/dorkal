import restApi from '../utils/createRestApi';

/*
    withConfig? options:
        baseURL: http://127.0.0.1:8000/,
        method? : <Any allowed method>, 
        headers? : headers for request,
        adapter?: <adapter instance>,
        data?: <data> serializable content,
        timeout?: <timeout> request limit,
        ...and so on
*/

export default () => {

    // const client = createRestApi().withConfig({baseURL: apiEndPoint, 
    //     headers: {
    //         "Content-Type":"application/json"
    //     }}
    // );

    return {
        authLogin: data => restApi.request({
            method: 'POST',
            url: 'auth/login/',
            data: data
        }),
        authSignup: data => restApi.request({
            method: 'POST',
            url: 'auth/register/',
            data: data
        }),
        // I need implement a endpoint of API that will be responsible
        // by social login and authentication (on both system <backend> and <frontend>)
    };
};

