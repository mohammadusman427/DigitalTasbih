import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isOnBoarding: false,
    isLogin: false,
    user: {},
    token: "",
  },
  reducers: {
    updateIsOnBoarding: (state, action) => {
      state.isOnBoarding = action.payload;
    },
    updateIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateIsOnBoarding, updateIsLogin, updateUser, updateToken } =
  userSlice.actions;

export default userSlice.reducer;
