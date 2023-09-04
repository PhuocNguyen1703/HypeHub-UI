import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalType: null,
    data: {},
    isOpen: false,
  },
  reducers: {
    setModalOnOpen: (state, action) => {
      state.modalType = action.payload;
      state.isOpen = true;
    },
    setModalOnClose: (state) => {
      state.modalType = null;
      state.data = {};
      state.isOpen = false;
    },
  },
});

export const { setModalOnOpen, setModalOnClose } = modalSlice.actions;

export default modalSlice.reducer;
