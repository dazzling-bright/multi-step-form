const { createSlice } = require("@reduxjs/toolkit");

const pageNumberSlice = createSlice({
  name: "pageNumber",
  initialState: {
    page: 1,
  },
  reducers: {
    changePageNumber: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { changePageNumber } = pageNumberSlice.actions;
export default pageNumberSlice.reducer;
