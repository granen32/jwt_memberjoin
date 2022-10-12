import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { AuthState, ChangeField, RegisterProps } from "../../../types/auth";

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
  changeField: {
    form: "",
    key: "",
    value: "",
  },
  auth: null,
  authError: null,
};
const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    editChangeField(state, action: PayloadAction<ChangeField>) {
      const { form, key, value } = action.payload;
      state.changeField = {
        form: form,
        key: key,
        value: value,
      };
    },
    register(state, action: PayloadAction<RegisterProps>) {
      const { password, passwordConfirm, username } = action.payload;
      state.register = {
        username: username,
        password: password,
        passwordConfirm: passwordConfirm,
      };
    },
    initializeForm(state, action: PayloadAction<{ form: string[] }>) {
      const { form } = action.payload.form;
    },
  },
});

// state 초깃값 설정
const selfSelector = (state: RootState) => state[AUTH];

export const editChageSelector = createSelector(
  selfSelector,
  (state) => state.changeField
);

export const registerSelector = createSelector(
  selfSelector,
  (state) => state.register
);

export const authAction = authSlice.actions;
export const AuthReducers = authSlice.reducer;
