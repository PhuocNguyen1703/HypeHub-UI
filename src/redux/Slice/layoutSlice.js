const { createSlice } = require('@reduxjs/toolkit');

const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        sidebarCollapsed: false,
    },
    reducers: {
        setSidebarCollapsed: (state, action) => {
            state.sidebarCollapsed = action.payload;
        },
    },
});

export const { setSidebarCollapsed } = layoutSlice.actions;
export default layoutSlice.reducer;
