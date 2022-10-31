import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        selectedTodoItem: null,
    },
    reducers: {
        setSelectedTodoItem: (state, action) => {
            state.selectedTodoItem = action.payload;
        },
    },
});

export const { setSelectedTodoItem } = todoSlice.actions;
export default todoSlice.reducer;
