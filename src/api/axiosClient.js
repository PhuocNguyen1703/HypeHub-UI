import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/',
});

//Interceptors
//Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

//Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default axiosClient;
