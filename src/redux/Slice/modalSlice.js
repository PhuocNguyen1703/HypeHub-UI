import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        settingModalIsOpen: false,
        checkinModalIsOpen: true,
        calendarEventModalIsOpen: false,
    },
    reducers: {
        setSettingModalIsOpen: (state, action) => {
            state.settingModalIsOpen = action.payload;
        },
        setCheckinModalIsOpen: (state, action) => {
            state.checkinModalIsOpen = action.payload;
        },

        setCalendarEventModalIsOpen: (state, action) => {
            state.calendarEventModalIsOpen = action.payload;
        },
    },
});

export const { setSettingModalIsOpen, setCheckinModalIsOpen, setCalendarEventModalIsOpen } = modalSlice.actions;

export default modalSlice.reducer;
