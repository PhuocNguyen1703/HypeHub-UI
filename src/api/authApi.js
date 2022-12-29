import axios from 'axios';
import {
    loginFailed,
    loginStart,
    loginSuccess,
    logOutFailed,
    logOutStart,
    logOutSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
} from '~/redux/Slice/authSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());

    try {
        const res = await axios.post('v1/api/auth/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(loginFailed());
        return error.response.data;
    }
};

export const registerUser = async (user, dispatch) => {
    dispatch(registerStart());

    try {
        await axios.post('v1/api/auth/register', user);
        dispatch(registerSuccess());
    } catch (error) {
        dispatch(registerFailed());
    }
};

export const logOutUser = async (dispatch, id, navigate, accessToken, axiosJWT) => {
    dispatch(logOutStart());

    try {
        await axiosJWT.post(
            '/v1/api/auth/logout',
            { _id: id },
            {
                headers: { token: `Bearer ${accessToken}` },
            },
        );
        dispatch(logOutSuccess());
        navigate('/login');
    } catch (error) {
        dispatch(logOutFailed());
    }
};
