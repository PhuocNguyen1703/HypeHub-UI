import { updateFailed, updateStart, updateSuccess } from '~/redux/Slice/authSlice';

export const updateUser = async (data, id, dispatch, accessToken, axiosJWT) => {
    dispatch(updateStart());

    try {
        const updatedUser = await axiosJWT.put(`/user/${id}`, data, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(updateSuccess(updatedUser.data));
    } catch (error) {
        dispatch(updateFailed());
    }
};
