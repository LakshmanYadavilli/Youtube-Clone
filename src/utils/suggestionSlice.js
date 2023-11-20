import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestion-cache",
  initialState: {},
  reducers: {
    addToCache: (state, action) => {
      const { value, data } = action.payload;

      state[value] = data;
    },
  },
});

export default suggestionSlice.reducer;
export const { addToCache } = suggestionSlice.actions;
