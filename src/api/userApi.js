import axios from 'axios';
import { updateFailed, updateStart, updateSuccess } from '~/redux/Slice/authSlice';

export const getUser = async (userId) => {
    try {
        const user = await axios.get(`/v1/api/users/${userId}`);
        return user;
    } catch (error) {
        console.log(error);
    }
};

export const getAllUser = async () => {
    try {
        const allUser = await axios.get('/user');
        return allUser;
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = async (data, id, dispatch, accessToken, axiosJWT) => {
    dispatch(updateStart());

    try {
        const updatedUser = await axiosJWT.patch(`/user/${id}`, data, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(updateSuccess(updatedUser.data));
    } catch (error) {
        dispatch(updateFailed());
    }
};

export const updateUserFaceId = async (data, id, dispatch, accessToken, axiosJWT) => {
    dispatch(updateStart());

    try {
        const updatedUser = await axiosJWT.patch(`/user/${id}`, data, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(updateSuccess(updatedUser.data));
    } catch (error) {
        dispatch(updateFailed());
    }
};
