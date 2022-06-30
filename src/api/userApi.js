import axios from 'axios';
import {
    loginFailed,
    loginStart,
    loginSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
} from '~/redux/Slice/authSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());

    try {
        const res = await axios.post('http://localhost:5000/auth/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(loginFailed());
    }
};

export const registerUser = async (user, dispatch) => {
    dispatch(registerStart());

    try {
        await axios.post('http://localhost:5000/auth/register', user);
        dispatch(registerSuccess());
    } catch (error) {
        dispatch(registerFailed());
    }
};
