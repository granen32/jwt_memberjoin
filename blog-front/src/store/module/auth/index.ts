import { createSlice, createSelector } from "@reduxjs/toolkit";

export const AUTH = "auth" as const;

const initialState = {};

const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    smapleAction(state, action) {
      state = action.payload;
    },
  },
});

export const authAction = authSlice.actions;
export const AuthReducers = authSlice.reducer;
