import axios from 'axios';

const httprequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const GET = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export default request;
