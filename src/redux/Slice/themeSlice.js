import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        themeMode: 'theme-mode-default',
        sidebarColor: 'theme-color-default',
        navbarColor: 'theme-color-default',
    },
    reducers: {
        setThemeMode: (state, action) => {
            state.themeMode = action.payload;
        },
        setSidebarColor: (state, action) => {
            state.sidebarColor = action.payload;
        },
        setNavbarColor: (state, action) => {
            state.navbarColor = action.payload;
        },
    },
});

export const { setThemeMode, setSidebarColor, setNavbarColor } = themeSlice.actions;
export default themeSlice.reducer;
