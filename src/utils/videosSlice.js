import { createSlice } from "@reduxjs/toolkit";

const videoDataSlice = createSlice({
  name: "videos",
  initialState: {
    videos: {},
  },
  reducers: {
    addData: (state, action) => {
      state.videos = action.payload;
    },
    addComment: (state, action) => {
      const { id, details } = action.payload;
      state.videos[id].comments = {
        ...state.videos[id].comments,
        [details[0]]: details[1],
      };

      // console.log(action.payload);
    },
  },
});

export default videoDataSlice.reducer;
export const { addData, addComment } = videoDataSlice.actions;
