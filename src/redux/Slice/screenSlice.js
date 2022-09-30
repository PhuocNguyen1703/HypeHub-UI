import { createSlice } from '@reduxjs/toolkit';

const screenSlice = createSlice({
    name: 'screen',
    initialState: {
        isFullscreen: false,
    },
    reducers: {
        setIsFullscreen: (state, action) => {
            state.isFullscreen = action.payload;
        },
    },
});

export const { setIsFullscreen } = screenSlice.actions;
export default screenSlice.reducer;
