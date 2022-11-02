import { createSlice } from '@reduxjs/toolkit';

const kanbanSlice = createSlice({
    name: 'kanban',
    initialState: {
        selectedItem: null,
    },
    reducers: {
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload;
        },
    },
});

export const { setSelectedItem } = kanbanSlice.actions;

export default kanbanSlice.reducer;