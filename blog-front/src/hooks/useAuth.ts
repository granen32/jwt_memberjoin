import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  authAction,
  editChageSelector,
  registerSelector,
} from "../store/module/auth/index";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const editChageReducer = useAppSelector(editChageSelector);
  const registerReducer = useAppSelector(registerSelector);

  const setEditChange = useCallback(() => {
    dispatch(authAction.editChangeField);
  }, [dispatch]);
  const setRegister = useCallback(() => {
    dispatch(authAction.register);
  }, [dispatch]);
  return { editChageReducer, registerReducer, setEditChange, setRegister };
};

export default useAuth;
