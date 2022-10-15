import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        sidebarColor: '',
        navbarColor: '',
    },
    reducers: {
        setSidebarColor: (state, action) => {
            state.sidebarColor = action.payload;
        },
        setNavbarColor: (state, action) => {
            state.navbarColor = action.payload;
        },
    },
});

export const { setSidebarColor, setNavbarColor } = themeSlice.actions;
export default themeSlice.reducer;
