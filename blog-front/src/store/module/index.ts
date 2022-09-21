import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducers, AUTH } from "./auth";

const rootReducer = combineReducers({
  [AUTH]: AuthReducers,
});

export default rootReducer;
