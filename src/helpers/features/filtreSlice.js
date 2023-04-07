import { createSlice } from "@reduxjs/toolkit";

export const filtreSlice = createSlice({
  name: "filtre",

  initialState: {
    filtre: "null",
  },
  reducers: {
    category: (state, action) => {
      state.filtre = action.payload;
    },
  },
});

export const { category } = filtreSlice.actions;

export const selectfiltre = (state) => state.filtre.filtre;

export default filtreSlice.reducer;
