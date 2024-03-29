import axios from 'axios';
import jwt_decode from 'jwt-decode';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000';
// http://localhost:5000
//https://minato-corp.herokuapp.com
const refreshToken = async () => {
    try {
        const res = await axios.post('/v1/api/auth/refresh');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const createAxios = (user, dispatch, stateSuccess) => {
    const axiosInstance = axios.create();
    //Interceptors
    //Add a request interceptor
    axiosInstance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            const decodedToken = jwt_decode(user?.accessToken);
            if (decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken();
                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken,
                };
                dispatch(stateSuccess(refreshUser));
                config.headers['token'] = 'Bearer ' + data.accessToken;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    //Add a response interceptor
    axiosInstance.interceptors.response.use(
        function (response) {
            return response.data;
        },
        function (error) {
            return Promise.reject(error);
        },
    );
    return axiosInstance;
};
