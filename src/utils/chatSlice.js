import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "Chat",
  initialState: {
    chatArr: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.chatArr.splice(20, 1);
      state.chatArr.unshift(action.payload);
    },
  },
});

export default chatSlice.reducer;
export const { addChat } = chatSlice.actions;
