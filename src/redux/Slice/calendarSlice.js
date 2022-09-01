import dayjs from 'dayjs';

import { createSlice } from '@reduxjs/toolkit';

const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        monthIndex: dayjs().month(),
    },
    reducers: {
        setMonthIndex: (state, action) => {
            state.monthIndex = action.payload;
        },
    },
});

export const { setMonthIndex } = calendarSlice.actions;

export default calendarSlice.reducer;
