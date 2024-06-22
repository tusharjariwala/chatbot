import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  isLoading: false,
  isLogging: false,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLogging = true;
      state.users = action.payload;
      state.isLoading = false;
    },
    resetUser: (state, action) => {
      state.isLogging = false;
      state.users = null;
      state.isLoading = false;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});
export const { setUser, resetUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
