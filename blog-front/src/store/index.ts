import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducers, AUTH } from "./module/auth";

const rootReducer = combineReducers({
  [AUTH]: AuthReducers,
});

export default rootReducer;
