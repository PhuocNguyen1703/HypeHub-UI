import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        settingModalIsOpen: false,
        faceRecognitionModalIsOpen: false,
        faceRecognitionTitle: '',
        composeEmailModalIsOpen: false,
        contactManagementModalIsOpen: false,
        calendarEventModalIsOpen: false,
    },
    reducers: {
        setSettingModalIsOpen: (state, action) => {
            state.settingModalIsOpen = action.payload;
        },
        setFaceRecognitionModalIsOpen: (state, action) => {
            state.faceRecognitionModalIsOpen = action.payload;
        },
        setFaceRecognitionTitle: (state, action) => {
            state.faceRecognitionTitle = action.payload;
        },
        setComposeEmailModalIsOpen: (state, action) => {
            state.composeEmailModalIsOpen = action.payload;
        },
        setContactManagementModalIsOpen: (state, action) => {
            state.contactManagementModalIsOpen = action.payload;
        },
        setCalendarEventModalIsOpen: (state, action) => {
            state.calendarEventModalIsOpen = action.payload;
        },
    },
});

export const {
    setSettingModalIsOpen,
    setFaceRecognitionModalIsOpen,
    setFaceRecognitionTitle,
    setComposeEmailModalIsOpen,
    setCalendarEventModalIsOpen,
    setContactManagementModalIsOpen,
} = modalSlice.actions;

export default modalSlice.reducer;
