import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // checking,authenticated, not-authenticated
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, {payload}) => {
      state.status= "authenticated", // checking,authenticated, not-authenticated
      state.uid= payload.uid;
      state.email= payload.email;
      state.displayName= payload.displayName;
      state.photoUrl= payload.photoUrl;
      state.errorMessage= null;
    },

    logout: (state, {payload}) => {
      state.status= "not-authenticated", // checking,authenticated, not-authenticated
      state.uid= null;
      state.email= null;
      state.displayName= null;
      state.photoUrl= null;
      state.errorMessage= payload?.errorMessage;
    },
    checkingCredentials: (state) => {
        state.status='checking'
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
