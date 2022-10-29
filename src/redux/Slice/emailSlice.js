import { createSlice } from '@reduxjs/toolkit';

const emailSlice = createSlice({
    name: 'email',
    initialState: {
        selectedItem: null,
    },
    reducers: {
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload;
        },
    },
});

export const { setSelectedItem } = emailSlice.actions;

export default emailSlice.reducer;
