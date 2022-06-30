import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Slice/authSlice.js';

export default configureStore({
    reducer: {
        auth: authReducer,
    },
});
