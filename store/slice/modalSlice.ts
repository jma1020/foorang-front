import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  isModal: boolean;
}

const initialState: ModalState = {
  isModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state) => {
      state.isModal = true;
    },
    close: (state) => {
      state.isModal = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
