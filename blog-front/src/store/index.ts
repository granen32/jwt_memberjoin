// 리덕스 툴킷 설정
import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
// 디스패치 셀렉터 훅 설정
import rootReducer from "./module";

const initStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return { store };
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof initStore>["store"]["dispatch"];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const { store } = initStore();
export { store };
