import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    formDisplay: true,
    thanksAnimation: false,
    modalSeen: false,
  },
  reducers: {
    changeFormDisplay(state, action) {
      state.formDisplay = action.payload
    },
    changeThanksAnimation(state, action) {
      state.thanksAnimation = action.payload
    },
    changeModalSeen(state, action) {
      state.modalSeen = action.payload
    },
  }
});

export const { changeFormDisplay, changeThanksAnimation, changeModalSeen } = formSlice.actions
export default formSlice.reducer