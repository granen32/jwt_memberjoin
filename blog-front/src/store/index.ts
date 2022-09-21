// 리덕스 툴킷 설정
import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
// 디스패치 셀렉터 훅 설정
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./module";
import { composeWithDevTools } from "redux-devtools-extension";

const initStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  const persistor = persistStore(store);
  return { store, persistor };
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof initStore>["store"]["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const { store, persistor } = initStore();
export { store, persistor };
