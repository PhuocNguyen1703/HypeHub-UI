import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        settingModalIsOpen: false,
        calendarEventModalIsOpen: false,
    },
    reducers: {
        setSettingModalIsOpen: (state, action) => {
            state.settingModalIsOpen = action.payload;
        },

        setCalendarEventModalIsOpen: (state, action) => {
            state.calendarEventModalIsOpen = action.payload;
        },
    },
});

export const { setSettingModalIsOpen, setCalendarEventModalIsOpen } = modalSlice.actions;

export default modalSlice.reducer;
