import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        contentWidth: 'content-width-full',
        sidebarCollapsed: false,
    },
    reducers: {
        setContentWidth: (state, action) => {
            state.contentWidth = action.payload;
        },
        setSidebarCollapsed: (state, action) => {
            state.sidebarCollapsed = action.payload;
        },
    },
});

export const { setContentWidth, setSidebarCollapsed } = layoutSlice.actions;
export default layoutSlice.reducer;
