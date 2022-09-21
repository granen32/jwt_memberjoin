import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { AuthState } from "../../../types/auth";
export const AUTH = "auth" as const;

const initialState: AuthState = {
  id: "",
};
const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    sampleAction(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
  },
});
const selfSelector = (state: RootState) => state[AUTH];
export const authSelector = createSelector(selfSelector, (state) => state.id);
export const authAction = authSlice.actions;
export const AuthReducers = authSlice.reducer;
