import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const GET = async (path, option = {}) => {
    const response = await httpRequest.get(path, option);
    return response.data;
};

export default request;
