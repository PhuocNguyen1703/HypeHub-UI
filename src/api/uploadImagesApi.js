import axios from 'axios';

export const uploadImages = async (data) => {

    try {
        const res = await axios.post('/api/upload/images', { data });
        return res.data.secure_url;
    } catch (error) {
        console.log(error);
    }
};
