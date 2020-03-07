import axios from 'axios';
import { apiEndPoint } from '../config/app';

/*
    create an instance
        for requests with axios
        and configurations, this will be used
        for all endpoint that do an asynchronous actions
*/

// class RestApi{
//     constructor(config){
//         this.client = axios.create(config);
//     }

//     request = options => {
//         return this.client.request(options);
//     }
// }

// const createRestApi = () => ({
//     withConfig: config => new RestApi(config)
// });


const restApi = axios.create({baseURL: apiEndPoint});

restApi.defaults.headers = {'Content-Type': 'application/json'};
restApi.interceptors.request.use( config => {
    const token = window.localStorage.getItem('token');

    if(token){
        config.headers = Object.assign({
            Authorization: `JWT ${token}`
        }, config.headers);
    }
    return config;
});


export default restApi;
