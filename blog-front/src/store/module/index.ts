import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducers, AUTH } from "./auth";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const rootPersistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [AUTH]: AuthReducers,
});

export default persistReducer(rootPersistConfig, rootReducer);
