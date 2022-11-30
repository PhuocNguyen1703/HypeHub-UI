import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        createUserModalIsOpen: false,
        notificationModalIsOpen: false,
        settingModalIsOpen: false,
        faceRecognitionModalIsOpen: false,
        faceRecognitionTitle: '',
        composeEmailModalIsOpen: false,
        emailInfoModalIsOpen: false,
        createTaskModalIsOpen: false,
        todoInfoModalIsOpen: false,
        contactManagementModalIsOpen: false,
        calendarEventModalIsOpen: false,
        createKanbanItemModalIsOpen: false,
        editProfileModalIsOpen: false,
        confirmModalIsOpen: true,
    },
    reducers: {
        setCreateUserModalIsOpen: (state, action) => {
            state.createUserModalIsOpen = action.payload;
        },
        setNotificationModalIsOpen: (state, action) => {
            state.notificationModalIsOpen = action.payload;
        },
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
        setEmailInfoModalIsOpen: (state, action) => {
            state.emailInfoModalIsOpen = action.payload;
        },
        setCreateTaskModalIsOpen: (state, action) => {
            state.createTaskModalIsOpen = action.payload;
        },
        setTodoInfoModalIsOpen: (state, action) => {
            state.todoInfoModalIsOpen = action.payload;
        },
        setContactManagementModalIsOpen: (state, action) => {
            state.contactManagementModalIsOpen = action.payload;
        },
        setCalendarEventModalIsOpen: (state, action) => {
            state.calendarEventModalIsOpen = action.payload;
        },
        setCreateKanbanItemModalIsOpen: (state, action) => {
            state.createKanbanItemModalIsOpen = action.payload;
        },
        setEditProfileModalIsOpen: (state, action) => {
            state.editProfileModalIsOpen = action.payload;
        },
        setConfirmModalIsOpen: (state, action) => {
            state.confirmModalIsOpen = action.payload;
        },
    },
});

export const {
    setCreateUserModalIsOpen,
    setNotificationModalIsOpen,
    setSettingModalIsOpen,
    setFaceRecognitionModalIsOpen,
    setFaceRecognitionTitle,
    setComposeEmailModalIsOpen,
    setEmailInfoModalIsOpen,
    setCreateTaskModalIsOpen,
    setTodoInfoModalIsOpen,
    setCalendarEventModalIsOpen,
    setContactManagementModalIsOpen,
    setCreateKanbanItemModalIsOpen,
    setEditProfileModalIsOpen,
    setConfirmModalIsOpen,
} = modalSlice.actions;

export default modalSlice.reducer;
