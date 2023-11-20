import { configureStore } from "@reduxjs/toolkit";
import suggestionSlice from "./suggestionSlice";
import videoDataSlice from "./videosSlice";
import chatSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    suggestion_cache: suggestionSlice,
    videoData: videoDataSlice,
    chatData: chatSlice,
  },
});

export default store;
