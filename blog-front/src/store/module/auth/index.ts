import {
  createSlice,
  createSelector,
  PayloadAction,
  createAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import {
  AuthState,
  ChangeField,
  ChangeFieldResponse,
} from "../../../types/auth";

export const AUTH = "auth" as const;

const initialState: AuthState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
  changeField: null,
};
const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    editChangeField(state, action: PayloadAction<ChangeFieldResponse>) {
      const { list } = action.payload;
      state.changeField &&
        state.changeField.list.map((prd) => {
          if (prd.form === "register") {
            prd.form = prd.value;
          }
          if (prd.form === "login") {
            prd.form = prd.value;
          }
        });
    },
  },
});
const selfSelector = (state: RootState) => state[AUTH];
export const authSelector = createSelector(selfSelector, (state) => state.id);
export const authAction = authSlice.actions;
export const AuthReducers = authSlice.reducer;
